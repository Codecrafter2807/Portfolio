"use client"

import { ExternalLink, Github, Bot, Calendar, Stethoscope, FileText, Users } from "lucide-react"

const projects = [
  {
    icon: Calendar,
    title: "AI Meeting Notes Generator",
    description: "Engineered an end-to-end meeting intelligence system that automatically converts audio recordings into structured documentation using speech recognition and NLP. Integrated OpenAI Whisper for speech-to-text and PyAnnote for speaker diarization.",
    technologies: ["Python", "Next.js", "OpenAI Whisper", "GPT-4o", "Django ORM", "PyAnnote"],
    github: null,
    live: null,
    featured: true
  },
  {
    icon: FileText,
    title: "AI-Based Opinion Mining System for Social Media Sentiment Analysis",
    description: "Research paper developing a three-component opinion mining pipeline combining sentiment classification, emotion detection, and topic extraction. Tested on Sentiment140 (50K tweets), IMDB (50K reviews), and Amazon (10K reviews). Achieved 90.03% accuracy on IMDB using SVM with TF-IDF features.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "NLTK", "Keras", "Gensim", "BiLSTM", "LDA"],
    github: null,
    live: null,
    featured: true,
    isResearch: true,
    researchPaper: "/Harshit_Jain_2443317.pdf"
  },
  {
    icon: Stethoscope,
    title: "Doctor Appointment Booking & Review Web App",
    description: "Designed and developed a full-stack doctor appointment booking platform with patient reviews, built on the MERN-adjacent stack. Implemented responsive front-end using React.js and Tailwind CSS with RESTful backend APIs.",
    technologies: ["React.js", "Tailwind CSS", "MongoDB", "Express.js", "Node.js"],
    github: null,
    live: null,
    featured: true
  },
  {
    icon: Bot,
    title: "AI Chat-Bot",
    description: "Built an AI-powered chatbot integrating the Google Gemini API for real-time data fetching and intelligent query responses. Features an interactive front-end using Streamlit framework and served via Flask backend.",
    technologies: ["Python", "Google Gemini API", "Streamlit", "Flask"],
    github: null,
    live: null,
    featured: true
  },
  {
    icon: Users,
    title: "Employee Management System (EMS)",
    description: "Built a full-stack desktop EMS application using Java for both front-end UI and core business logic. Designed and managed a relational database backend using MySQL Workbench for employee records, roles, and reporting. Applied OOP principles including inheritance, encapsulation, and MVC architecture.",
    technologies: ["Java", "JavaFX", "MySQL", "MySQL Workbench", "MVC"],
    github: null,
    live: null,
    featured: true
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
