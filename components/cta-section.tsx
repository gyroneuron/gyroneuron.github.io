import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Build High-Impact Mobile Experiences
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to turn your mobile app idea into reality? I specialize in creating fast, secure, and scalable
              mobile solutions that deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="https://cal.com/viveksreal/15min" target="_blank">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild className="text-lg px-8 bg-transparent">
                <a href="mailto:vivekjaglan34@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild className="text-lg px-8 bg-transparent">
                <Link href="https://wa.me/918968582776" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
