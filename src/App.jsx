import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Hero />
      <About />
      <Projects />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
