"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.css";
import Toggle from "./Toggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="nav-container">
      {/* Logo */}
      <div className="logo-left">
        <div className="nav-logo">
          <Link href="/">
            <img src="/svg/logo-real.svg" alt="logo" />
          </Link>
        </div>
      </div>

      {/* Desktop Links + Dark Mode Toggle */}
      <div className="nav-right">
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="desktop-toggle">
          <Toggle />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar rotate1" : "bar"}></div>
        <div className={menuOpen ? "bar hide" : "bar"}></div>
        <div className={menuOpen ? "bar rotate2" : "bar"}></div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link href="/articles" onClick={() => setMenuOpen(false)}>
          Articles
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <div className="mobile-toggle"  onClick={() => setMenuOpen(false)}>
          <Toggle />
        </div>
      </div>
    </header>
  );
}
