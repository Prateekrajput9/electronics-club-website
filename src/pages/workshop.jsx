import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Papa from "papaparse";

// Replace this with your actual published CSV URL
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQmDYzV-CpQGWVFBHiGyHWLz5Qmfbpn8t_rOtgmvRMZr_93Z5LyDfJUoHplgxa2pdaL4MUtWwba4L1q/pub?output=csv";

const previousWorkshops = [
  {
    id: 1,
    title: "Soldering 101",
    date: "2025-04-15",
    desc: "Introductory workshop on soldering and prototyping.",
  },
  {
    id: 2,
    title: "FPGA for Beginners",
    date: "2025-03-30",
    desc: "Getting started with FPGAs and Verilog.",
  },
];

const Workshops = () => {
  const [upcomingWorkshops, setUpcomingWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (results) => {
        console.log("Parsed data:", results.data); // Debug: See what's loaded
        // Filter out rows missing title or date
        const filtered = results.data.filter((w) => w.title && w.date);
        // Only show workshops in the future
        const today = new Date();
        const upcoming = filtered.filter((w) => {
          // Parse date as YYYY-MM-DD
          const dateObj = new Date(w.date);
          return dateObj >= today;
        });
        setUpcomingWorkshops(upcoming);
        setLoading(false);
      },
      error: (err) => {
        console.error("PapaParse error:", err);
        setLoading(false);
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#0a1828] via-[#10172a] to-[#1a2235] p-8">
        <div className="min-h-[250px] mt-10 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Events</span>
          </h1>
        </div>

        {/* Upcoming Workshops */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-200">
            📅 Upcoming Events
          </h2>
          {loading ? (
            <div className="text-cyan-100">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingWorkshops.length === 0 ? (
                <div className="text-cyan-100">No upcoming events.</div>
              ) : (
                upcomingWorkshops.map((workshop) => (
                  <div
                    key={workshop.id}
                    className="bg-[#182238] p-6 rounded-xl shadow-lg hover:shadow-cyan-400/30 transition border border-cyan-900"
                  >
                    <h3 className="text-xl font-bold text-cyan-300">
                      {workshop.title}
                    </h3>
                    <p className="text-cyan-100">{workshop.date}</p>
                    <p className="mt-2 text-sm text-cyan-50">{workshop.desc}</p>
                    {workshop.registerLink && (
                      <Link
                        to={workshop.registerLink}
                        target="blank"
                        className="inline-block mt-4 bg-cyan-400 text-[#0a1828] font-semibold px-4 py-2 rounded hover:bg-cyan-300 transition"
                      >
                        Register
                      </Link>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </section>

        {/* Previous Workshops */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-cyan-200">
            📜 Previous Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {previousWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                className="bg-[#141b29] p-6 rounded-xl shadow hover:shadow-cyan-300/20 border border-cyan-900"
              >
                <h3 className="text-xl font-bold text-cyan-200">
                  {workshop.title}
                </h3>
                <p className="text-cyan-400">{workshop.date}</p>
                <p className="mt-2 text-sm text-cyan-50">{workshop.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Workshops;
