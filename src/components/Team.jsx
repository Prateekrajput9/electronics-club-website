const members = [
    { name: "Adavy", role: "President" },
    { name: "Varad", role: "Vice President" },
    { name: "Prashant", role: "Tech Head" },
  ];
  
  const Team = () => {
    return (
      <section className="py-16 px-6 max-w-5xl mx-auto" id="team">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {members.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Team;
  