import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aswin D. All Rights Reserved.</p>

      <p>Built with React & ❤️</p>
    </footer>
  );
}

export default Footer;