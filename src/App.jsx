import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CurrentlyLearning from "./components/CurrentlyLearning";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CurrentlyLearning />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;