import "./Projects.css";
import { motion } from "framer-motion";
import arenahub from "../assets/images/arenahub.png";

const projects = [
  {
    title: "ArenaHub",
    image: arenahub,
    description: "Esports Tournament Management Platform",
    tech: "React • Node.js • Express • SQLite • JWT",
    demo: "https://bgmi-tournament-management-system-m.vercel.app",
    github: "https://github.com/DJ-Aswin/bgmi-tournament-management-system",
  },

  // Future projects
  // {
  //   title:"",
  //   image:"",
  //   description:"",
  //   tech:"",
  //   demo:"",
  //   github:"",
  // }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;