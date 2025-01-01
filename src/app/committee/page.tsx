"use client";

import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ClubRoleDisplay from "../../../components/Team/ClubRoleDisplay";

const TeamPage: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "jp">("en");

  // Synchronize language with local storage
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "en" | "jp";
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "jp" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Store the selected language in local storage
  };

  return (
    <div className="flex flex-col bg-[#f8fafc] min-h-screen">
      {/* Header Component */}
      <Header language={language} onToggleLanguage={toggleLanguage} />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-16 sm:pt-16 md:pt-24 lg:-mt-48">
        <div className="w-full max-w-5xl p-4 sm:p-6 md:p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-4">
            {language === "en"
              ? "2025 Executive Committee"
              : "2025年度役員委員会"}
          </h1>

          {/* Club Role Display Component */}
          <ClubRoleDisplay language={language} />
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default TeamPage;
