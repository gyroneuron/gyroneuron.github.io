import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Available for new opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Vivek Jaglan</span>
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6">Mobile Application Developer</h2>

          {/* Value Proposition */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance leading-relaxed">
            Building fast, secure mobile apps with React Native and iOS. Delivering measurable results.
          </p>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">90%</div>
              <div className="text-sm text-muted-foreground">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50%</div>
              <div className="text-sm text-muted-foreground">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Faster Load Times</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25%</div>
              <div className="text-sm text-muted-foreground">More Engagement</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="https://cal.com/viveksreal/15min" target="_blank">
                Work with me
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:vivekjaglan34@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="tel:+918968582776" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/vivekjaglan" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/gyroneuron" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
