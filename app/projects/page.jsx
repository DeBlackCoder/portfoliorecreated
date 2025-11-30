"use client";

import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import ProjectCard from "../../components/ProjectCard";
import ProjectPopup from "../../components/ProjectPopup";
import "../../components/toggle.css";
import "./project.css";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Crea8hhaus Tech",
      short: "A Tech-team company website, with featured insights.",
      image: "/images/Screenshot (25).png",
      description:
        "A modern real estate web application featuring smart property search, admin dashboard, chatbot integration, user login system, and fast MongoDB backend.",
      role: "Frontend + Backend",
      stack: "Next.js, MongoDB, Node.js",
      website: "https://liveproject.com",
      github: "https://github.com/username/project",
    },
    {
      id: 2,
      title: "online Shopping Store",
      short: "An online shopping center for luxury products.",
      image: "/images/Screenshot (26).png",
      description:
        "A sleek portfolio website with smooth page transitions, interactive animations, and light performance-optimized sections.",
      role: "Frontend Developer",
      stack: "Next.js, Framer Motion",
      website: "https://liveproject.com",
      github: "https://github.com/username/project",
    },
    {
      id: 3,
      title: "Portfolio Website",
      short: "A portfolio website showcasing various projects.",
      image: "/images/Screenshot (27).png",
      description:
        "A fully automated e-commerce platform supporting real-time checkout, custom admin dashboard, and Stripe payments.",
      role: "Full-Stack Developer",
      stack: "Next.js, Stripe, MongoDB",
      website: "https://liveproject.com",
      github: "https://github.com/username/project",
    },

    {
      id: 4,
      title: "Crea8hhaus Tech",
      short: "A Tech-team company website, with featured insights.",
      image: "/images/Screenshot (25).png",
      description:
        "A modern real estate web application featuring smart property search, admin dashboard, chatbot integration, user login system, and fast MongoDB backend.",
      role: "Frontend + Backend",
      stack: "Next.js, MongoDB, Node.js",
      website: "https://liveproject.com",
      github: "https://github.com/username/project",
    },
    {
      id: 5,
      title: "online Shopping Store",
      short: "An online shopping center for luxury products.",
      image: "/images/Screenshot (26).png",
      description:
        "A sleek portfolio website with smooth page transitions, interactive animations, and light performance-optimized sections.",
      role: "Frontend Developer",
      stack: "Next.js, Framer Motion",
      website: "https://liveproject.com",
      github: "https://github.com/username/project",
    },
    {
      id: 6,
      title: "Portfolio Website",
      short: "A portfolio website showcasing various projects.",
      image: "/images/Screenshot (27).png",
      description:
        "A fully automated e-commerce platform supporting real-time checkout, custom admin dashboard, and Stripe payments.",
      role: "Full-Stack Developer",
      stack: "Next.js, Stripe, MongoDB",
      website: "https://liveproject.com",
      github: "https://github.com/username/project",
    },

    {
      id: 7,
      title: "Crea8hhaus Tech",
      short: "A Tech-team company website, with featured insights.",
      image: "/images/Screenshot (25).png",
      description:
        "A modern real estate web application featuring smart property search, admin dashboard, chatbot integration, user login system, and fast MongoDB backend.",
      role: "Frontend + Backend",
      stack: "Next.js, MongoDB, Node.js",
      website: "https://liveproject.com",
      github: "https://github.com/username/project",
    },
    {
      id: 8,
      title: "online Shopping Store",
      short: "An online shopping center for luxury products.",
      image: "/images/Screenshot (26).png",
      description:
        "A sleek portfolio website with smooth page transitions, interactive animations, and light performance-optimized sections.",
      role: "Frontend Developer",
      stack: "Next.js, Framer Motion",
      website: "https://liveproject.com",
      github: "https://github.com/username/project",
    },
    {
      id: 9,
      title: "Portfolio Website",
      short: "A portfolio website showcasing various projects.",
      image: "/images/Screenshot (27).png",
      description:
        "A fully automated e-commerce platform supporting real-time checkout, custom admin dashboard, and Stripe payments.",
      role: "Full-Stack Developer",
      stack: "Next.js, Stripe, MongoDB",
      website: "https://liveproject.com",
      github: "https://github.com/username/project",
    },
  ];

  return (
    <div className="projects-container">
      <SectionHeader
        title="My Projects"
        subtitle="A collection of premium work I’ve built professionally."
      />

      <div className="projects-grid">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            onClick={() => setSelectedProject(proj)}
          />
        ))}
      </div>

      <ProjectPopup
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
