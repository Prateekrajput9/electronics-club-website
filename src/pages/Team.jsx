import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMembers } from "../data/members";

const TeamsPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique departments for filtering
  const departments = Array.from(
    new Set(teamMembers.map((member) => member.department))
  );

  // Filter members based on selected department and search query
  const filteredMembers = teamMembers.filter((member) => {
    const matchesDepartment = selectedDepartment
      ? member.department === selectedDepartment
      : true;
    
    const matchesSearch = searchQuery
      ? member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (member.position && member.position.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (member.email && member.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (member.department && member.department.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    
    return matchesDepartment && matchesSearch;
  });

  // Group filtered members by department
  const headMembers = filteredMembers.filter(
    (member) => member.department && member.department.toLowerCase() === "heads"
  );
  const webMembers = filteredMembers.filter(
    (member) => member.department && member.department.toLowerCase() === "web"
  );
  const memberMembers = filteredMembers.filter(
    (member) => member.department && member.department.toLowerCase() === "members"
  );
  const volunteerMembers = filteredMembers.filter(
    (member) => member.department && member.department.toLowerCase() === "volunteers"
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search and filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDepartment(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-24 pb-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-[350px] flex flex-col justify-center items-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow-lg">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds behind the Electronics Club at IIT Indore, working together to push the boundaries of innovation.
            </p>
          </div>

          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search team members..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-3 pl-12 pr-12 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mt-4 text-gray-400">
              Found {filteredMembers.length} member{filteredMembers.length !== 1 ? 's' : ''} 
              {searchQuery && ` matching "${searchQuery}"`}
            </div>
          )}

          {/* Department Filter */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedDepartment(null)}
              className={`px-5 py-2 rounded-full text-sm font-semibold shadow transition-all flex items-center gap-2
                ${
                  !selectedDepartment
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              <span>All</span>
              <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">
                {teamMembers.length}
              </span>
            </button>
            {departments.map((department) => {
              const count = teamMembers.filter(member => member.department === department).length;
              return (
                <button
                  key={department}
                  onClick={() => setSelectedDepartment(department)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold shadow transition-all flex items-center gap-2
                    ${
                      selectedDepartment === department
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  <span>
                    {department === "heads" && "👑"}
                    {department === "web" && "💻"}
                    {department === "members" && "🧑‍🤝‍🧑"}
                    {department === "volunteers" && "🤝"}
                  </span>
                  <span className="capitalize">{department}</span>
                  <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Clear Filters Button */}
          {(searchQuery || selectedDepartment) && (
            <div className="mt-4">
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-cyan-500/20 via-gray-700/20 to-blue-500/20 rounded-full my-8" />

      {/* Team Members by Position */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Heads Section */}
        {headMembers.length > 0 && (
          <>
            <h2 className="text-4xl font-extrabold mb-6 text-center uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-lg flex items-center justify-center gap-3">
              <span>Heads</span> <span>👑</span>
              <span className="text-lg font-normal text-gray-400">({headMembers.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
              {headMembers.map((member) => (
                <div
                  key={member.id}
                  className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-cyan-500/20 via-gray-700/20 to-blue-500/20 rounded-full my-12" />
          </>
        )}

        {/* Web Team Section */}
        {webMembers.length > 0 && (
          <>
            <h2 className="text-4xl font-extrabold mb-6 text-center uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 drop-shadow-lg flex items-center justify-center gap-3">
              <span>Web Team</span> <span>💻</span>
              <span className="text-lg font-normal text-gray-400">({webMembers.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
              {webMembers.map((member) => (
                <div
                  key={member.id}
                  className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-green-500/20 via-gray-700/20 to-blue-500/20 rounded-full my-12" />
          </>
        )}

        {/* Members Section */}
        {memberMembers.length > 0 && (
          <>
            <h2 className="text-4xl font-extrabold mb-6 text-center uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-lg flex items-center justify-center gap-3">
              <span>Members</span> <span>🧑‍🤝‍🧑</span>
              <span className="text-lg font-normal text-gray-400">({memberMembers.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
              {memberMembers.map((member) => (
                <div
                  key={member.id}
                  className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-purple-500/20 via-gray-700/20 to-pink-500/20 rounded-full my-12" />
          </>
        )}

        {/* Volunteers Section */}
        {volunteerMembers.length > 0 && (
          <>
            <h2 className="text-4xl font-extrabold mb-6 text-center uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-lg flex items-center justify-center gap-3">
              <span>Volunteers</span> <span>🤝</span>
              <span className="text-lg font-normal text-gray-400">({volunteerMembers.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {volunteerMembers.map((member) => (
                <div
                  key={member.id}
                  className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* No results message */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-1.01-6-2.709M15 11V9a6 6 0 00-12 0v2m0 0v10a2 2 0 002 2h8a2 2 0 002-2V11" />
              </svg>
              <h3 className="text-lg font-medium text-gray-300 mb-2">No team members found</h3>
              <p className="text-gray-400">
                {searchQuery 
                  ? `No team members found matching "${searchQuery}"`
                  : selectedDepartment 
                    ? `No team members found in the ${selectedDepartment} department.`
                    : "No team members found."
                }
              </p>
              {(searchQuery || selectedDepartment) && (
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full text-sm transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamsPage;
