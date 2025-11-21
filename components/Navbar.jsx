"use client";
import { useState } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-container">
      {/* Logo */}
      <div className="nav-logo">
        <Link href="/">
          <img src="/images/logo-real.png" alt="logo" />
        </Link>
      </div>

      {/* Desktop Links */}
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/articlespage">Articles</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Mobile Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar rotate1" : "bar"}></div>
        <div className={menuOpen ? "bar hide" : "bar"}></div>
        <div className={menuOpen ? "bar rotate2" : "bar"}></div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/articlespage" onClick={() => setMenuOpen(false)}>Articles</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}
