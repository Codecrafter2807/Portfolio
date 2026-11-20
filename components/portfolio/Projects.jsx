"use client"

import { ExternalLink, Github, Bot, Calendar } from "lucide-react"

const projects = [
  {
    icon: Calendar,
    title: "AI Meeting Notes Generator",
    description: "Developed an AI-powered application to transcribe meetings and generate summaries, notes, and action items.",
    technologies: ["Python", "Django", "Next.js", "Whisper", "Groq"],
    github: null,
    live: "https://meet-ai-frontend-xi.vercel.app",
    featured: true
  },
  {
    icon: Bot,
    title: "AI-First CRM: HCP Interaction Module",
    description: "Built an AI-powered CRM module to extract medical information and automate form filling.",
    technologies: ["Python", "FastAPI", "LangGraph", "React", "MySQL"],
    github: null,
    live: null,
    featured: true
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 tracking-tight">
          Production-Ready <span className="text-primary">Projects</span>
        </h2>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-lg bg-card/30 border border-border hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      {project.isFlagship && (
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-primary text-primary-foreground mb-2">
                          {project.subtitle || "Flagship Project"}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-foreground/80 font-medium mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
