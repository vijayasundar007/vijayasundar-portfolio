import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <span className="logo-mark">V</span>
        <span>Vijayasundar</span>
      </div>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </nav>

      <a
        className="nav-contact"
        href="mailto:vijayasundar.b@gmail.com"
      >
        Let's Talk
        <ArrowUpRight size={16} />
      </a>
    </header>
  );
}