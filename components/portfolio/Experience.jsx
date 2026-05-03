"use client"

import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "July 2024 — February 2026",
    title: "Web Developer & Digital Marketing Associate",
    company: "GK Plastic Industries",
    location: "Jalandhar, Punjab, India",
    description: "Developed and maintained the company's B2B digital presence across 100+ product SKUs, driving sales conversions through a streamlined content pipeline.",
    achievements: [
      "Developed and maintained company website, driving improved B2B digital presence across 100+ product SKUs.",
      "Cut external design costs by 80% by owning all creatives, product visuals, and marketing collateral in-house.",
      "Managed end-to-end content pipeline — from product shoots to live listings — directly supporting sales conversions."
    ],
    skills: ["Web Development", "Digital Marketing", "Content Pipeline", "B2B Strategy"],
    link: null
  }
]

const education = [
  {
    period: "July 2024 — June 2026",
    degree: "Master of Computer Applications (MCA)",
    institution: "Lyallpur Khalsa College of Engineering",
    location: "Jalandhar, Punjab, India",
    focus: "Computer Science"
  },
  {
    period: "September 2021 — May 2024",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "DAV College, Jalandhar",
    location: "Jalandhar, Punjab, India",
    focus: "Computer Science"
  }
]

const certifications = [
  {
    title: "Web Development in Python",
    institution: "Webdox Computer Institute",
    credentialId: "Cert. No. ICI/1161736/21",
    description: "Completed 45-day intensive training covering HTML, CSS, Python, Django, and MySQL with Grade A (166/200)."
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

        {/* Certifications */}
        <h2 className="text-sm font-medium tracking-widest text-primary mt-16 mb-8 uppercase">
          Certifications
        </h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-lg hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <h3 className="text-foreground font-semibold mb-1">
                  {cert.title}
                </h3>
                <p className="text-primary mb-1">{cert.institution}</p>
                <p className="text-xs text-muted-foreground mb-3">{cert.credentialId}</p>
                <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
