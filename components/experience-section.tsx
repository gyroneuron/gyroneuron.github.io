const experiences = [
  {
    company: "Infrawave Solution Pvt. Ltd.",
    role: "React Native Developer",
    period: "2025",
    description: "Built and optimized a fleet management app in React Native, reducing invoice processing time by 90%.",
  },
  {
    company: "Trekato Pvt. Ltd.",
    role: "Mobile Application Developer",
    period: "2024 - 2025",
    description: "Designed and developed cross-platform apps using React Native Expo for client solutions.",
  },
  {
    company: "iOS Development Center SRMIST",
    role: "Student Software Developer",
    period: "2024 - 2025",
    description: "Led development of Athlinix, a Swift + UIKit-based iOS app with Supabase backend.",
  },
  {
    company: "Barclays",
    role: "Tech Intern",
    period: "2024",
    description: "Developed backend applications using Spring Boot, Vert.x, and React.js in agile environment.",
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block border border-border rounded-full px-4 py-2 mb-8">
            <span className="text-sm text-muted-foreground">Experience</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight max-w-2xl">
              A Yearly snapshot of my creative growth
            </h2>
            <p className="text-muted-foreground max-w-md lg:text-right lg:mt-4">
              An annual summary that summarizes my creative journey and development throughout the year.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-8 border-b border-border last:border-b-0">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    {exp.role} at {exp.company}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">{exp.description}</p>
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-8 flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">{exp.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
