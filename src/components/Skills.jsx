import "./Skills.css";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
  "C",
  "Python",
  "Java",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "SQL",
  "Git",
  "GitHub",
  "REST APIs",
  "JWT",
  "Vercel",
  "Render"
];

  return (
    <motion.section
  id="skills"
  className="skills"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>

      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div
  className="skill-card"
  key={skill}
  whileHover={{ y: -8, scale: 1.03 }}
  transition={{ duration: 0.2 }}
>
  {skill}
</motion.div>
        ))}
      </div>

    </motion.section>
  );
}

export default Skills;