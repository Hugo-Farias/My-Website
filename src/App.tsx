import "./App.scss";
import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import Modal from "./components/common/Modal";
import SkillsSection from "./components/home/SkillsSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ContactSection from "./components/home/ContactSection";
import { useQuery } from "@apollo/client";
import { pinnedRepositories } from "./graphql/PinnedRepositories.graphql";
import { githubApiData, query } from "../typeDefinitions";

function App() {
  const query: query<githubApiData> = useQuery(pinnedRepositories);

  return (
    <div className="app">
      <Navbar />
      <Modal data={query.data} />
      <Hero />
      <SkillsSection />
      <ProjectsSection query={query} />
      <ContactSection />
    </div>
  );
}

export default App;
