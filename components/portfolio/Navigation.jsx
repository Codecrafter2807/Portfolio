"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1)
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className="group flex items-center gap-4 py-2"
              >
                <span 
                  className={`h-px transition-all duration-300 ${
                    isActive 
                      ? "w-16 bg-foreground" 
                      : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                  }`}
                />
                <span 
                  className={`text-xs font-medium tracking-widest transition-colors duration-300 ${
                    isActive 
                      ? "text-foreground" 
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
