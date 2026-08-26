import fs from "node:fs/promises";
import path from "node:path";

const clips = [
  {
    id: "7675108230372085006",
    title: "The siblings are fighting 😉",
    views: "372.8K views",
  },
  {
    id: "7677226421764263181",
    title: "Selena isn't on Jan's DTM list 🤭",
    views: "530.7K views",
  },
  {
    id: "7665429077339213070",
    title: "That performance was something special ❤️",
    views: "52.8K views",
  },
  {
    id: "7670021280816549133",
    title: "Tonight's episode was a roller coaster 🎢",
    views: "110.3K views",
  },
];

const originalDeployWorkflow = `name: Deploy GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build:github-pages

      - name: Configure Pages
        uses: actions/configure-pages@v5
        with:
          enablement: true

      - name: Upload site
        uses: actions/upload-pages-artifact@v4
        with:
          path: ./out

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
`;

const pagePath = "app/page.tsx";
let page = await fs.readFile(pagePath, "utf8");
const imageDir = "public/images/reel";
await fs.mkdir(imageDir, { recursive: true });

for (const clip of clips) {
  const videoUrl = `https://www.tiktok.com/@officialdwts/video/${clip.id}`;
  const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`;
  const response = await fetch(oembedUrl, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; DanWatsonPortfolio/1.0)",
      accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`TikTok oEmbed failed for ${clip.id}: ${response.status}`);
  }
  const data = await response.json();
  if (!data.thumbnail_url) {
    throw new Error(`TikTok oEmbed returned no thumbnail for ${clip.id}`);
  }

  const thumbResponse = await fetch(data.thumbnail_url, {
    headers: { "user-agent": "Mozilla/5.0" },
  });
  if (!thumbResponse.ok) {
    throw new Error(`Thumbnail fetch failed for ${clip.id}: ${thumbResponse.status}`);
  }
  const bytes = Buffer.from(await thumbResponse.arrayBuffer());
  const imageName = `dwts-${clip.id}.jpg`;
  await fs.writeFile(path.join(imageDir, imageName), bytes);

  const oldBlock = `  {\n    id: "${clip.id}",\n    title: "DWTS: The Next Pro social clip",\n    views: "New clip",\n    image: "/images/credits/next-pro.webp",\n    imageAlt: "Dancing with the Stars: The Next Pro TikTok clip",\n  },`;
  const newBlock = `  {\n    id: "${clip.id}",\n    title: ${JSON.stringify(clip.title)},\n    views: "${clip.views}",\n    image: "/images/reel/${imageName}",\n    imageAlt: ${JSON.stringify(`TikTok thumbnail for ${clip.title}`)},\n  },`;

  if (!page.includes(oldBlock)) {
    throw new Error(`Expected placeholder block not found for ${clip.id}`);
  }
  page = page.replace(oldBlock, newBlock);
}

await fs.writeFile(pagePath, page, "utf8");

for (const file of [
  ".github/workflows/tiktok-probe.yml",
  "scripts/probe-tiktok-metadata.mjs",
  ".github/workflows/finalize-tiktok.yml",
  "scripts/finalize-tiktok-cards.mjs",
]) {
  await fs.rm(file, { force: true });
}

await fs.writeFile(".github/workflows/deploy-pages.yml", originalDeployWorkflow, "utf8");

console.log("Finalized four DWTS TikTok cards, restored normal Pages deployment, and removed temporary tooling.");
