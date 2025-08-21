import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { TrendingUp, Globe, Shield, Users } from "lucide-react"

export default function InvestmentPage() {
  const features = [
    {
      icon: Globe,
      title: "Global Intelligence",
      description: "A team of market experts continuously scanning global financial trends.",
    },
    {
      icon: Shield,
      title: "Diversified Resilience",
      description: "Balancing volatile high-growth assets with stable long-term investments.",
    },
    {
      icon: TrendingUp,
      title: "Ethical Focus",
      description: "Investing responsibly in businesses that prioritize transparency and sustainability.",
    },
    {
      icon: Users,
      title: "Collaborative Strategy",
      description: "Partnering with entrepreneurs, governments, and institutions to unlock potential.",
    },
  ]

  const coreAreas = [
    "Real Estate & Infrastructure — Building long-term value through landmark projects.",
    "Private Equity & Venture Capital — Supporting disruptive innovators and scaling enterprises.",
    "Renewable Energy — Investing in sustainable power solutions that safeguard the planet's future.",
    "Digital & Technology Assets — Fueling the next generation of fintech, blockchain, and AI companies.",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">Investment</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Richmind Investment, we see capital not as a number but as a force of transformation. We channel
                resources into ventures that push boundaries, shape economies, and open new doors to global prosperity.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/modern-investment-office.png"
                alt="Investment operations"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Philosophy: Growth with Responsibility
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our approach blends ambition with accountability. We pursue opportunities that yield enduring returns,
              protect investor interests, and drive measurable impact. By aligning with businesses that respect
              environmental, social, and governance (ESG) standards, we ensure our growth story contributes positively
              to the planet and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <Card key={feature.title} className="border-accent/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg text-primary mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/renewable-energy-landscape.png"
                alt="Sustainable investments"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Core Areas</h2>
              <div className="space-y-4">
                {coreAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From due diligence to portfolio growth, every stage is backed by rigorous research, transparent
              communication, and dynamic strategy execution. Our teams bring together global reach with local expertise
              to maximize impact.
            </p>
          </div>

          <Card className="border-accent/20 bg-card">
            <CardContent className="p-12 text-center">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">Join Our Movement</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Partner with Richmind Investment to grow capital where innovation meets sustainability. With us,
                investment becomes more than profit—it becomes a legacy of progress.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
