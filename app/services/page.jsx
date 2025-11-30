"use client";

import { motion } from "framer-motion";
import { fadeUp, fade, stagger } from "../../components/motion";
import ServiceCard from "../../components/ServiceCard";
import MasterFeatures from "../../components/MasterFeatures";
import { FaGlobe, FaCogs, FaPaintBrush, FaRocket, FaMobileAlt, FaServer, FaChartLine, FaTools } from "react-icons/fa";
import "./services.css";
import WhyWorkWithMe from "@/components/WWWM";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaGlobe size={38} />,
      title: "Web Design",
      description:
        "Designing modern, responsive and visually engaging websites tailored to enhance your brand identity and user experience.",
    },
    {
      icon: <FaCogs size={38} />,
      title: "Full-Stack Development",
      description:
        "Building secure, scalable and high-performance applications with structured backend architecture and clean API workflows.",
    },
    {
      icon: <FaPaintBrush size={38} />,
      title: "Product UI/UX",
      description:
        "Creating intuitive, user-centered interfaces with improved flow, accessibility and seamless interactions.",
    },
    {
      icon: <FaRocket size={38} />,
      title: "SEO Optimization",
      description:
        "Boosting visibility, ranking and organic traffic with modern on-page optimization and search indexing strategies.",
    },
    {
      icon: <FaMobileAlt size={38} />,
      title: "Mobile-First Development",
      description:
        "Implementing mobile-optimized layouts and responsive structures for the best experience across devices.",
    },
    {
      icon: <FaServer size={38} />,
      title: "API & Backend Systems",
      description:
        "Developing reliable and optimized backend services with secure data handling and efficient server-side logic.",
    },
    {
      icon: <FaChartLine size={38} />,
      title: "Analytics & Performance",
      description:
        "Improving loading speed, performance, engagement and business KPIs through data-driven enhancements.",
    },
    {
      icon: <FaTools size={38} />,
      title: "Maintenance & Updates",
      description:
        "Providing continuous support, monitoring and system updates to ensure long-term stability and reliability.",
    },
  ];

  return (
    <div className="services-page">
      
      {/* HERO */}
      <motion.section
        className="services-hero"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1 variants={fadeUp}>
          Services That Elevate Your Digital Identity
        </motion.h1>

        <motion.p variants={fadeUp}>
          Modern, scalable and user-focused solutions designed for long-term performance, consistency and growth.
        </motion.p>
      </motion.section>

      {/* SERVICES GRID */}
      <motion.section
        className="services-grid"
        initial="initial"
        whileInView="animate"
        variants={stagger}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.section>

      {/* MASTER FEATURES */}
      <MasterFeatures />

      <WhyWorkWithMe />

      <div className="service-contact">
        <button>
            Contact Me
        </button>
      </div>
    </div>
  );
}
