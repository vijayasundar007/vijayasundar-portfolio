import {
  ArrowUpRight,
  Bot,
  Database,
  Globe,
  Mail,
  ShoppingCart,
  Workflow,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "SEO / AUTOMATION",
    title: "AI Website SEO Audit",
    description:
      "Automated website auditing system that crawls pages, analyzes SEO issues and generates structured insights.",
    flow: "Website → Crawler → SEO Analysis → AI → Report",
    tools: "n8n · Node.js · Cheerio · Playwright · AI",
    icon: <Globe />,
  },
  {
    number: "02",
    category: "BUSINESS AUTOMATION",
    title: "WhatsApp Automation",
    description:
      "Automated customer and lead communication workflows with triggers, messages, follow-ups and notifications.",
    flow: "Lead → Database → n8n → WhatsApp → Follow-up",
    tools: "n8n · APIs · Webhooks · Supabase",
    icon: <Workflow />,
  },
  {
    number: "03",
    category: "AI AUTOMATION",
    title: "Customer Renewal Risk",
    description:
      "AI-powered workflow that analyzes customer data, detects renewal risks and creates recommended retention actions.",
    flow: "Customer Data → AI → Risk → Action Plan → Alert",
    tools: "n8n · Ollama · Qwen 2.5 · Supabase",
    icon: <Bot />,
  },
  {
    number: "04",
    category: "FULL STACK",
    title: "E-Commerce System",
    description:
      "Full-stack e-commerce application with customer and admin functionality, products, inventory and order workflows.",
    flow: "Customer → Store → API → Database → Admin",
    tools: "React · Node.js · Express · MongoDB",
    icon: <ShoppingCart />,
  },
  {
    number: "05",
    category: "CRM / AUTOMATION",
    title: "Automation CRM",
    description:
      "Lead management system connecting forms, database, automated communication, reminders and a dashboard.",
    flow: "Lead Form → CRM → n8n → Email → WhatsApp",
    tools: "React · Node.js · Supabase · n8n · Docker",
    icon: <Workflow />,
  },
  {
    number: "06",
    category: "DATA / ETL",
    title: "Data Extraction Pipeline",
    description:
      "Data extraction and processing workflows for collecting, cleaning and converting raw information into structured data.",
    flow: "Source → Extract → Clean → Transform → Output",
    tools: "SQL · ETL · Data Extraction · Automation",
    icon: <Database />,
  },
  {
    number: "07",
    category: "EMAIL AUTOMATION",
    title: "Email Automation",
    description:
      "Automated email workflows for notifications, customer communication, follow-ups and business processes.",
    flow: "Trigger → Data → Email → Tracking → Follow-up",
    tools: "n8n · Gmail · APIs · Webhooks",
    icon: <Mail />,
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="section-heading">
        <span>03</span>
        <p>SELECTED WORK</p>
      </div>

      <div className="projects-intro">
        <h2>
          Things I've
          <br />
          <span>built & automated.</span>
        </h2>

        <p>
          A collection of automation systems, web applications,
          data workflows and AI-powered projects built through
          professional and independent work.
        </p>
      </div>

      <div className="projects-list">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-main">

              <div className="project-icon">
                {project.icon}
              </div>

              <div className="project-content">

                <div className="project-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-flow">
                  <span>WORKFLOW</span>
                  <strong>{project.flow}</strong>
                </div>

                <div className="project-tools">
                  {project.tools}
                </div>

              </div>

            </div>

            <div className="project-arrow">
              <ArrowUpRight size={20} />
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}