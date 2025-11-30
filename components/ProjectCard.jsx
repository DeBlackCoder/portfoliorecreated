"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./projectcard.css";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <div className="card-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.short}</p>

        <button className="view-btn">
          View Details <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}
