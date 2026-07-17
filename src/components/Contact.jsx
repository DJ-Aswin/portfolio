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
      <div className="container">
        <h2>Contact</h2>

        <p className="contact-subtitle">
          Interested in working together or have an opportunity? Let's connect.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <div className="contact-info">
              <h3>📧 Email</h3>
              <a href="mailto:aswin.d.ciet@gmail.com">
                aswin.d.ciet@gmail.com
              </a>
            </div>

            <span className="contact-arrow">→</span>
          </div>

          <div className="contact-card">
            <div className="contact-info">
              <h3>💼 LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/dj-aswin-568a732b5"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/dj-aswin-568a732b5
              </a>
            </div>

            <span className="contact-arrow">→</span>
          </div>

          <div className="contact-card">
            <div className="contact-info">
              <h3>💻 GitHub</h3>
              <a
                href="https://github.com/DJ-Aswin"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/DJ-Aswin
              </a>
            </div>

            <span className="contact-arrow">→</span>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default Contact;