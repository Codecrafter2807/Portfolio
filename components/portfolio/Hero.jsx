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
      
      <div className="relative max-w-5xl mx-auto w-full text-center">
        {/* Profile Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-10 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-2xl">
          <Image
            src="/images/profile.jpeg"
            alt="Harshit Jain - Full-Stack Developer"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-foreground mb-8 text-balance">
          Full Stack Developer building <span className="text-primary">scalable AI-powered</span> web applications
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 text-balance">
          I help businesses automate workflows and build production-ready SaaS products using React, Django, and modern AI tools.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <button
            onClick={scrollToAbout}
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
          >
            View Projects
          </button>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-all duration-300 border border-border hover:scale-105 active:scale-95"
          >
            Hire Me / Contact
          </a>
          <a
            href="/harshit_resume (3).pdf"
            download="Harshit_Jain_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/20 hover:bg-primary/5 transition-all duration-300 text-sm font-semibold"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-8">
          <a 
            href="https://github.com/Codecrafter2807" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="w-7 h-7" />
          </a>
          <a 
            href="https://www.linkedin.com/in/harshit-jain8703" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a 
            href="mailto:hj1287091@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-7 h-7" />
          </a>
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
