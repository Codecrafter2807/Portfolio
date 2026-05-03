"use client"

import { GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack AI Engineering",
    description: "Building production-ready web apps powered by LLMs, React/Next.js, and FastAPI/Django."
  },
  {
    icon: Sparkles,
    title: "Agentic AI & RAG",
    description: "Hands-on experience with LangGraph, LangChain, and Groq for building intelligent, stateful AI agents."
  },
  {
    icon: Briefcase,
    title: "Product Experience",
    description: "Deployed projects spanning CRM automation, meeting intelligence, and healthcare platforms."
  },
  {
    icon: GraduationCap,
    title: "MCA Finalist",
    description: "Currently pursuing Master of Computer Applications at Lyallpur Khalsa College of Engineering."
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest text-primary mb-8 uppercase">
          About
        </h2>
        
        <div className="grid gap-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a <span className="text-foreground font-medium">Full-Stack AI Engineer</span> driven 
            by the challenge of building production-ready applications that leverage the latest in 
            LLM technology. My journey in tech evolved from building standard web apps to 
            architecting <span className="text-foreground font-medium">agentic AI systems</span> that 
            solve real-world problems.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            My current focus is on building AI-first platforms using <span className="text-foreground font-medium">LangGraph, Groq, and OpenAI Whisper</span>. 
            I enjoy the intersection of backend stability (FastAPI/Django) and frontend interactivity (React/Next.js), 
            ensuring that complex AI logic is delivered through clean, intuitive user interfaces.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            When {"I'm "} not building AI agents, I explore open-source contributions, 
            software architecture, and UI/UX design. I believe that the best products are 
            built where engineering excellence meets user-centric design.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
