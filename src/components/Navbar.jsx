import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{
        y: 5,
        scale: 1.01,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <h2>A5W1N.exe</h2>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;