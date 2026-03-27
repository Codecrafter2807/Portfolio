"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 lg:px-0 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left side - Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Harshit Jain. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center sm:justify-start gap-1">
              Built with <Heart className="w-3 h-3 text-primary" /> using Next.js & Tailwind CSS
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Codecrafter2807" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/harshit-jain8703" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hj1287091@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Interested in: Open Source Contribution • Software Architecture • UI/UX Design • Competitive Programming
          </p>
        </div>
      </div>
    </footer>
  )
}
