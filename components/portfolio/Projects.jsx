"use client"

import { ExternalLink, Github, Bot, Calendar, Stethoscope, FileText, Users } from "lucide-react"

const projects = [
  {
    icon: Calendar,
    title: "AI Meeting Notes Generator",
    description: "Production-deployed system converting multi-speaker audio into structured notes, action items, and summaries.",
    impact: [
      "Engineered a chunked streaming transcription pipeline utilizing OpenAI Whisper, enabling real-time feedback on lengthy audio files and improving data processing efficiency by 40%.",
      "Optimized LLM inference latency via Groq APIs (Llama 3), achieving faster summarization vs. standard endpoints.",
      "Designed speaker diarization pipeline with PyAnnote for per-speaker timestamp alignment across multi-participant meetings."
    ],
    technologies: ["Python", "Next.js", "OpenAI Whisper", "Groq", "Django", "PyAnnote"],
    github: null,
    live: "https://meet-ai-frontend-xi.vercel.app",
    featured: true
  },
  {
    icon: Bot,
    title: "AI-First CRM: HCP Interaction Module",
    subtitle: "Flagship SaaS Product",
    description: "AI-first CRM for pharma reps using a LangGraph + Groq (Llama-3.3-70b) assistant that auto-fills forms from natural language.",
    impact: [
      "Implemented smart merge logic and medical entity extraction to auto-identify drug names, symptoms, and specialties.",
      "Stack: React (Vite) + Redux Toolkit frontend, FastAPI/SQLAlchemy backend, MySQL database."
    ],
    technologies: ["React (Vite)", "Redux Toolkit", "FastAPI", "LangGraph", "Groq", "MySQL", "SQLAlchemy"],
    github: null,
    live: null,
    featured: true,
    isFlagship: true
  },
  {
    icon: FileText,
    title: "Supervisor Feedback Analyzer",
    description: "An AI-powered assessment tool that automates the analysis of supervisor feedback transcripts against professional rubrics.",
    impact: [
      "Reduced supervisor feedback assessment time from 60 mins to under 10 mins via structured LLM drafts.",
      "Multi-stage JSON extraction with regex fallbacks for reliable output from Llama 3.2 (3B) local model.",
      "Confidence scoring and bias detection badges to prevent automation bias and enforce human review."
    ],
    technologies: ["React", "Django REST", "Llama 3.2", "Ollama"],
    github: null,
    live: null,
    featured: true
  },
  {
    icon: Stethoscope,
    title: "Doctor Appointment Booking & Review App",
    description: "Full-stack booking and review platform with user auth, appointment scheduling, and patient reviews.",
    impact: [
      "Designed RESTful APIs with Express.js and a responsive mobile-first UI using React.js and Tailwind CSS."
    ],
    technologies: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
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

                  <ul className="space-y-1.5 sm:space-y-2 mb-6">
                    {project.impact?.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>

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
