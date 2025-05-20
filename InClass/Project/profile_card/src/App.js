// src/App.js
import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import avatar from "./assets/avatar.png"; // Ensure avatar.png exists in src/assets
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function App() {
  const user = {
    name: "Jane Doe",
    title: "Frontend Developer",
    avatar: avatar,
    bio: "Enthusiastic web developer who loves React and UI/UX design.",
    social: [
      { platform: "GitHub", url: "https://github.com/janedoe", icon: <FaGithub /> },
      { platform: "LinkedIn", url: "https://linkedin.com/in/janedoe", icon: <FaLinkedin /> },
      { platform: "Twitter", url: "https://twitter.com/janedoe", icon: <FaTwitter /> },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <ProfileCard {...user} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
