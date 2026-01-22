"use client";

import { useEffect, useState } from "react";
import "./hero.css";
import LiquidEther from "./LiquidEther";

export default function Hero() {
  const words = [
    "build websites",
    "design modern UI",
    "develop apps",
    "create portfolios",
    "optimize Quality",
    "improve UX",
    "enhance visuals",
    "craft interfaces",
    "write programmes",
    "launch products",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing Effect Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!reverse) {
        if (subIndex === words[index].length) {
          setReverse(true);
          return;
        }
        setSubIndex((v) => v + 1);
      } else {
        if (subIndex === 0) {
          setReverse(false);
          setIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setSubIndex((v) => v - 1);
      }
    }, reverse ? 80 : 150);

    return () => clearTimeout(timer);
  }, [subIndex, index, reverse]);

  return (
    <section className="hero">
      {/* Background layer */}
      <div className="hero-bg">
        <LiquidEther />
      </div>

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Hillary-Prosper Wahua</span>.
          <br />
          I{" "}
          <span className="typing-text">
            {words[index].substring(0, subIndex)}
          </span>
          <span className="cursor">|</span>
        </h1>

        <p className="hero-desc">
          A passionate full-stack developer specializing in clean, scalable and
          high-performance digital products. I transform ideas into beautiful,
          functional experiences.
        </p>

        <div className="hero-btns">
          <a href="/projects" className="hero-btn primary">
            View Projects
          </a>
          <a href="/contact" className="hero-btn secondary">
            Hire Me
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <div className="hero-img-container">
          <img src="/images/prosper.png" alt="Owner" className="hero-img" />
        </div>
      </div>
    </section>
  );
}