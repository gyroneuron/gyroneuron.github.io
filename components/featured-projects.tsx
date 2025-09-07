import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: "athlinix",
    title: "Athlinix",
    description: "iOS sports analytics app with dynamic profiling and real-time performance tracking",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Athlinix%28MobileScreens%29-Ay0NuM01OrDcMsqHWyiylqoPYRz9Rb.png",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Athlinix%28Logo%29-pTamoLMS4TkQkoKE79NM1KOkpYwO2v.png",
    impact: "+25% engagement, +30% code efficiency",
    stack: ["Swift", "UIKit", "Supabase", "UICharts"],
    category: "iOS Development",
    status: "Under Development",
    features: [
      "Dynamic Profiling - Real-time athlete performance tracking with comprehensive statistics and game analysis.",
      "Game Documentation - Detailed match summaries with scoring efficiency metrics and performance insights.",
      "Networking - Social features enabling athletes to connect, share achievements, and build professional networks.",
    ],
  },
  {
    id: "goamigo",
    title: "GoAmigo",
    description: "Full-stack bike rental management system with automated inventory and invoicing",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GoAmigo%28MobileScreens%29-4aIVM6vBOhJTawYZ0vikls9Fhbrjph.png",
    impact: "90% faster invoice processing",
    stack: ["React Native", "Node.js", "MongoDB", "Redux"],
    category: "Cross-platform",
    demoVideo: "https://www.loom.com/share/f1250e02b9044a9ba0703cf47df9dc97?sid=50218252-9d74-4342-8cd3-56e468d94ee7",
    features: [
      "Inventory Management - Real-time bike availability tracking with automated status updates and maintenance scheduling.",
      "Smart Invoicing - Automated billing system with document verification and customer profiling for seamless transactions.",
      "Fleet Analytics - Comprehensive dashboard providing insights on rental patterns, revenue optimization, and operational efficiency.",
    ],
  },
  {
    id: "trekato",
    title: "Trekato",
    description: "Travel platform with global chat, trip planning, and community challenges",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-07%20at%209.46.19%E2%80%AFPM-KWPNMW1887qy23e0GIMoQckOIPxGRS.png",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trekato%28Logo%29-y4T57SFZPnqPRucg3zXXWPwtZpVsaG.png",
    impact: "50% performance improvement",
    stack: ["React Native", "Expo", "Firebase", "Redux"],
    category: "Cross-platform",
    demoVideo: "https://drive.google.com/file/d/1_nGk9dMY47cKwrwOYGYaZnaroPfiSYDQ/view",
    website: "https://www.trekato.com",
    features: [
      "Template Feature - Simplifies trip planning with customizable templates, ensuring effortless itinerary creation.",
      "Plantation Feature - Promotes eco-conscious travel, allowing users to document tree-planting efforts and earn rewards.",
      "Private Album - Feature ensures users can securely store and organize personal travel memories with privacy controls.",
    ],
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of mobile applications I've built, from concept to deployment, with measurable impact and
            cutting-edge technology.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`w-full animate-fade-in-up ${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Project Header */}
            <div
              className={`py-8 ${index % 2 === 0 ? "bg-foreground text-background" : "bg-background text-foreground"}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono opacity-70">0{index + 1} Works</span>
                    <span className="text-sm opacity-50">—</span>
                    <span className="text-sm font-medium">
                      Project 0{index + 1} ({project.title})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={`${index % 2 === 0 ? "bg-background text-foreground border-background/20" : "bg-foreground text-background border-foreground/20"}`}
                    >
                      {project.category}
                    </Badge>
                    {project.status && (
                      <Badge
                        variant="secondary"
                        className="bg-yellow-100 text-yellow-800 border-yellow-300 animate-pulse"
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative group">
                      <div className="aspect-[16/10] relative overflow-hidden rounded-2xl bg-muted shadow-2xl">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={`${project.title} screenshots`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {project.logo && (
                          <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-2xl p-3 shadow-xl backdrop-blur-sm bg-white/95 group-hover:scale-110 transition-transform duration-300">
                            <Image
                              src={project.logo || "/placeholder.svg"}
                              alt={`${project.title} logo`}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{project.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                      <div className="text-lg font-semibold text-accent mb-6">{project.impact}</div>
                    </div>

                    {/* Features */}
                    {project.features && (
                      <div className="space-y-4">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex gap-4">
                            <span className="text-2xl font-bold text-primary flex-shrink-0">{featureIndex + 1}.</span>
                            <p className="text-muted-foreground leading-relaxed">{feature}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover:bg-primary/10 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.demoVideo && (
                        <Button
                          variant="default"
                          className="group/btn hover:scale-105 transition-all duration-300"
                          asChild
                        >
                          <Link href={project.demoVideo} target="_blank">
                            Watch Demo
                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </Button>
                      )}
                      {project.website && (
                        <Button
                          variant="outline"
                          className="group/btn hover:scale-105 transition-all duration-300 bg-transparent"
                          asChild
                        >
                          <Link href={project.website} target="_blank">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
