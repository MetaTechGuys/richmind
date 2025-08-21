import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Crown, Users, Calendar, Gift } from "lucide-react"

export default function VipClubPage() {
  const features = [
    {
      icon: Crown,
      title: "Exclusive Membership",
      description:
        "Elite membership program offering access to premium services, events, and exclusive opportunities worldwide.",
    },
    {
      icon: Users,
      title: "Networking Events",
      description:
        "High-profile networking events connecting influential leaders, entrepreneurs, and industry experts.",
    },
    {
      icon: Calendar,
      title: "Private Events",
      description: "Invitation-only events, galas, and exclusive gatherings in prestigious venues around the globe.",
    },
    {
      icon: Gift,
      title: "Premium Benefits",
      description: "Luxury perks, personalized services, and exclusive access to products and experiences.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">VIP Club</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              An exclusive community for distinguished individuals seeking premium experiences, networking
              opportunities, and luxury lifestyle benefits.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Apply for Membership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-primary mb-8">Exclusive Membership Experience</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RICHMIND VIP Club is an exclusive community designed for discerning individuals who appreciate the finest
              things in life. Our members enjoy access to unique experiences, premium services, and a network of
              like-minded professionals and entrepreneurs from around the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Membership is by invitation only, ensuring an intimate and prestigious community where meaningful
              connections are formed and extraordinary experiences are shared. We curate every aspect of the club
              experience to exceed the expectations of our distinguished members.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">Membership Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exclusive privileges and premium services designed for our distinguished VIP Club members.
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
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Join Our Elite Community?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the pinnacle of luxury and exclusivity with RICHMIND VIP Club membership.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Request Invitation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
