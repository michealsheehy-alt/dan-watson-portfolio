const featuredWork = [
  {
    number: "01",
    category: "Social",
    title: "DWTS: The Next Pro",
    role: "Senior Social Media Producer",
    network: "ABC + Hulu",
    description:
      "Prime-time entertainment instincts translated into fast, platform-aware social storytelling.",
    image: "/images/credits/next-pro.webp",
    imageAlt: "Promotional artwork for Dancing with the Stars: The Next Pro",
    imagePosition: "center",
    visual: "key-art",
    tone: "blue",
  },
  {
    number: "02",
    category: "Social",
    title: "Beyond the Villa",
    role: "Senior Social Media Producer",
    network: "Peacock",
    description:
      "Social-first production built around personality, cultural momentum and audience conversation.",
    image: "/images/credits/beyond-the-villa.webp",
    imageAlt: "Beyond the Villa show logo",
    imagePosition: "center",
    visual: "dark-logo",
    tone: "pink",
  },
  {
    number: "03",
    category: "Reality",
    title: "American Idol",
    role: "Senior Field Producer",
    network: "ABC",
    description:
      "Character-led field storytelling shaped with warmth, pace and a clear eye for the memorable moment.",
    image: "/images/credits/american-idol.webp",
    imageAlt: "Promotional artwork for American Idol",
    imagePosition: "center",
    visual: "key-art",
    tone: "yellow",
  },
  {
    number: "04",
    category: "Reality",
    title: "Love Island USA",
    role: "Control Room Producer",
    network: "CBS",
    description:
      "High-pressure multi-camera production, tracking evolving stories and making decisions at broadcast speed.",
    image: "/images/credits/love-island-usa.webp",
    imageAlt: "Love Island USA show logo",
    imagePosition: "center",
    visual: "dark-logo",
    tone: "pink",
  },
  {
    number: "05",
    category: "Food",
    title: "Worst Cooks in America",
    role: "Senior Field Producer · 8 seasons",
    network: "Food Network",
    description:
      "Eight seasons balancing competition, comedy and the human beats that keep a returning format fresh.",
    image: "/images/credits/worst-cooks.png",
    imageAlt: "Worst Cooks in America show logo",
    imagePosition: "center",
    visual: "worst-cooks",
    tone: "blue",
  },
  {
    number: "06",
    category: "Talk",
    title: "The Project",
    role: "Talent Producer · 10 seasons",
    network: "Network 10 Australia",
    description:
      "A decade of timely entertainment, talent relationships and audience-first storytelling on nightly television.",
    image: "/images/credits/the-project.webp",
    imageAlt: "The Project show logo",
    imagePosition: "center",
    visual: "the-project",
    tone: "yellow",
  },
];

const creditGroups = [
  {
    label: "Social + development",
    credits: [
      ["DWTS: The Next Pro", "Senior Social Media Producer", "ABC + Hulu"],
      ["Beyond the Villa", "Senior Social Media Producer", "Peacock"],
      ["The Plus Bus", "Senior Social Media Producer", "TikTok"],
      ["Development", "Development Producer", "Fox"],
      ["Secret Star", "Senior Producer", "Fox"],
    ],
  },
  {
    label: "US unscripted",
    credits: [
      ["Claim to Fame", "Senior Field Producer", "ABC"],
      ["American Idol", "Senior Field Producer", "ABC"],
      ["The Real Dirty Dancing", "Senior Field Producer", "Fox"],
      ["Table Wars with Martha Stewart", "Senior Field Producer", "HGTV"],
      ["Worst Cooks in America", "Senior Field Producer · 8 seasons", "Food Network"],
      ["Halloween Baking Championship", "Senior Field Producer", "Food Network"],
      ["Holey Moley", "Senior Field Producer", "ABC"],
      ["Love Island USA", "Control Room Producer", "CBS"],
      ["Santa's Baking Blizzard", "Field Producer", "Food Network"],
      ["Martha Stewart's Cake Spectacular", "Field Producer", "Food Network"],
      ["Dancing with the Stars", "Field Producer", "ABC"],
      ["Common Sense", "Field Producer", "Fox"],
    ],
  },
  {
    label: "Australian television",
    credits: [
      ["Gogglebox", "Field Producer · 6 seasons", "Network 10"],
      ["MasterChef", "Senior Casting Producer", "Network 10"],
      ["Kiss Bang Love", "Senior Casting Producer", "Network 10"],
      ["Farmer Wants a Wife", "Field Producer", "Nine"],
      ["I'm a Celebrity…Get Me Out of Here!", "Field Producer", "Network 10"],
      ["The Project", "Talent Producer · 10 seasons", "Network 10"],
      ["Good Morning Australia", "Producer · 6 seasons", "Network 10"],
    ],
  },
  {
    label: "Radio",
    credits: [
      ["The Stick Shift", "Host", "Nova 100 FM"],
      ["The Morning Show", "Producer", "Nova 100 FM"],
      ["The Morning Show", "Roving Reporter", "Nova 100 FM"],
    ],
  },
];

