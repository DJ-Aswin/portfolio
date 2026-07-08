import "./Hero.css";
import profile from "../assets/images/profile.png";
import resume from "../assets/resume/Aswin D Resume.pdf";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <p>Hello, I'm</p>

        <h1>Aswin D</h1>

        <h2>Computer Science Engineering Undergraduate</h2>

        <p>
          Passionate about Full Stack Development and building modern web
          applications. Currently seeking internship and placement opportunities.
        </p>

        <div className="hero-buttons">

  <a href={resume} download="Aswin D Resume.pdf">
    <button>Download Resume</button>
  </a>

  <a href="#contact">
    <button>Contact Me</button>
  </a>

  <div className="hero-socials">
  <a
    href="https://github.com/DJ-Aswin"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/dj-aswin-568a732b5"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a href="mailto:aswin.d.ciet@gmail.com">
    Email
  </a>
</div>npm

</div>

      </div>

      <div className="hero-right">

        <img
  src={profile}
  alt="Aswin"
  className="profile-image"
/>

      </div>

    </section>
  );
}

export default Hero;