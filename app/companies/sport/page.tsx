import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Trophy, Users, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function SportPage() {
  const features = [
    {
      icon: Trophy,
      title: "Elite Sports Management",
      description: "Professional sports management services for athletes, teams, and sporting organizations worldwide.",
    },
    {
      icon: Users,
      title: "Training & Development",
      description:
        "Comprehensive training programs and development initiatives for athletes at all levels of competition.",
    },
    {
      icon: Target,
      title: "Performance Analytics",
      description: "Advanced performance analysis and optimization using cutting-edge sports science and technology.",
    },
    {
      icon: Zap,
      title: "Sports Innovation",
      description: "Innovative sports technologies, equipment development, and performance enhancement solutions.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 bg-[image:url(/img/companies/10-sport/cover.webp)] bg-cover bg-primary/30 bg-blend-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Sport</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Elevating athletic performance and sports excellence through innovative management, training, and
              development programs.
            </p>
            <Link href="/contact" className="contents">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Discover Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold golden-title mb-8">Our Sports Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RICHMIND Sport is dedicated to excellence in athletic performance and sports development. We believe that
              success in sports requires a combination of talent, dedication, scientific training methods, and
              innovative support systems. Our approach integrates cutting-edge sports science with personalized coaching
              to help athletes reach their full potential.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From grassroots development to elite performance management, we provide comprehensive sports services that
              support athletes, teams, and organizations in achieving their goals. Our commitment extends beyond
              competition to include character development, leadership skills, and lifelong wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold golden-title mb-6">Sports Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive sports management and development services designed to elevate athletic performance and
              achievement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <Card key={feature.title} className="border-accent/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mb-6 bg-accent/10 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Elevate Your Performance?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with RICHMIND Sport to unlock your athletic potential and achieve excellence in competition.
          </p>
          
          <Link href="/contact" className="contents">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
