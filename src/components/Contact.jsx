import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="section-heading">
        <span>06</span>
        <p>CONTACT</p>
      </div>

      <div className="contact-content">

        <p className="contact-label">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let's build
          <br />
          something <span>useful.</span>
        </h2>

        <p className="contact-description">
          Whether you need a business automation workflow, a web
          application, data extraction system or SEO solution,
          let's connect.
        </p>

        <div className="contact-links">

          <a
            href="tel:+916382072266"
            className="contact-link"
          >
            <div className="contact-link-icon">
              <Phone size={18} />
            </div>

            <div>
              <small>PHONE</small>
              <strong>+91 63820 72266</strong>
            </div>

            <ArrowUpRight size={17} />
          </a>

          <a
            href="mailto:vijayasundar.b@gmail.com"
            className="contact-link"
          >
            <div className="contact-link-icon">
              <Mail size={18} />
            </div>

            <div>
              <small>EMAIL</small>
              <strong>vijayasundar.b@gmail.com</strong>
            </div>

            <ArrowUpRight size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/vijayasundar-b-9a6726278"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <div className="contact-link-icon">
              <span className="linkedin-icon">in</span>
            </div>

            <div>
              <small>LINKEDIN</small>
              <strong>Vijayasundar B</strong>
            </div>

            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>

      <footer className="footer">

        <div className="footer-logo">
          <span>V</span>
          Vijayasundar
        </div>

        <p>
          Automation · Development · Data · Digital
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Vijayasundar B
        </p>

      </footer>

    </section>
  );
}