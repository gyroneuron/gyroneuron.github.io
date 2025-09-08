import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-xl text-foreground mb-4">Vivek Jaglan</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Mobile Application Developer specializing in React Native and iOS development. Building fast, secure, and
              scalable mobile experiences.
            </p>
            <div className="flex space-x-4">
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

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="mailto:vivekjaglan34@gmail.com" className="hover:text-primary transition-colors">
                  vivekjaglan34@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+918968582776" className="hover:text-primary transition-colors">
                  +91 8968582776
                </Link>
              </li>
              <li>Chennai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Vivek Jaglan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
