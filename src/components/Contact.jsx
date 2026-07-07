import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <p>Interested in working together or have an opportunity?</p>

      <div className="contact-details">

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
    </section>
  );
}

export default Contact;