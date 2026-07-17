import "./CurrentlyLearning.css";

function CurrentlyLearning() {
  return (
    <section className="learning">
      <div className="container">
        <h2>Currently Exploring</h2>

        <div className="learning-grid">
          <div className="learning-card">
            🚀 Data Structures & Algorithms
          </div>

          <div className="learning-card">
            ⚙️ Backend Development
          </div>

          <div className="learning-card">
            ☁️ DevOps Fundamentals
          </div>

          <div className="learning-card">
            🏗️ System Design Basics
          </div>

          <div className="learning-card">
            💻 Modern React Ecosystem
          </div>

          <div className="learning-card">
            🤖 AI-assisted Development
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentlyLearning;