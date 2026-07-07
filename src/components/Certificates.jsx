import "./Certificates.css";

function Certificates() {
  const certificates = [
    "Google Data Analytics Professional Certificate",
    "Google Project Management Professional Certificate",
    "Career Essentials in Generative AI by Microsoft & LinkedIn",
    "SQL and Relational Databases 101",
    "Microsoft 365 Fundamentals",
    "Deloitte Data Analytics",
    "Essentials of Prompt Engineering",
    "Full Stack Development Internship Certificate"
  ];

  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate}>
            {certificate}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;