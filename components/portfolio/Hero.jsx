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
        <div className="flex flex-col lg:flex-row lg:gap-16 items-start">
          {/* Left Column - Main Info */}
          <div className="lg:w-full">
            {/* Profile Image */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-8 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-lg">
              <Image
                src="/images/profile.jpeg"
                alt="Harshit Jain - Full-Stack Developer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-2">
              Full Stack Developer
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8 leading-tight">
              building <span className="text-primary border-b-2 border-primary/20">scalable AI-powered</span> web applications
            </p>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              I help businesses automate workflows and build production-ready SaaS products using React, Django, and modern AI tools.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                View Projects
              </button>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all duration-200 border border-border"
              >
                Hire Me / Contact
              </a>
              <a
                href="/harshit_resume10 (1).pdf"
                download="Harshit_Jain_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-all duration-200 text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/Codecrafter2807" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshit-jain8703" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:hj1287091@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
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
