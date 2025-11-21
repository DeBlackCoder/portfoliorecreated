"use client";
import "./footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Name */}
        <div className="footer-logo">
          <Link href="/" className="logo">
            <img src="\images\logo-real.png" alt="" />
          </Link>
        </div>
       

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://github.com/" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} DeBlackCoder. All rights reserved.
      </div>
    </footer>
  );
}
