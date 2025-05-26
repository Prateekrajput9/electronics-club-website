import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMembers } from "../data/members";

const TeamsPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Get unique departments for filtering
  const departments = Array.from(
    new Set(teamMembers.map((member) => member.department))
  );

  // Filter members based on selected department
  const filteredMembers = selectedDepartment
    ? teamMembers.filter((member) => member.department === selectedDepartment)
    : teamMembers;

  // Group members by department
  const headMembers = filteredMembers.filter(
    (member) =>
      member.department &&
      member.department.toLowerCase() === "heads"
  );
 const webMembers = filteredMembers.filter(
    (member) =>
      member.department &&
      member.department.toLowerCase() === "web"
  );
  const memberMembers = filteredMembers.filter(
    (member) =>
      member.department &&
      member.department.toLowerCase() === "members"
  );

  const volunteerMembers = filteredMembers.filter(
    (member) =>
      member.department &&
      member.department.toLowerCase() === "volunteers"
  );

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
              onClick={() => setSelectedDepartment(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  !selectedDepartment
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              All
            </button>

            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    selectedDepartment === department
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                {department}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members by Position */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Heads Section */}
        {headMembers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400 text-center uppercase tracking-wide">
              Heads
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {headMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Members Section */}
        {memberMembers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400 text-center uppercase tracking-wide">
              Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {memberMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}
 {/* web Section */}
        {webMembers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400 text-center uppercase tracking-wide">
            Web Dev Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {webMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}
        {/* Volunteers Section */}
        {volunteerMembers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400 text-center uppercase tracking-wide">
              Volunteers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {volunteerMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

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
      {/* <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"> */}
          {/* <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Passionate about electronics and innovation? We're always looking
            for talented individuals to join our club.
          </p>
          <a
            href="/contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Get in Touch
          </a> */}
        </div>
    //   </div>
    // </div>
  );
};

export default TeamsPage;
