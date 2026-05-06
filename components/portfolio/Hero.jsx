"use client"

import { Github, Linkedin, Mail, MapPin, ChevronDown, Download } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-0 pt-28 lg:pt-0">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left Column - Fixed Info */}
          <div className="lg:w-1/2 lg:sticky lg:top-24 lg:self-start">
            {/* Profile Image */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-8 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
              <Image
                src="/images/profile.jpeg"
                alt="Harshit Jain - Full-Stack AI Engineer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              Full Stack Developer building <span className="text-primary">scalable AI-powered</span> web applications
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
              I help businesses automate workflows and build production-ready SaaS products using React, Django, and modern AI tools.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                View Projects
              </button>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all duration-200 border border-border"
              >
                Hire Me / Contact
              </a>
              <a
                href="/harshit_resume (3).pdf"
                download="Harshit_Jain_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 hover:bg-primary/5 transition-all duration-200 text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a 
                href="https://github.com/Codecrafter2807" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshit-jain8703" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:hj1287091@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Main Content Preview */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {"I'm"} a <span className="text-foreground font-medium">Full-Stack AI Engineer</span> with expertise in 
              React, Next.js, Django, FastAPI, and MySQL. I specialize in integrating AI capabilities 
              into real-world web applications, creating seamless connections between advanced LLMs and 
              modern web architectures.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently, {"I'm"} an MCA finalist at <span className="text-foreground font-medium">Lyallpur Khalsa College of Engineering</span>, 
              where {"I've"} built and deployed production-ready projects ranging from 
              <span className="text-foreground font-medium"> CRM modules</span> and 
              <span className="text-foreground font-medium"> healthcare platforms</span> to 
              <span className="text-foreground font-medium"> meeting intelligence tools</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work focuses on leveraging tools like <span className="text-foreground font-medium">LangGraph, Groq, and OpenAI Whisper</span> 
              to solve complex problems through practical AI integration. I am passionate about bridging 
              the gap between modern development practices and cutting-edge AI features.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-200 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
