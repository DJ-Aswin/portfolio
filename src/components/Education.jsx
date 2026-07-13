import "./Education.css";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
  id="education"
  className="education"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
      <h2>Education</h2>

      <motion.div
  className="education-card"
  whileHover={{ y: -10, scale: 1.02 }}
  transition={{ duration: 0.25 }}
>
        <h3>Bachelor of Engineering - Computer Science and Engineering</h3>

        <h4>Coimbatore Institute of Engineering and Technology (CIET)</h4>

        <p>
          Currently pursuing my undergraduate degree with a strong interest in
          software development, full-stack web development, and problem solving.
        </p>

        <p>
          <strong>CGPA:</strong> 8.10 (Current)
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Education;