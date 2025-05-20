import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMembers } from "../data/members";

const TeamsPage = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  // Get unique departments
  const positions = Array.from(
    new Set(teamMembers.map((member) => member.position))
  );

  // Filter members based on selected department
  const filteredMembers = selectedPosition
    ? teamMembers.filter((member) => member.position === selectedPosition)
    : teamMembers;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-24 pb-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-[450px] flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds behind the Electronics Club at IIT
              Indore, working together to push the boundaries of innovation.
            </p>
          </div>

          {/* Department Filter */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedPosition(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  !selectedPosition
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              All
            </button>

            {positions.map((position) => (
              <button
                key={position}
                onClick={() => setSelectedPosition(position)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    selectedPosition === position
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                {position}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* No results message */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">
              No team members found in this department.
            </p>
          </div>
        )}
      </div>

      {/* Join the Team Section */}
      <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Passionate about electronics and innovation? We're always looking
            for talented individuals to join our club.
          </p>
          <a
            href="/contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
