import {
  ArrowDown,
  ArrowRight,
  Bot,
  Code2,
  Database,
  Workflow,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-grid"></div>

      <div className="hero-content">

        <div className="hero-status">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-label">
          AUTOMATION ENGINEER / DEVELOPER
        </p>

        <h1>
          Building systems
          <br />
          that <span>work for you.</span>
        </h1>

        <p className="hero-description">
          I'm <strong>Vijayasundar B</strong>, a B.E. Computer Science
          graduate focused on automation, MERN stack development,
          data extraction and digital marketing.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            Explore my work
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            Contact me
          </a>
        </div>

      </div>

      {/* AUTOMATION VISUAL */}

      <div className="automation-visual">

        <div className="flow-line line-one"></div>
        <div className="flow-line line-two"></div>
        <div className="flow-line line-three"></div>

        <div className="flow-node node-one">
          <Workflow size={21} />
          <span>Trigger</span>
        </div>

        <div className="flow-node node-two">
          <Database size={21} />
          <span>Data</span>
        </div>

        <div className="flow-node node-three">
          <Bot size={21} />
          <span>AI</span>
        </div>

        <div className="flow-node node-four">
          <Code2 size={21} />
          <span>Action</span>
        </div>

        <div className="flow-particle particle-one"></div>
        <div className="flow-particle particle-two"></div>
        <div className="flow-particle particle-three"></div>

      </div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={16} />
        Scroll to explore
      </a>

    </section>
  );
}