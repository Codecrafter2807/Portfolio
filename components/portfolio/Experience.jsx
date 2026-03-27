"use client"

import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — 2026",
    title: "Catalogue Designer & Website Executive",
    company: "GK Plastic Industries",
    location: "Jalandhar, Punjab",
    description: "Designed and maintained the company's product catalogue and website, improving digital presence and supporting B2B client engagement. Created high-quality product advertisements using Adobe tools, reducing external design costs.",
    achievements: [
      "Improved digital presence and B2B client engagement",
      "Managed 100+ product SKUs with accurate information",
      "Reduced external design costs through in-house production"
    ],
    skills: ["Adobe Photoshop", "Canva", "Website Management", "UI/UX Design"],
    link: null
  }
]

const education = [
  {
    period: "2024 — 2026",
    degree: "Master of Computer Applications (MCA)",
    institution: "Lyallpur Khalsa College of Engineering",
    location: "Jalandhar, Punjab",
    focus: "Computer Science"
  },
  {
    period: "2021 — 2024",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "DAV College, Jalandhar",
    location: "Jalandhar, Punjab",
    focus: "Computer Science"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest text-primary mb-8 uppercase">
          Experience
        </h2>

        {/* Work Experience */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative grid sm:grid-cols-[150px_1fr] gap-4 p-6 rounded-lg hover:bg-card/50 transition-all duration-300"
            >
              <div className="text-sm text-muted-foreground font-medium">
                {exp.period}
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-1 flex items-center gap-2 flex-wrap">
                  {exp.title}
                  <span className="text-primary">·</span>
                  <span className="text-primary">{exp.company}</span>
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <h2 className="text-sm font-medium tracking-widest text-primary mb-8 uppercase">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group relative grid sm:grid-cols-[150px_1fr] gap-4 p-6 rounded-lg hover:bg-card/50 transition-all duration-300"
            >
              <div className="text-sm text-muted-foreground font-medium">
                {edu.period}
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">
                  {edu.degree}
                </h3>
                <p className="text-primary mb-1">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
                <p className="text-sm text-muted-foreground mt-2">Focus: {edu.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