const strengths = [
  ["01", "Talent direction + instant rapport"],
  ["02", "Field + multi-camera control room producing"],
  ["03", "Casting, story + development"],
  ["04", "Social strategy + platform-first production"],
];

const producedClips = [
  {
    id: "_jWuYH7KLdo",
    title: "Sarah Jessica Parker stops by The Project",
    platform: "The Project",
    views: "10K+ views",
  },
  {
    id: "dK4q5r9MWmI",
    title: "Brad Pitt on The Project",
    platform: "The Project",
    views: "11K+ views",
  },
  {
    id: "2vm63ejhA3k",
    title: "Katy Perry on The Project",
    platform: "The Project",
    views: "605K+ views",
  },
  {
    id: "c9VAOYiMlyM",
    title: "Will Ferrell on The Project",
    platform: "The Project",
    views: "94K+ views",
  },
  {
    id: "68rbpyg1v-s",
    title: "The Campaign: Julia Gillard meets Will Ferrell",
    platform: "Warner Bros. / The Project",
    views: "31K+ views",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Dan Watson, home">
          Dan Watson
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#credits">Credits</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">TV + social media producer</p>
          <h1>
            Big stories.
            <br />
            Real people.
            <br />
            No dead air.
          </h1>
          <p className="hero-intro">
            I&apos;m a Los Angeles–based producer with 15+ years shaping
            unscripted television, live entertainment and social content across
            the US and Australia.
          </p>
          <a className="button button-dark" href="#work">
            Explore selected credits <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-media" aria-label="Dan Watson and scenes from production">
          <span className="shape shape-blue" />
          <span className="shape shape-pink" />
          <figure className="media-card media-card-portrait">
            <img
              alt="Portrait of television and social media producer Dan Watson"
              src="/images/dan-watson.webp"
            />
          </figure>
          <figure className="media-card media-card-wide">
            <img
              alt="Reality television production filming an ensemble scene"
              src="/images/reality-set.webp"
            />
          </figure>
          <figure className="media-card media-card-small">
            <img
              alt="Editor and producer collaborating in post-production"
              src="/images/post-production.webp"
            />
          </figure>
        </div>

        <a className="scroll-cue" href="#work">
          Selected work
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div>
          <strong>15+</strong>
          <span>years producing</span>
        </div>
        <div>
          <strong>10M+</strong>
          <span>social views</span>
        </div>
        <div>
          <strong>US + AU</strong>
          <span>international credits</span>
        </div>
        <div>
          <strong>TV → social</strong>
          <span>stories built to travel</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>
            Hit formats.
            <br />
            Human moments.
          </h2>
          <p>
            From control rooms and field shoots to platform-first campaigns,
            Dan&apos;s credits span reality, competition, talk and social.
          </p>
        </div>

        <article className="featured-clip">
          <div className="featured-clip-copy">
            <p className="featured-clip-label">Featured social production</p>
            <h3>An original song. A family story.</h3>
            <p className="featured-clip-lead">
              Produced by Dan Watson for Idols Global—an emotional,
              character-led performance story that connected with a huge
              audience.
            </p>
            <div className="featured-clip-proof">
              <strong>1.5M+</strong>
              <span>YouTube views and counting</span>
            </div>
            <a
              className="featured-clip-link"
              href="https://youtu.be/VecMTNiLRmk"
              rel="noreferrer"
              target="_blank"
            >
              Watch on YouTube <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="featured-clip-video">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube-nocookie.com/embed/VecMTNiLRmk?rel=0"
              title="Incredible singer writes an original song after his grandfather comes out as gay, produced by Dan Watson"
            />
          </div>
        </article>

        <div className="produced-reel-heading">
          <div>
            <p className="eyebrow">More produced work</p>
            <h3>Conversations that travel.</h3>
          </div>
          <div className="reel-total">
            <strong>2.3M</strong>
            <span>combined YouTube views across the featured reel</span>
          </div>
        </div>

        <div className="produced-reel" aria-label="Additional clips produced by Dan Watson">
          {producedClips.map((clip) => (
            <a
              className="reel-card"
              href={`https://www.youtube.com/watch?v=${clip.id}`}
              key={clip.id}
              rel="noreferrer"
              target="_blank"
            >
              <div className="reel-card-image">
                <img
                  alt={`Video thumbnail for ${clip.title}`}
                  loading="lazy"
                  src={`https://i.ytimg.com/vi/${clip.id}/hqdefault.jpg`}
                />
                <span className="reel-card-play" aria-hidden="true">
                  ▶
                </span>
              </div>
              <div className="reel-card-copy">
                <div className="reel-card-meta">
                  <span>{clip.platform}</span>
                  <span>{clip.views}</span>
                </div>
                <h4>{clip.title}</h4>
                <p>
                  Produced by Dan Watson <span aria-hidden="true">↗</span>
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="work-grid">
          {featuredWork.map((item) => (
            <article className={`work-card work-card-${item.tone}`} key={item.number}>
              <div className={`work-image work-visual-${item.visual}`}>
                <img
                  alt={item.imageAlt}
                  src={item.image}
                  style={{ objectPosition: item.imagePosition }}
                />
                <span className="work-number">{item.number}</span>
                <span className="work-category">{item.category}</span>
              </div>
              <div className="work-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="work-credit">
                  <strong>{item.role}</strong>
                  <span>{item.network}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="credit-art-note">
          Show artwork and trademarks are the property of their respective
          owners and are used solely to identify Dan&apos;s production credits.
        </p>
      </section>

      <section className="impact-section">
        <div className="impact-copy">
          <p className="eyebrow eyebrow-light">The producer behind the moment</p>
          <h2>
            Prime-time
            <br />
            instincts.
            <br />
            Social speed.
          </h2>
        </div>
        <div className="impact-detail">
          <p className="impact-lead">
            Dan builds trust quickly—whether directing a high-stakes field
            shoot, guiding a multi-camera control room or working one-on-one
            with talent.
          </p>
          <p>
            His interview credits include Brad Pitt, Kim Kardashian, Ariana
            Grande and Will Ferrell. The result is work with comedy, heart and
            cinematic storytelling, delivered calmly under demanding
            production deadlines.
          </p>
          <div className="platform-list" aria-label="Selected networks and platforms">
            {["ABC", "Hulu", "Peacock", "CBS", "Fox", "TikTok", "HGTV", "Food Network"].map(
              (platform) => (
                <span key={platform}>{platform}</span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="credits-section" id="credits">
        <div className="credits-heading">
          <p className="eyebrow">Experience + credits</p>
          <h2>The full rundown.</h2>
          <p>
            Selected career credits across television, social, development and
            radio.
          </p>
        </div>
        <div className="credit-groups">
          {creditGroups.map((group) => (
            <section className="credit-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.credits.map(([title, role, network], index) => (
                  <li key={`${group.label}-${title}-${role}-${index}`}>
                    <div>
                      <strong>{title}</strong>
                      <span>{role}</span>
                    </div>
                    <span>{network}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-title">
          <p className="eyebrow">About Dan</p>
          <h2>
            Story first.
            <br />
            Always.
          </h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            Sharp editorial judgment, pop-culture instinct and a steady hand
            when the camera rolls.
          </p>
          <p>
            Dan Watson is a Los Angeles–based TV and social media producer with
            15+ years of experience across the US and Australia. He creates
            compelling conversations, finds the revealing beat in unscripted
            stories and knows how to make premium entertainment move at the
            speed of social.
          </p>
          <div className="strength-list">
            {strengths.map(([number, label]) => (
              <div className="strength" key={number}>
                <span>{number}</span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
          <a
            className="radio-story"
            href="https://www.starobserver.com.au/news/national-news/new-south-wales-news/melbourne-radio-goes-gay/12384"
            rel="noreferrer"
            target="_blank"
          >
            <span className="radio-story-label">Where it started / Nova 100 FM</span>
            <strong>The Stick Shift</strong>
            <p>
              Before television and socials, Dan hosted Australia&apos;s first
              LGBTQ+ program on commercial radio—sharpening his voice and
              deepening his connection with diverse audiences.
            </p>
            <span className="radio-story-link">
              Read the 2008 profile <span aria-hidden="true">↗</span>
            </span>
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>
          Let&apos;s make
          <br />
          the moment.
        </h2>
        <p>
          For television, social campaigns, development work and availability.
        </p>
        <a className="email-link" href="mailto:danielcharles78@gmail.com">
          Email Dan <span aria-hidden="true">↗</span>
        </a>
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/dan-watson-12211889/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/tastydan/"
          rel="noreferrer"
          target="_blank"
        >
          Instagram <span aria-hidden="true">↗</span>
        </a>
        <a
          className="social-link"
          href="https://www.threads.com/@tastydan"
          rel="noreferrer"
          target="_blank"
        >
          Threads <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="wordmark" href="#top">
          Dan Watson
        </a>
        <p>TV + social media producer</p>
        <a href="mailto:danielcharles78@gmail.com">Email ↗</a>
        <a
          href="https://www.linkedin.com/in/dan-watson-12211889/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn ↗
        </a>
        <p>© 2026 Dan Watson</p>
      </footer>
    </main>
  );
}
