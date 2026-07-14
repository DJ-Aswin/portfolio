import "./Certificates.css";
import { motion } from "framer-motion";

function Certificates() {
   const certificates = [
  "NPTEL - Human Computer Interaction (Elite - 86%)",
  "NVIDIA - Fundamentals of Deep Learning",
  "Full Stack Development Internship - Logirtha Technologies",
  "Software Development Lifecycle Fundamentals - Great Learning"
];

  return (
    <motion.section
  id="certificates"
  className="certificates"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
      <h2>Certificates</h2>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <motion.div
  className="certificate-card"
  key={certificate}
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.2 }}
>
            {certificate}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certificates;