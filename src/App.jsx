import { Route, Routes } from "react-router-dom";
import ParticlesComponent from "./components/background";
import HomePage from "./pages/Homepage";
import TeamPage from "./pages/Team";
import ProjectCard from "./pages/Projects";
function App() {
  return (
    <>
      <ParticlesComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectCard />} />
      </Routes>
    </>
  );
}

export default App;
