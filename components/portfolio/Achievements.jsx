"use client"

import { Trophy, Zap, Clock, TrendingDown } from "lucide-react"

const achievements = [
  {
    icon: Clock,
    title: "83% Time Reduction",
    description: "Reduced supervisor feedback assessment time from 60 minutes to under 10 minutes using structured LLM drafts."
  },
  {
    icon: TrendingDown,
    title: "80% Cost Savings",
    description: "Cut external design costs by 80% at GK Plastic Industries by bringing all creative and digital marketing in-house."
  },
  {
    icon: Zap,
    title: "Real-time AI Processing",
    description: "Built chunked streaming transcription pipelines handling long-form audio with near-instant summarization."
  },
  {
    icon: Trophy,
    title: "Production Ready",
    description: "Successfully deployed multiple full-stack applications with real-world users in CRM and Meeting Intelligence."
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 lg:px-0 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest text-primary mb-8 uppercase">
          What I’ve Achieved
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
