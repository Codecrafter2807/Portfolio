"use client"

import { Mail, Linkedin, Github, MapPin, Phone, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hj1287091@gmail.com",
    href: "mailto:hj1287091@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8968850149",
    href: "tel:+918968850149"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "harshit-jain8703",
    href: "https://www.linkedin.com/in/harshit-jain8703"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Codecrafter2807",
    href: "https://github.com/Codecrafter2807"
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest text-primary mb-8 uppercase">
          Contact
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Message */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              {"Let's"} work together
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              If you would like to discuss a project or just say hi, {"I'm"} always 
              down to chat. Feel free to reach out through any of the channels below.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Jalandhar, Punjab, India</span>
            </div>
          </div>

          {/* Right Column - Contact Links */}
          <div className="space-y-4">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-4 rounded-lg bg-card/30 border border-border hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="text-foreground font-medium">{contact.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
