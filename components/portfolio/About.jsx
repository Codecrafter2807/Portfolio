"use client"

import { GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with React.js, Node.js, Django, and modern databases."
  },
  {
    icon: Sparkles,
    title: "AI/ML Integration",
    description: "Integrating AI capabilities like OpenAI Whisper, GPT-4o, and NLP pipelines into applications."
  },
  {
    icon: Briefcase,
    title: "Professional Experience",
    description: "Over 1.5 years of experience in digital product design and web development."
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Currently pursuing MCA at Lyallpur Khalsa College of Engineering, Jalandhar."
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
            Back in 2021, I started my journey in Computer Science with a BCA degree and 
            quickly fell in love with building things for the web. Fast-forward to today, 
            and {"I've"} had the privilege of working on diverse projects ranging from{" "}
            <span className="text-foreground font-medium">AI-powered chatbots</span> to{" "}
            <span className="text-foreground font-medium">full-stack web applications</span>.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            My main focus these days is building AI-integrated applications that push 
            the boundaries of what&apos;s possible with modern web technologies. I most enjoy 
            building software in the sweet spot where design and engineering meet — things 
            that look good but are also built well under the hood.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            When {"I'm "} not coding, you&apos;ll find me exploring open source projects, 
            diving into software architecture concepts, or experimenting with new 
            UI/UX design patterns.
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
