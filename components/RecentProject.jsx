"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project"; // shared data
import "./recentproject.css";

export default function RecentProjects() {
  const recent = projects.slice(0, 3); // top 3 recent projects

  return (
    <section className="recent-section">
      <div className="recent-header">
        <h2>Recent Projects</h2>
      </div>

      <div className="recent-grid">
        {recent.map((proj) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            onClick={() => (window.location.href = proj.website)}
          />
        ))}
      </div>

      <a href="/projects" className="view-all-btn">
        View All Projects →
      </a>
    </section>
  );
}
