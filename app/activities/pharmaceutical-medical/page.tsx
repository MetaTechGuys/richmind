import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Microscope, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function PharmaceuticalMedicalPage() {
  const features = [
    {
      icon: Microscope,
      title: "Research & Development",
      description:
        "Cutting-edge pharmaceutical research and development of innovative treatments and medical solutions.",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Developing medical solutions that prioritize patient outcomes and improve quality of life worldwide.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control and regulatory compliance ensuring the highest standards of safety and efficacy.",
    },
    {
      icon: Users,
      title: "Healthcare Partnerships",
      description:
        "Collaborative partnerships with healthcare providers to deliver comprehensive medical solutions and services.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero section */}
      <section className="page-banner bg-[image:url(/img/companies/11-medical/cover.webp)] bg-primary/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-3xl font-bold mb-6">Pharmaceutical & Medical</h1>
            <p className="text-lg md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Advancing healthcare through innovative pharmaceutical solutions and medical technologies that improve
              lives globally.
            </p>
            <Link href="/contact" className="contents">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold mb-8 golden-title">Our Healthcare Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RICHMIND Pharmaceutical & Medical is dedicated to advancing healthcare through innovative research,
              development, and delivery of life-changing medical solutions. We believe that access to quality healthcare
              is fundamental, and we work tirelessly to develop treatments that address unmet medical needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment extends beyond pharmaceutical development to encompass comprehensive healthcare solutions,
              medical device innovation, and strategic partnerships that enhance patient care and improve health
              outcomes across diverse populations and medical conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl font-bold golden-title mb-6">Healthcare Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive pharmaceutical and medical services designed to improve patient outcomes and advance
              healthcare.
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
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">Ready to Advance Healthcare?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with RICHMIND Pharmaceutical & Medical to develop innovative healthcare solutions that make a
            difference.
          </p>
          <Link href="/contact" className="contents">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
