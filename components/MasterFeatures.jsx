"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import { CheckCircle } from "lucide-react";
import "./masterfeatures.css";

export default function MasterFeatures() {
  const features = [
    "Conversion-driven UI/UX implementation",
    "Enterprise-grade performance optimization",
    "Fully responsive across all breakpoints",
    "Search-optimized structure & indexing",
    "Clean, secure and scalable backend systems",
    "Component-driven, maintainable architecture",
    "Optimized loading strategy (lazy loading + caching)",
    "Future-proof codebase for long-term growth",
  ];

  return (
    <motion.section
      className="master-features-section"
      initial="initial"
      whileInView="animate"
      variants={stagger}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.div variants={fadeUp} className="mf-header">
        <h2>Core <span>Master Features</span></h2>
        <p>
          Industry-standard engineering practices that guarantee quality,
          performance and long-lasting digital experiences.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.ul className="mf-grid" variants={stagger}>
        {features.map((item, index) => (
          <motion.li key={index} variants={fadeUp} className="mf-item">
            <CheckCircle className="mf-icon" strokeWidth={1.7} />
            <p>{item}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
