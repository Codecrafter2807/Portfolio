"use client"

import { ShieldCheck, Network, Server, Code2 } from "lucide-react"

const achievements = [
  {
    icon: ShieldCheck,
    title: "End-to-End IT Support",
    description: "Supporting production systems through user assistance, software installation, incident troubleshooting, and resolution."
  },
  {
    icon: Server,
    title: "Server & Virtualization",
    description: "Managing Windows Server and physical servers, including Hyper-V virtual machines."
  },
  {
    icon: Network,
    title: "Network & Remote Access",
    description: "Configuring firewalls, troubleshooting VPN tunnels, and providing remote access through TSplus and RDP."
  },
  {
    icon: Code2,
    title: "Software Development Foundation",
    description: "Applying a background in Python and JavaScript to build practical AI-powered applications."
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 lg:px-0 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest text-primary mb-8 uppercase">
          What I Bring
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="flex gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="shrink-0">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
