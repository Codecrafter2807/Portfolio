"use client"

import { GraduationCap, Briefcase, Code2, ShieldCheck } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "IT Support",
    description: "End-to-end user and application support, software installation, desktop management, and incident resolution."
  },
  {
    icon: ShieldCheck,
    title: "Networks & Security",
    description: "Network troubleshooting, firewall configuration, VPN tunnel support, and connectivity incident resolution."
  },
  {
    icon: Briefcase,
    title: "Systems Administration",
    description: "Windows Server, physical servers, Hyper-V virtual machines, Active Directory, and remote access with TSplus and RDP."
  },
  {
    icon: GraduationCap,
    title: "Software Development Background",
    description: "MCA and BCA graduate with practical project experience in Python, Django, React, and FastAPI."
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 tracking-tight">
          Keeping technology <span className="text-primary">running smoothly</span>
        </h2>
        
        <div className="grid gap-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am an <span className="text-foreground font-medium">IT Support and Network Administrator</span> experienced in supporting production systems, managing Windows environments, and resolving user, server, and network issues.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            My hands-on work includes <span className="text-foreground font-medium">Windows Server, Hyper-V, Active Directory, VPNs, and firewall configuration</span>. I also manage user accounts, application permissions, TMS software, and remote access tools such as TSplus and RDP.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Alongside IT operations, I bring a software development background in Python and JavaScript. My projects include an AI meeting notes generator and an AI-powered CRM interaction module.
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
