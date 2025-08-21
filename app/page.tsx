'use client'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Globe, Users, TrendingUp, Lightbulb, Handshake, Leaf } from "lucide-react"

export default function HomePage() {
  const companies = [
    { name: "Investment", href: "/companies/investment", icon: TrendingUp },
    { name: "Development", href: "/companies/development", icon: Globe },
    { name: "Media", href: "/companies/media", icon: Users },
    { name: "Fintech", href: "/companies/fintech", icon: TrendingUp },
    { name: "Project Management", href: "/companies/project-management", icon: Users },
    { name: "Trading", href: "/companies/trading", icon: TrendingUp },
    { name: "Pharmaceutical & Medical", href: "/companies/pharmaceutical-medical", icon: Globe },
    { name: "Cosmetics & Beauty", href: "/companies/cosmetics-beauty", icon: Users },
    { name: "Tourism & Holiday", href: "/companies/tourism-holiday", icon: Globe },
    { name: "VIP Club", href: "/companies/vip-club", icon: Users },
    { name: "Sport", href: "/companies/sport", icon: Users },
    { name: "Properties & Real Estate", href: "/companies/properties-real-estate", icon: TrendingUp },
  ]

  const strategies = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Leading the charge in developing new technologies and methodologies. We empower our teams to deliver high quality results with the most advanced resources available.",
      points: [
        "Advancing with future tech",
        "Utilizing cutting-edge tools",
        "Progress through constant improvement",
        "Crafting a creative legacy",
      ],
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "Real collaboration results in a stronger, more cohesive organization. Collaboration is vital for achieving long lasting achievements. We value individual contributions.",
      points: [
        "Succeeding together",
        "Building strong partnerships",
        "Joint efforts yield results",
        "Empowering team excellence",
      ],
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We believe that long-term success is rooted in sustainable practices. Every project at RICHMIND is approached with a focus on eco-friendly practices and sustainability.",
      points: [
        "Devoted to the environment",
        "Building strong partnerships",
        "Investing in a green future",
        "Promoting eco-friendly practices",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Video Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover" poster="/luxury-business-exterior.png">
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Global reach, local expertise</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Our mission is to use operational expertise and strategic investments to promote innovation, sustainability,
            and brilliance, reaffirming our ongoing mission to do worldwide community service.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3">
            Discover Our Companies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              RICHMIND Holding's Companies
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The portfolio of RICHMIND Holding is diverse, incorporating an extensive spectrum of industries, and it is
              indicative of our drive to sustainability, innovation, and growth. The broader mission of RICHMIND Holding
              is to drive global influence and create lasting value, and each company within the group operates with a
              distinctive focus. The synergy of these entities is the basis of our strength, as each plays a vital part
              in establishing an upward trajectory for our stakeholders and the communities we support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {companies.map((company) => {
              const IconComponent = company.icon
              return (
                <Link key={company.href} href={company.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-accent group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                        {company.name}
                      </h3>
                      <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-accent transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Branches Section - Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Global Branches</h2>
            <p className="text-lg text-muted-foreground">Content coming soon - Global presence across major markets</p>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              High Standards in Global Investments
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                RICHMIND Holding aims to stay at the top of the global market through executing inventive investment
                approaches and delivering long-term, sustainable growth. We methodically identify and allocate resources
                to industries that have significant expansion potential.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-card p-6 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-xl text-primary mb-3">Strategic Investments in Key Sectors</h3>
                  <p className="text-muted-foreground">
                    Focused allocation of resources to high-growth industries with proven expansion potential.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-xl text-primary mb-3">Sustainability and Innovation Engagement</h3>
                  <p className="text-muted-foreground">
                    Commitment to sustainable practices while driving innovation across all our portfolio companies.
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
                We have a wide-reaching global presence in major markets, allowing us to generate substantial returns on
                our investments while impacting regional economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              The Three Pillars of RichMind Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategies.map((strategy) => {
              const IconComponent = strategy.icon
              return (
                <Card key={strategy.title} className="h-full border-accent/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4 text-center">{strategy.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{strategy.description}</p>
                    <ul className="space-y-2">
                      {strategy.points.map((point, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
