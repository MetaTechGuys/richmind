import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Plane, Camera, Star } from "lucide-react"
import Link from "next/link"

export default function TourismHolidayPage() {
  const features = [
    {
      icon: MapPin,
      title: "Luxury Destinations",
      description:
        "Exclusive access to premium destinations and hidden gems around the world for unforgettable experiences.",
    },
    {
      icon: Plane,
      title: "Premium Travel Services",
      description:
        "First-class travel arrangements including private jets, luxury accommodations, and personalized itineraries.",
    },
    {
      icon: Camera,
      title: "Curated Experiences",
      description:
        "Unique cultural experiences, adventure tours, and exclusive events tailored to your interests and preferences.",
    },
    {
      icon: Star,
      title: "VIP Concierge",
      description: "24/7 concierge services ensuring every aspect of your journey is seamless and extraordinary.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="page-banner bg-[image:url(/img/companies/7-holiday/cover.webp)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-3xl font-bold mb-6">Tourism & Holiday</h1>
            <p className="text-lg md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Creating extraordinary travel experiences and luxury holidays that inspire, rejuvenate, and create lasting
              memories.
            </p>
          
            <Link href="/contact" className="contents">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
                Plan Your Journey
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
            <h2 className="font-serif text-2xl font-bold golden-title mb-8">Our Travel Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RICHMIND Tourism & Holiday believes that travel is more than just visiting new places—it&apos;s about creating
              transformative experiences that enrich the soul and broaden perspectives. We curate exceptional journeys
              that combine luxury, authenticity, and adventure to deliver unparalleled travel experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence extends to every detail of your journey, from the moment you begin planning
              until you return home with memories to last a lifetime. We specialize in creating bespoke travel
              experiences that reflect your unique interests, preferences, and dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl font-bold golden-title mb-6">Travel Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive luxury travel services designed to create extraordinary holiday experiences and
              unforgettable journeys.
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

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let RICHMIND Tourism & Holiday create an extraordinary travel experience tailored just for you.
          </p>
          
          <Link href="/contact" className="contents">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
              Start Planning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
