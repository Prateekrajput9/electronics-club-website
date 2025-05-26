import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Papa from "papaparse";

const UPCOMING_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQmDYzV-CpQGWVFBHiGyHWLz5Qmfbpn8t_rOtgmvRMZr_93Z5LyDfJUoHplgxa2pdaL4MUtWwba4L1q/pub?output=csv";

const PREVIOUS_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ56zzI_MTYotx_eQkczXrgny0pP13eo-YU_a7CZptdI4wq2z-IpGXLJHJNOOVjx4vg5K_M21TkLSeb/pub?output=csv";

// Loading skeleton component
const WorkshopSkeleton = () => (
  <div className="bg-[#182238] p-4 sm:p-6 rounded-xl border border-cyan-900 animate-pulse">
    <div className="h-48 bg-cyan-900/20 rounded-lg mb-4"></div>
    <div className="h-6 bg-cyan-900/30 rounded mb-2"></div>
    <div className="h-4 bg-cyan-900/20 rounded mb-2 w-1/3"></div>
    <div className="h-4 bg-cyan-900/20 rounded w-2/3"></div>
  </div>
);

// Empty state component
const EmptyState = ({ type, icon }) => (
  <div className="col-span-full flex flex-col items-center justify-center py-12 px-4">
    <div className="text-6xl mb-4 opacity-50">{icon}</div>
    <h3 className="text-xl font-semibold text-cyan-300 mb-2">
      No {type} events found
    </h3>
    <p className="text-cyan-100/70 text-center max-w-md">
      {type === "upcoming" 
        ? "Stay tuned! We're working on exciting new events for you."
        : "This is where our past events will be showcased."
      }
    </p>
  </div>
);

// Workshop card component
const WorkshopCard = ({ workshop, isPrevious = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
      isPrevious 
        ? 'bg-gradient-to-br from-[#141b29] to-[#0f1621] border border-cyan-900/50 hover:shadow-lg hover:shadow-cyan-400/10' 
        : 'bg-gradient-to-br from-[#182238] to-[#141b29] border border-cyan-800 hover:shadow-xl hover:shadow-cyan-400/20'
    }`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-4 sm:p-6">
        {/* Image section */}
        {workshop.image && !imageError && (
          <div className="relative mb-4 -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 overflow-hidden">
            <div className="relative h-48 bg-cyan-900/20">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 animate-pulse"></div>
              )}
              <img
                src={workshop.image}
                alt={workshop.title}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        )}

        {/* Content section */}
        <div className="space-y-3">
          <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-200 ${
            isPrevious 
              ? 'text-cyan-200 group-hover:text-cyan-100' 
              : 'text-cyan-300 group-hover:text-cyan-200'
          }`}>
            {workshop.title}
          </h3>

          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className={`text-sm font-medium ${
              isPrevious ? 'text-cyan-400' : 'text-cyan-300'
            }`}>
              {formatDate(workshop.date)}
            </p>
          </div>

          {workshop.desc && (
            <p className="text-sm text-cyan-50/80 leading-relaxed line-clamp-3">
              {workshop.desc}
            </p>
          )}

          {/* Status badge */}
          <div className="pt-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isPrevious 
                ? 'bg-gray-700/50 text-gray-300' 
                : 'bg-cyan-500/20 text-cyan-300'
            }`}>
              {isPrevious ? '✓ Completed' : '🎯 Upcoming'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Workshops = () => {
  const [upcomingWorkshops, setUpcomingWorkshops] = useState([]);
  const [previousWorkshops, setPreviousWorkshops] = useState([]);
  const [upcomingLoading, setUpcomingLoading] = useState(true);
  const [previousLoading, setPreviousLoading] = useState(true);

  // Fetch upcoming workshops
  useEffect(() => {
    Papa.parse(UPCOMING_SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (results) => {
        const filtered = results.data.filter((w) => w.title && w.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const upcoming = filtered.filter((w) => {
          const dateObj = new Date(w.date);
          dateObj.setHours(0, 0, 0, 0);
          return dateObj >= today;
        });
        // Sort upcoming by date (soonest first)
        const sorted = upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
        setUpcomingWorkshops(sorted);
        setUpcomingLoading(false);
      },
      error: (err) => {
        console.error("PapaParse error (upcoming):", err);
        setUpcomingLoading(false);
      },
    });
  }, []);

  // Fetch previous workshops
  useEffect(() => {
    Papa.parse(PREVIOUS_SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (results) => {
        const filtered = results.data.filter((w) => w.title && w.date);
        const sorted = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPreviousWorkshops(sorted);
        setPreviousLoading(false);
      },
      error: (err) => {
        console.error("PapaParse error (previous):", err);
        setPreviousLoading(false);
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#0a1828] via-[#10172a] to-[#1a2235] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 p-4 sm:p-6 md:p-8">
          {/* Hero Section */}
          <div className="min-h-[200px] sm:min-h-[250px] mt-6 sm:mt-10 flex flex-col justify-center items-center text-center">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-fade-in">
                Events & Workshops
              </h1>
              <p className="text-lg sm:text-xl text-cyan-100/80 max-w-2xl mx-auto leading-relaxed">
                Discover amazing learning opportunities and connect with fellow developers
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {/* Upcoming Workshops */}
            <section className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-200">
                  📅 Upcoming Events
                </h2>
              </div>
              
              {upcomingLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <WorkshopSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingWorkshops.length === 0 ? (
                    <EmptyState type="upcoming" icon="🎯" />
                  ) : (
                    upcomingWorkshops.map((workshop, index) => (
                      <div
                        key={workshop.id || workshop.title + workshop.date}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <WorkshopCard workshop={workshop} />
                      </div>
                    ))
                  )}
                </div>
              )}
            </section>

            {/* Previous Workshops */}
            <section className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-200">
                  📜 Previous Events
                </h2>
              </div>
              
              {previousLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <WorkshopSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {previousWorkshops.length === 0 ? (
                    <EmptyState type="previous" icon="📚" />
                  ) : (
                    previousWorkshops.map((workshop, index) => (
                      <div
                        key={workshop.id || workshop.title + workshop.date}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <WorkshopCard workshop={workshop} isPrevious={true} />
                      </div>
                    ))
                  )}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Workshops;
