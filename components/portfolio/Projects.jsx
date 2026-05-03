"use client"

import { ExternalLink, Github, Bot, Calendar, Stethoscope, FileText, Users } from "lucide-react"

const projects = [
  {
    icon: Calendar,
    title: "AI Meeting Notes Generator",
    description: "Production-deployed system converting multi-speaker audio into structured notes, action items, and summaries. Built chunked streaming transcription pipeline with OpenAI Whisper, enabling real-time feedback on long-form audio. Optimized LLM inference latency via Groq APIs (Llama 3).",
    technologies: ["Python", "Next.js", "Whisper", "Groq", "Django", "PyAnnote"],
    github: null,
    live: "https://meet-ai-frontend-xi.vercel.app",
    featured: true
  },
  {
    icon: Bot,
    title: "AI-First CRM: HCP Interaction Module",
    description: "AI-first CRM for pharma reps using a LangGraph + Groq (Llama-3.3-70b) assistant that auto-fills forms from natural language. Implemented smart merge logic and medical entity extraction to auto-identify drug names, symptoms, and specialties.",
    technologies: ["React", "FastAPI", "LangGraph", "Groq", "MySQL", "SQLAlchemy"],
    github: null,
    live: null,
    featured: true
  },
  {
    icon: FileText,
    title: "Supervisor Feedback Analyzer",
    description: "Reduced supervisor feedback assessment time from 60 mins to under 10 mins via structured LLM drafts. Features multi-stage JSON extraction with regex fallbacks and confidence scoring to prevent automation bias.",
    technologies: ["React", "Django REST", "Llama 3.2", "Ollama", "Regex"],
    github: null,
    live: null,
    featured: true
  },
  {
    icon: Stethoscope,
    title: "Doctor Appointment Booking & Review App",
    description: "Full-stack booking and review platform with user auth, appointment scheduling, and patient reviews. Designed RESTful APIs and a responsive mobile-first UI.",
    technologies: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "Node.js"],
    github: null,
    live: null,
    featured: true
  },
  {
    icon: FileText,
    title: "AI-Based Opinion Mining System",
    description: "Research paper developing a three-component opinion mining pipeline combining sentiment classification, emotion detection, and topic extraction. Achieved 90.03% accuracy on IMDB using SVM with TF-IDF features.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "NLTK", "BiLSTM", "LDA"],
    github: null,
    live: null,
    featured: false,
    isResearch: true,
    researchPaper: "/Harshit_Jain_2443317.pdf"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest text-primary mb-8 uppercase">
          Projects
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
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                      {project.isResearch && project.researchPaper && (
                        <a
                          href={project.researchPaper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 px-2 py-0.5 text-xs font-medium rounded bg-primary/20 text-primary hover:bg-primary/30 transition-colors cursor-pointer inline-block"
                          aria-label="View research paper"
                        >
                          Research Paper
                        </a>
                      )}
                      {project.isResearch && !project.researchPaper && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded bg-primary/20 text-primary">
                          Research Paper
                        </span>
                      )}
                    </h3>
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
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
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
