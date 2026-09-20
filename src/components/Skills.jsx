import {
  Bot,
  Code2,
  Database,
  Globe,
  Search,
  Bug,
} from "lucide-react";

const skills = [
  {
    number: "01",
    icon: <Bot />,
    title: "Automation",
    description:
      "Business workflows, AI automation, API integrations and n8n systems.",
    tools: "n8n · AI · APIs · Webhooks",
  },
  {
    number: "02",
    icon: <Code2 />,
    title: "MERN Stack",
    description:
      "Modern full-stack applications with scalable frontend and backend architecture.",
    tools: "React · Node.js · Express · MongoDB",
  },
  {
    number: "03",
    icon: <Database />,
    title: "Data Extraction",
    description:
      "Collect, clean, transform and structure data from different sources.",
    tools: "ETL · SQL · Web Scraping · Data Processing",
  },
  {
    number: "04",
    icon: <Globe />,
    title: "Web Development",
    description:
      "Responsive websites, dashboards, APIs and business applications.",
    tools: "React · REST APIs · Supabase · Docker",
  },
  {
    number: "05",
    icon: <Search />,
    title: "Digital Marketing",
    description:
      "SEO and digital marketing focused on improving visibility and organic growth.",
    tools: "On-Page · Technical · Local · Off-Page SEO",
  },
  {
    number: "06",
    icon: <Bug />,
    title: "Debugging",
    description:
      "Finding and resolving frontend, backend, API and workflow issues.",
    tools: "React · Node · APIs · Docker",
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">
        <span>02</span>
        <p>WHAT I WORK WITH</p>
      </div>

      <div className="skills-intro">
        <h2>
          One stack.
          <br />
          <span>Multiple possibilities.</span>
        </h2>

        <p>
          From automation workflows to complete web applications,
          I combine different technologies depending on the problem.
        </p>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <article className="skill-card" key={skill.number}>

            <div className="skill-top">
              <span>{skill.number}</span>
              <div className="skill-icon">
                {skill.icon}
              </div>
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>

            <div className="skill-tools">
              {skill.tools}
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}