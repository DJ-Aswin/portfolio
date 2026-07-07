import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>ArenaHub - Esports Tournament Management System</h3>

        <p>
          A full-stack web application that streamlines esports tournament
          management with role-based authentication, tournament creation,
          team registration, voting, OTP email verification, and an admin
          dashboard.
        </p>

        <p>
          <strong>Tech Stack:</strong> React, Node.js, Express.js, SQLite,
          JWT, Nodemailer, Vercel, Render
        </p>

        <div className="project-buttons">
         <a
  href="https://bgmi-tournament-management-system-m.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>Live Demo</button>
</a>

<a
  href="https://github.com/DJ-Aswin/bgmi-tournament-management-system"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>GitHub</button>
</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;