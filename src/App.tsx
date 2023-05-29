import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { useQuery } from "@apollo/client";
import { pinnedRepositories } from "./graphql/PinnedRepositories.graphql";
import { githubApiData, query } from "../typeDefinitions";

function App() {
  const query: query<githubApiData> = useQuery(pinnedRepositories);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectsSection query={query} />
      <ContactSection />
    </div>
  );
}

export default App;
