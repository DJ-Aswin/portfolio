import "./Skills.css";

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
    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;