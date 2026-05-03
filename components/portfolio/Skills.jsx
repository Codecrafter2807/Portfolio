"use client"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "FastAPI", "Django", "Express.js", "Tailwind CSS", "Redux Toolkit", "SQLAlchemy", "Pandas", "NumPy", "Jupyter", "Matplotlib", "Bootstrap"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite"]
  },
  {
    title: "AI/ML Tools",
    skills: ["LangGraph", "LangChain", "Groq (Llama 3)", "OpenAI Whisper", "NLP Pipelines", "Speaker Diarization"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "Hugging Face Spaces", "AWS"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest text-primary mb-8 uppercase">
          Skills & Technologies
        </h2>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <h3 className="text-foreground font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 pl-11">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages section */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-foreground font-semibold mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-6 pl-11">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">English</div>
              <div className="text-sm text-muted-foreground">Professional</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">Hindi</div>
              <div className="text-sm text-muted-foreground">Native</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">Punjabi</div>
              <div className="text-sm text-muted-foreground">Native</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
