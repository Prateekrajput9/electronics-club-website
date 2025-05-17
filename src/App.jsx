import { Route, Routes } from "react-router-dom";
import ParticlesComponent from "./components/background";
import HomePage from "./pages/Homepage";
import TeamPage from "./pages/Team";
import ProjectCard from "./pages/Projects";
import Blogs from "./pages/Blogs";
import WorkshopForm from "./pages/workshop";
import ProjectDetails from "./pages/ProjectDetails";
function App() {
  return (
    <>
      <ParticlesComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectCard />} />
        <Route path = "/projects/:id" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
         <Route path="*" element={<HomePage />} />
    <Route path="/workshop" element={<WorkshopForm />} />
      </Routes>
    </>
  );
}

export default App;
