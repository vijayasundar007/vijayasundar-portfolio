import {
  GraduationCap,
  MapPin,
  Terminal,
  Workflow,
} from "lucide-react";

export default function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <span>01</span>
        <p>ABOUT ME</p>
      </div>

      <div className="about-grid">

        <div className="about-text">

          <h2>
            I build digital systems
            <span> that solve real problems.</span>
          </h2>

          <p>
            I'm Vijayasundar B, a Computer Science Engineer focused on
            business automation, web development, data extraction and
            digital marketing.
          </p>

          <p>
            My work combines automation workflows, AI, APIs, databases
            and modern web technologies to turn repetitive business
            processes into reliable systems.
          </p>

          <div className="about-tags">
            <span>Automation</span>
            <span>MERN</span>
            <span>Data</span>
            <span>SEO</span>
          </div>

        </div>

        <div className="about-info">

          <div className="info-card">
            <GraduationCap size={20} />
            <div>
              <small>EDUCATION</small>
              <strong>B.E. Computer Science & Engineering</strong>
              <span>P.S.R. Engineering College</span>
            </div>
          </div>

          <div className="info-card">
            <Workflow size={20} />
            <div>
              <small>FOCUS</small>
              <strong>Business Automation</strong>
              <span>n8n · AI · APIs · Integrations</span>
            </div>
          </div>

          <div className="info-card">
            <Terminal size={20} />
            <div>
              <small>DEVELOPMENT</small>
              <strong>MERN Stack</strong>
              <span>React · Node · Express · MongoDB</span>
            </div>
          </div>

          <div className="info-card">
            <MapPin size={20} />
            <div>
              <small>BASE</small>
              <strong>Tamil Nadu, India</strong>
              <span>Available for opportunities</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}