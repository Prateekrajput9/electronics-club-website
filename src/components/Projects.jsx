const projects = [
    { title: "Line Follower Bot", desc: "Autonomous robot using IR sensors." },
    { title: "IoT Home Automation", desc: "Control appliances via phone." },
    { title: "Signal Jammer", desc: "Made for a techfest demo." },
  ];
  
  const Projects = () => {
    return (
      <section className="py-16 px-6 bg-gray-100" id="projects">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  