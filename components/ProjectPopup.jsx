"use client";

import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./projectpopup.css";

export default function ProjectPopup({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div 
      className="popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="popup-box"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
      >
        <button className="close-btn" onClick={onClose}>
          <IoClose size={32} />
        </button>

        <img src={project.image} alt={project.title} className="popup-img" />

        <h2>{project.title}</h2>

        <p className="popup-desc">{project.description}</p>

        <div className="popup-info">
          <div>
            <strong>Role:</strong> {project.role}
          </div>
          <div>
            <strong>Stack:</strong> {project.stack}
          </div>
        </div>

        <div className="popup-links">
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="popup-link">
              <FaExternalLinkAlt /> Live Site
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="popup-link">
              <FaGithub /> GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
