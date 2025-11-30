"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "./motion";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      className="service-card"
      variants={scaleIn}
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <motion.button
        className="service-btn"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More →
      </motion.button>
    </motion.div>
  );
}
