"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../components/motion";
import { IoMail, IoPhonePortrait, IoLocation } from "react-icons/io5";
import "./contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactCards = [
    { icon: <IoMail />, title: "Email", text: "hello@yourdomain.com" },
    { icon: <IoPhonePortrait />, title: "Phone", text: "+234 123 4567" },
    { icon: <IoLocation />, title: "Location", text: "Port Harcourt, Nigeria" },
  ];

  return (
    <motion.div
      className="contact-page-pro"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {/* HERO */}
      <motion.section className="contact-hero-pro" variants={fadeUp}>
        <h1>Let’s Collaborate</h1>
        <p>
          Have a project, idea, or question? Fill out the form below and I’ll get
          back to you promptly. Share as many details as possible so I can
          provide the best solution tailored to your needs.
        </p>

        <motion.div className="contact-cards-pro" variants={stagger}>
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              className="card"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {card.icon}
              <div>
                <strong>{card.title}</strong>
                <span>{card.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* FORM */}
      <motion.section className="contact-section-pro" variants={stagger}>
        <motion.form
          className="contact-form-pro"
          onSubmit={handleSubmit}
          variants={stagger}
        >
          <motion.div className="input-group" variants={fadeUp}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </motion.div>

          <motion.div className="input-group" variants={fadeUp}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </motion.div>

          <motion.div className="input-group" variants={fadeUp}>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject / Project Title"
              required
            />
          </motion.div>

          <motion.div className="input-group" variants={fadeUp}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message / Project Details"
              required
            />
          </motion.div>

          <motion.button type="submit" variants={fadeUp}>
            Send Message
          </motion.button>

          <motion.p className="form-subtext" variants={fadeUp}>
            I typically respond within 24 hours. Please provide a clear description of your project or inquiry for a faster response.
          </motion.p>
        </motion.form>
      </motion.section>
    </motion.div>
  );
}
