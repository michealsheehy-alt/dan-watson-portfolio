(() => {
  const videoId = "7663173073230630174";

  const addClip = () => {
    const reel = document.querySelector(".produced-reel");
    if (!reel || reel.querySelector(`[href*="${videoId}"]`)) return;

    const card = document.createElement("a");
    card.className = "reel-card reel-card-tiktok";
    card.href = `https://www.tiktok.com/@officialdwts/video/${videoId}`;
    card.rel = "noreferrer";
    card.target = "_blank";
    card.innerHTML = `
      <div class="reel-card-image">
        <img
          alt="Official Dancing with the Stars TikTok produced by Dan Watson"
          loading="lazy"
          src="/images/credits/next-pro.webp"
        />
        <span class="reel-card-play" aria-hidden="true">▶</span>
      </div>
      <div class="reel-card-copy">
        <div class="reel-card-meta">
          <span>Official DWTS / TikTok</span>
          <span>Watch on TikTok</span>
        </div>
        <h4>DWTS: The Next Pro social clip</h4>
        <p>Produced by Dan Watson <span aria-hidden="true">↗</span></p>
      </div>
    `;

    const existingTikTokCard = reel.querySelector(".reel-card-tiktok");
    if (existingTikTokCard) {
      reel.insertBefore(card, existingTikTokCard);
    } else {
      reel.appendChild(card);
    }
  };

  const scheduleAdd = () => {
    window.requestAnimationFrame(() => window.setTimeout(addClip, 0));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleAdd, { once: true });
  } else {
    scheduleAdd();
  }
})();
