const work = [
  {
    number: "01",
    category: "Reality television",
    title: "Returning reality series",
    description:
      "Character-led storytelling shaped for pace, jeopardy and must-watch moments.",
    image: "/images/reality-set.webp",
    imagePosition: "center",
    tone: "blue",
  },
  {
    number: "02",
    category: "Entertainment",
    title: "Studio & format production",
    description:
      "Big personalities, clear formats and production that keeps the energy moving.",
    image: "/images/camera-operator.webp",
    imagePosition: "center 32%",
    tone: "pink",
  },
  {
    number: "03",
    category: "Social",
    title: "Social-first series",
    description:
      "Fast, platform-aware content designed to hook early and travel further.",
    image: "/images/post-production.webp",
    imagePosition: "center",
    tone: "yellow",
  },
  {
    number: "04",
    category: "Development",
    title: "Casting & story development",
    description:
      "Finding the people, tensions and emotional turns that make unscripted work.",
    image: "/images/reality-set.webp",
    imagePosition: "70% center",
    tone: "pink",
  },
  {
    number: "05",
    category: "Post-production",
    title: "Edit producing",
    description:
      "Turning a mountain of footage into a focused, funny and human final story.",
    image: "/images/post-production.webp",
    imagePosition: "center",
    tone: "blue",
  },
  {
    number: "06",
    category: "Digital",
    title: "Campaign cutdowns",
    description:
      "Flexible edits, short-form storytelling and extra life for every production.",
    image: "/images/camera-operator.webp",
    imagePosition: "center 25%",
    tone: "yellow",
  },
];

const strengths = [
  ["01", "Reality television"],
  ["02", "Entertainment"],
  ["03", "Social media content"],
  ["04", "20+ years in the industry"],
];

function PlayIcon() {
  return <span aria-hidden="true" className="play-icon" />;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Dan Watson, home">
          Dan Watson
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Reality TV + social content producer</p>
          <h1>
            Unscripted
            <br />
            stories people
            <br />
            stop for.
          </h1>
          <p className="hero-intro">
            For more than 20 years, I&apos;ve produced sharp, human
            entertainment built around real personalities—and made to travel
            across screens.
          </p>
          <a className="button button-dark" href="#reel">
            <span className="button-play">
              <PlayIcon />
            </span>
            Watch reel
          </a>
        </div>

        <div className="hero-media" aria-label="Behind the scenes in production">
          <span className="shape shape-blue" />
          <span className="shape shape-pink" />
          <figure className="media-card media-card-portrait">
            <img
              alt="Camera operator filming a reality television interview"
              src="/images/camera-operator.webp"
            />
            <span className="card-play">
              <PlayIcon />
            </span>
          </figure>
          <figure className="media-card media-card-wide">
            <img
              alt="Reality television production filming an ensemble scene"
              src="/images/reality-set.webp"
            />
            <span className="card-play">
              <PlayIcon />
            </span>
          </figure>
          <figure className="media-card media-card-small">
            <img
              alt="Editor and producer collaborating in post-production"
              src="/images/post-production.webp"
            />
            <span className="card-play">
              <PlayIcon />
            </span>
          </figure>
        </div>

        <a className="scroll-cue" href="#work">
          Selected work
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Real people.<br />Proper stories.</h2>
          <p>
            A portfolio spanning reality television, entertainment formats and
            social-first production.
          </p>
        </div>

        <div className="work-grid">
          {work.map((item) => (
            <article className={`work-card work-card-${item.tone}`} key={item.number}>
              <div className="work-image">
                <img
                  alt=""
                  src={item.image}
                  style={{ objectPosition: item.imagePosition }}
                />
                <span className="work-number">{item.number}</span>
                <span className="work-category">{item.category}</span>
              </div>
              <div className="work-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="work-link">
                  Project credit to add <span aria-hidden="true">↗</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="draft-note">
          This first portfolio draft uses representative project categories.
          Dan&apos;s actual show titles, production companies and credits can be
          dropped straight into these cards.
        </p>
      </section>

      <section className="reel-section" id="reel">
        <div className="reel-copy">
          <p className="eyebrow eyebrow-light">Showreel</p>
          <h2>Ninety seconds.<br />No filler.</h2>
          <p>
            A dedicated reel player is ready for Dan&apos;s Vimeo, YouTube or
            hosted video link.
          </p>
          <span className="reel-status">Showreel link to add</span>
        </div>
        <div className="reel-frame" aria-label="Showreel placeholder">
          <img
            alt="Behind the scenes of a reality television production"
            src="/images/reality-set.webp"
          />
          <div className="reel-overlay">
            <span className="reel-play">
              <PlayIcon />
            </span>
            <span>Dan Watson / Showreel</span>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-title">
          <p className="eyebrow">About Dan</p>
          <h2>Story first.<br />Always.</h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            Dan Watson is a Los Angeles–based TV and social media producer with
            more than 20 years of experience in entertainment.
          </p>
          <p>
            His work is rooted in the unpredictable, funny and revealing
            moments that make reality television impossible to turn off—and in
            reshaping those stories for the way audiences watch and share
            content now.
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
            <span className="radio-story-label">Before LA / Nova 100</span>
            <strong>The Stick Shift</strong>
            <p>
              Dan created and hosted Australia&apos;s first LGBTQ+ program on
              commercial radio—an inclusive entertainment show made for
              everyone.
            </p>
            <span className="radio-story-link">
              Read the 2008 profile <span aria-hidden="true">↗</span>
            </span>
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Got a story<br />worth stopping for?</h2>
        <p>
          For commissions, productions, development work and availability.
        </p>
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/dan-watson-12211889/"
          rel="noreferrer"
          target="_blank"
        >
          Connect on LinkedIn <span aria-hidden="true">↗</span>
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
        <span className="contact-placeholder">Email address to add</span>
      </section>

      <footer>
        <a className="wordmark" href="#top">
          Dan Watson
        </a>
        <p>TV + social content producer</p>
        <a
          href="https://www.linkedin.com/in/dan-watson-12211889/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn ↗
        </a>
        <a href="https://www.instagram.com/tastydan/" rel="noreferrer" target="_blank">
          Instagram ↗
        </a>
        <p>© 2026 Dan Watson</p>
      </footer>
    </main>
  );
}
