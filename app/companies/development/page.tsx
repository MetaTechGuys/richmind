import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, Zap, Users, Target } from "lucide-react"
import Link from "next/link"

export default function DevelopmentPage() {
  const features = [
    {
      icon: Building2,
      title: "Infrastructure Development",
      description: "Building sustainable infrastructure that supports long-term growth and community development.",
    },
    {
      icon: Zap,
      title: "Innovation Hub",
      description: "Creating spaces and systems that foster innovation and technological advancement.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Developing projects that enhance quality of life and create lasting positive impact.",
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive planning and execution of development projects with measurable outcomes.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="page-banner bg-[image:url(/img/companies/6-development/cover.webp)] bg-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Development</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Building the future through strategic development initiatives that create lasting value for communities
              and stakeholders.
            </p>
            <Link href="/contact" className="contents">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
                Explore Our Projects
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
            <h2 className="font-serif text-4xl font-bold golden-title mb-8">Our Development Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At RICHMIND Development, we believe in creating sustainable solutions that stand the test of time. Our
              approach combines innovative design with practical functionality, ensuring every project delivers maximum
              value while respecting environmental and social considerations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We focus on developing infrastructure, commercial spaces, and residential projects that enhance
              communities and drive economic growth. Our commitment to excellence is reflected in every aspect of our
              development process, from initial planning to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold golden-title mb-6">Core Development Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach to development encompasses multiple sectors and specializations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <Card key={feature.title} className="border-accent/20 hover:shadow-lg transition-shadow py-0!">
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
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Develop Your Vision?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with RICHMIND Development to bring your project to life with our expertise and commitment to
            excellence.
          </p>
          <Link href="/contact" className="contents">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
