"use client"

import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "July 2024 — February 2026",
    title: "Full Stack Web Developer",
    company: "GK Plastic Industries",
    location: "Jalandhar, Punjab, India",
    description: "Developed and maintained a responsive business website for 100+ industrial products, improving product discoverability and reducing manual update effort.",
    achievements: [
      "Developed and maintained a responsive business website using React and Tailwind CSS for 100+ industrial products, improving product discoverability and reducing manual update effort by 35%.",
      "Improved UI responsiveness and SEO structure, enhancing product visibility and customer engagement.",
      "Collaborated with management to streamline product update workflows and reduce manual content management effort."
    ],
    skills: ["React", "Tailwind CSS", "SEO", "Web Development"],
    link: null
  }
]

const education = [
  {
    period: "July 2024 — May 2026",
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
    description: "Completed training in web development covering HTML, CSS, Python, Django, and MySQL. ISO 9001-2015 certified institute.",
    link: "/webdox.pdf"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 tracking-tight">
          Work <span className="text-primary">Experience</span>
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
        <h2 className="text-4xl font-bold text-foreground mt-16 mb-12 tracking-tight">
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
        <h2 className="text-4xl font-bold text-foreground mt-16 mb-12 tracking-tight">
          Certifications
        </h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-lg hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-1 gap-4">
                  <h3 className="text-foreground font-semibold">
                    {cert.title}
                  </h3>
                  {cert.link && (
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
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
