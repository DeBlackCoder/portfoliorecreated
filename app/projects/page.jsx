"use client";

import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import ProjectCard from "../../components/ProjectCard";
import ProjectPopup from "../../components/ProjectPopup";
import { projects } from "../../data/project"; // 🔹 import the shared data
import "./project.css";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container">
      {/* Section header */}
      <SectionHeader
        title="My Projects"
        subtitle="A collection of premium work I’ve built professionally."
      />

      {/* Projects grid */}
      <div className="projects-grid">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            onClick={() => setSelectedProject(proj)} // open popup
          />
        ))}
      </div>

      {/* Project popup for details */}
      <ProjectPopup
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
