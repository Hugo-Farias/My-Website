import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
