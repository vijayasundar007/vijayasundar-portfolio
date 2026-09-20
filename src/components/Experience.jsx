import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Search,
} from "lucide-react";

const experiences = [
  {
    year: "2024 — 2025",
    company: "ArchiveHub.io",
    role: "Data Extraction / ETL",
    description:
      "Worked on data extraction and processing workflows, collecting information from different sources and converting raw data into structured datasets.",
    skills: [
      "Data Extraction",
      "ETL",
      "Data Processing",
      "SQL",
    ],
    icon: <Database />,
  },
  {
    year: "2025 — 2026",
    company: "Simplified E-Learning",
    role: "Digital Marketing / SEO",
    description:
      "Worked on SEO and digital marketing projects including on-page, technical, local and off-page optimization across real-world websites.",
    skills: [
      "SEO",
      "Keyword Research",
      "Technical SEO",
      "Digital Marketing",
    ],
    icon: <Search />,
  },
  {
    year: "2026",
    company: "SocialEagle",
    role: "Digital Marketing",
    description:
      "Worked on social media marketing and digital marketing activities, supporting online presence and audience engagement.",
    skills: [
      "Social Media",
      "Digital Marketing",
      "Content",
      "Campaigns",
    ],
    icon: <BriefcaseBusiness />,
  },
  {
    year: "2024 — Present",
    company: "Independent Projects",
    role: "Automation / MERN / Web Development",
    description:
      "Building independent automation systems, MERN applications, AI workflows, APIs and business tools using modern development technologies.",
    skills: [
      "n8n",
      "MERN",
      "AI Automation",
      "APIs",
      "Docker",
    ],
    icon: <Code2 />,
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="section-heading">
        <span>04</span>
        <p>EXPERIENCE</p>
      </div>

      <div className="experience-intro">

        <h2>
          From data
          <br />
          <span>to automation.</span>
        </h2>

        <p>
          My experience has moved across data extraction, digital
          marketing, web development and automation — connecting
          different technical skills into practical systems.
        </p>

      </div>

      <div className="experience-timeline">

        <div className="timeline-line"></div>

        {experiences.map((experience, index) => (
          <article
            className="experience-item"
            key={experience.company}
          >

            <div className="experience-marker">
              <span></span>
            </div>

            <div className="experience-year">
              {experience.year}
            </div>

            <div className="experience-card">

              <div className="experience-card-top">

                <div>
                  <p className="experience-role">
                    {experience.role}
                  </p>

                  <h3>{experience.company}</h3>
                </div>

                <div className="experience-icon">
                  {experience.icon}
                </div>

              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="experience-index">
                0{index + 1}
                <ArrowUpRight size={14} />
              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}