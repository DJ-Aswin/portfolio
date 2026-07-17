import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2>About Me</h2>

        <p>
          I'm Aswin D, a Computer Science Engineering undergraduate passionate
          about Full Stack Development and building modern web applications.
        </p>

        <p>
          I enjoy learning new technologies, solving real-world problems, and
          continuously improving my technical and professional skills. My goal
          is to secure an internship where I can contribute, learn, and grow as
          a software developer.
        </p>
      </div>
    </motion.section>
  );
}

export default About;