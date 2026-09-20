import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  Mail,
  MessageSquare,
  Play,
  Zap,
} from "lucide-react";

const nodes = [
  {
    icon: <Play />,
    label: "TRIGGER",
    title: "New Lead",
  },
  {
    icon: <Database />,
    label: "DATA",
    title: "Store Data",
  },
  {
    icon: <Bot />,
    label: "AI",
    title: "Analyze",
  },
  {
    icon: <Zap />,
    label: "DECISION",
    title: "Choose Action",
  },
  {
    icon: <MessageSquare />,
    label: "ACTION",
    title: "WhatsApp",
  },
  {
    icon: <Mail />,
    label: "FOLLOW-UP",
    title: "Email",
  },
];

export default function AutomationShowcase() {
  return (
    <section className="automation-section">

      <div className="section-heading">
        <span>05</span>
        <p>HOW I BUILD</p>
      </div>

      <div className="automation-heading">

        <div>
          <p className="automation-label">
            FROM IDEA TO AUTOMATION
          </p>

          <h2>
            I turn repetitive
            <br />
            work into <span>systems.</span>
          </h2>
        </div>

        <p className="automation-description">
          I design workflows where data moves automatically between
          applications, APIs, databases and AI — reducing manual
          work and making business processes easier to manage.
        </p>

      </div>

      <div className="workflow-wrapper">

        <div className="workflow-top">

          <div className="workflow-status">
            <span></span>
            WORKFLOW RUNNING
          </div>

          <div className="workflow-engine">
            POWERED BY <strong>n8n + APIs + AI</strong>
          </div>

        </div>

        <div className="workflow">

          {nodes.map((node, index) => (
            <div className="workflow-step" key={node.title}>

              <div className="workflow-node">

                <div className="workflow-icon">
                  {node.icon}
                </div>

                <div className="workflow-node-text">
                  <small>{node.label}</small>
                  <strong>{node.title}</strong>
                </div>

              </div>

              {index < nodes.length - 1 && (
                <div className="workflow-connection">

                  <div className="connection-line"></div>

                  <div
                    className={`connection-particle particle-${index}`}
                  ></div>

                  <ArrowRight size={13} />

                </div>
              )}

            </div>
          ))}

        </div>

        <div className="workflow-result">

          <CheckCircle2 size={18} />

          <div>
            <strong>Automation completed</strong>
            <span>Lead processed without manual intervention</span>
          </div>

        </div>

      </div>

      <div className="automation-usecases">

        <div>
          <span>01</span>
          Lead Management
        </div>

        <div>
          <span>02</span>
          Customer Follow-up
        </div>

        <div>
          <span>03</span>
          SEO Auditing
        </div>

        <div>
          <span>04</span>
          Data Processing
        </div>

        <div>
          <span>05</span>
          AI Workflows
        </div>

      </div>

    </section>
  );
}