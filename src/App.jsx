import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ParticlesComponent from "./components/background";
import HomePage from "./pages/Homepage";
import TeamPage from "./pages/Team";
import ProjectCard from "./pages/Projects";
import Blogs from "./pages/Blogs";
import WorkshopForm from "./pages/workshop";
import ProjectDetails from "./pages/ProjectDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/contactus";

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  const password = "secret123"; // Change this

  const handleLogin = () => {
    if (input === password) {
      setAuthorized(true);
    } else {
      alert("❌ Wrong password!");
    }
  };

  if (!authorized) {
    return (
      <div style={{
        height: "100vh",
        backgroundColor: "#0d1117",
        color: "#f0f6fc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif"
      }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
          🔐 Enter Password to Access the Site
        </h2>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #30363d",
            backgroundColor: "#161b22",
            color: "#f0f6fc",
            outline: "none",
            marginBottom: "12px",
            width: "250px",
            textAlign: "center"
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#238636",
            border: "none",
            borderRadius: "6px",
            color: "white",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </div>
    );
  }

  return (
    <>
      {/* <ParticlesComponent /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectCard />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact us" element={<ContactUs />} />
        <Route path="/events" element={<WorkshopForm />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
