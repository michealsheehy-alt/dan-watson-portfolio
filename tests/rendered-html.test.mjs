import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();

  assert.match(html, developmentPreviewMeta);
  assert.match(html, /Man on the Street:/);
  assert.match(html, /Guest Producer, The Project/);
  assert.match(html, /SX8iBkgIPaw/);
  assert.match(html, /Kaylor Martin/);
  assert.match(html, /real people, human stories\./);

  for (const videoId of [
    "7460733014331378990",
    "7460280833665010987",
    "7460278347302473003",
    "7460755746263665963",
  ]) {
    assert.match(html, new RegExp(videoId));
  }
});
