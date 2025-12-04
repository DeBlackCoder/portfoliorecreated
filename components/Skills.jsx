"use client";
import { useEffect, useState, useRef } from "react";
import "./skills.css";
import RecentProjects from "./RecentProject";

export default function Skills() {
  const webSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 73  },
    { name: "React", level: 82 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 85 },
  ];

  const otherSkills = [
    "Graphic Design",
    "UI/UX Design",
    "Motion Graphics",
    "Branding",
    "Photography",
    "Video Editing",
    "Figma",
    "Adobe Photoshop",
  ];

  const [animatedLevels, setAnimatedLevels] = useState(
    webSkills.map(() => 0)
  );
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3}
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const interval = setInterval(() => {
      setAnimatedLevels((prevLevels) =>
        prevLevels.map((val, idx) =>
          val < webSkills[idx].level ? val + 1 : val
        )
      );
    }, 15);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return (
    <section className="skills-section" ref={sectionRef}>
      {/* Web & Development Skills */}
      <div className="skills-main">
        <h2 className="skills-title">Web & Development Skills</h2>
        <p className="skills-desc">
          Core technologies I specialize in, with proficiency percentages.
        </p>

        <div className="skills-bars">
          {webSkills.map((skill, idx) => (
            <div className="skill-bar-container" key={idx}>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${animatedLevels[idx]}%` }}
                ></div>
              </div>
              <span className="skill-level">{animatedLevels[idx]}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Creative & Tech Skills */}
      <div className="skills-other">
        <h3 className="other-title">Other Skills</h3>
        <div className="other-skills">
          {otherSkills.map((skill, idx) => (
            <span className="other-skill" key={idx}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <RecentProjects />
    </section>
  );
}
