import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
  id="contact"
  className="contact"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
      <h2>Contact</h2>

      <p>Interested in working together or have an opportunity?</p>

      <div className="contact-card">

  <p>
    <strong>Email:</strong>{" "}
    <a href="mailto:aswin.d.ciet">
      aswin.d.ciet@gmail.com
    </a>
  </p>

  <p>
    <strong>LinkedIn:</strong>{" "}
    <a
      href="https://www.linkedin.com/in/dj-aswin-568a732b5"
      target="_blank"
      rel="noopener noreferrer"
    >
      linkedin.com/in/dj-aswin-568a732b5
    </a>
  </p>

  <p>
    <strong>GitHub:</strong>{" "}
    <a
      href="https://github.com/DJ-Aswin"
      target="_blank"
      rel="noopener noreferrer"
    >
      github.com/DJ-Aswin
    </a>
  </p>

</div>
    </motion.section>
  );
}

export default Contact;