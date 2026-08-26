const ids = [
  "7675108230372085006",
  "7677226421764263181",
  "7665429077339213070",
  "7670021280816549133",
];

const headers = {
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
  "accept-language": "en-US,en;q=0.9",
  accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8",
};

function findCount(text) {
  const patterns = [
    /"playCount"\s*:\s*"?(\d+)"?/,
    /"viewCount"\s*:\s*"?(\d+)"?/,
    /"play_count"\s*:\s*"?(\d+)"?/,
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return Number(match[1]);
  }
  return null;
}

async function getText(url, extraHeaders = {}) {
  const response = await fetch(url, {
    headers: { ...headers, ...extraHeaders },
    redirect: "follow",
  });
  return {
    status: response.status,
    url: response.url,
    text: await response.text(),
  };
}

for (const id of ids) {
  const videoUrl = `https://www.tiktok.com/@officialdwts/video/${id}`;
  const result = { id, videoUrl };

  try {
    const oembed = await getText(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`,
      { accept: "application/json" },
    );
    result.oembedStatus = oembed.status;
    try {
      const data = JSON.parse(oembed.text);
      result.title = data.title ?? null;
      result.thumbnailUrl = data.thumbnail_url ?? null;
      result.authorName = data.author_name ?? null;
    } catch {
      result.oembedPreview = oembed.text.slice(0, 300);
    }
  } catch (error) {
    result.oembedError = String(error);
  }

  const endpoints = [
    ["page", videoUrl],
    ["itemDetail", `https://www.tiktok.com/api/item/detail/?itemId=${id}`],
    ["player", `https://www.tiktok.com/player/v1/${id}?description=1&music_info=1`],
    ["embed", `https://www.tiktok.com/embed/v2/${id}`],
  ];

  for (const [name, url] of endpoints) {
    try {
      const response = await getText(url, { referer: videoUrl });
      result[`${name}Status`] = response.status;
      result[`${name}Bytes`] = response.text.length;
      const count = findCount(response.text);
      if (count != null) result[`${name}ViewCount`] = count;
      if (name === "itemDetail") {
        try {
          const data = JSON.parse(response.text);
          const item = data?.itemInfo?.itemStruct;
          if (item) {
            result.itemDetailTitle = item.desc ?? null;
            result.itemDetailViewCount = item.stats?.playCount ?? result.itemDetailViewCount ?? null;
            result.itemDetailCover =
              item.video?.cover ?? item.video?.originCover ?? item.video?.dynamicCover ?? null;
          }
        } catch {
          result.itemDetailPreview = response.text.slice(0, 300);
        }
      }
    } catch (error) {
      result[`${name}Error`] = String(error);
    }
  }

  console.log(`TIKTOK_META ${JSON.stringify(result)}`);
}
