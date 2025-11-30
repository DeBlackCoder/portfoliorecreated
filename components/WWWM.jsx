"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "./motion";
import { Star, ShieldCheck, Zap, Users, Layers, Compass } from "lucide-react";
import "./wwwm.css";

export default function WhyWorkWithMe() {
  const items = [
   {
  icon: <Star />,
  title: "Quality-Driven",
  text: "Every project is crafted with precision, best practices and high-end UI standards.",
},
{
  icon: <Zap />,
  title: "Fast & Efficient",
  text: "I develop clean, optimized systems that load fast and scale smoothly.",
},
{
  icon: <ShieldCheck />,
  title: "Reliable & Secure",
  text: "Security-focused development that ensures your digital presence is protected.",
},
{
  icon: <Users />,
  title: "Client-Centered",
  text: "Transparent communication and a workflow shaped around your success.",
},


{
  icon: <Layers />,
  title: "Scalable Engineering",
  text: "I build solutions designed for long-term growth, modular updates and seamless scaling.",
},
{
  icon: <Compass />,
  title: "Strategic Execution",
  text: "Every decision is guided by clarity, research and forward-thinking digital strategy.",
},


   
  ];

  return (
    <motion.section
      className="why-section"
      initial="initial"
      whileInView="animate"
      variants={stagger}
      viewport={{ once: true }}
    >
      <motion.div variants={fadeUp} className="why-header">
        <h2>Why Work <span>With Me</span></h2>
        <p>I deliver excellence through experience, precision and a passion for building remarkable digital products.</p>
      </motion.div>

      <motion.div variants={stagger} className="why-grid">
        {items.map((item, index) => (
          <motion.div key={index} variants={fadeUp} className="why-card">
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
