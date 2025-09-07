const skills = [
  { number: "01.", title: "mobile development", description: "React Native, Swift, UIKit, iOS, Cross-platform" },
  { number: "02.", title: "programming languages", description: "JavaScript, TypeScript, C, C++, Java, HTML/CSS" },
  { number: "03.", title: "backend & database", description: "Node.js, MongoDB, Supabase, Firebase, Spring Boot" },
  { number: "04.", title: "development tools", description: "Redux, Android Studio, Xcode, VS Code, GitHub" },
  {
    number: "05.",
    title: "agile methodologies",
    description: "Scrum, Performance Optimization, Security Implementation",
  },
  {
    number: "06.",
    title: "technical architecture",
    description: "System Design, API Development, Database Architecture",
  },
  { number: "07.", title: "problem solving", description: "Algorithm Design, Code Review, Performance Analysis" },
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Summary of my technical and professional skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-6">
                <span className="text-6xl font-light text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-300">
                  {skill.number}
                </span>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <div className="w-full h-px bg-border group-hover:bg-primary/30 transition-colors duration-300 mb-3"></div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
