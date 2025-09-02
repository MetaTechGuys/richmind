import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building, MapPin, TrendingUp, Key } from "lucide-react"
import Link from "next/link"

export default function PropertiesRealEstatePage() {
  const features = [
    {
      icon: Building,
      title: "Premium Properties",
      description: "Exclusive portfolio of luxury residential and commercial properties in prime locations worldwide.",
    },
    {
      icon: MapPin,
      title: "Global Locations",
      description: "Strategic real estate investments across major metropolitan areas and emerging markets globally.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert real estate investment advice and portfolio management for maximum returns and growth.",
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Comprehensive property management services ensuring optimal maintenance and value preservation.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="page-banner bg-[image:url(/img/companies/4-properties/cover.webp)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Properties & Real Estate</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Building wealth through strategic real estate investments and premium property development in prime global
              locations.
            </p>
            <Link href="https://richmind.com/" target="_blank" className="contents">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
                Explore Properties
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
            <h2 className="font-serif text-4xl font-bold golden-title mb-8">Our Real Estate Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RICHMIND Properties & Real Estate specializes in identifying, acquiring, and developing premium real
              estate opportunities that deliver exceptional value and long-term growth. We focus on prime locations with
              strong fundamentals and growth potential, ensuring our investments provide sustainable returns.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive approach encompasses residential, commercial, and mixed-use developments, with a
              commitment to quality, sustainability, and community enhancement. We leverage market expertise and
              strategic partnerships to create real estate solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold golden-title mb-6">Real Estate Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive real estate solutions designed to maximise investment potential and property value.
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
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Invest in Premium Real Estate?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover exceptional real estate opportunities with RICHMIND Properties & Real Estate.
          </p>
          <Link href="https://richmind.com/" target="_blank" className="contents">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
