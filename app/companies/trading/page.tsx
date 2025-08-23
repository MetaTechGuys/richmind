import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function TradingPage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Advanced Trading Strategies",
      description:
        "Sophisticated trading algorithms and strategies designed to maximize returns while managing risk across diverse markets.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and mitigation strategies to protect investments and ensure sustainable trading performance.",
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description:
        "Access to international markets and trading opportunities across multiple asset classes and geographic regions.",
    },
    {
      icon: Zap,
      title: "Real-Time Execution",
      description:
        "Lightning-fast trade execution with advanced technology platforms ensuring optimal timing and pricing.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="page-banner bg-[image:url(/img/companies/)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Trading</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Leveraging advanced trading strategies and cutting-edge technology to deliver superior returns in global
              financial markets.
            </p>
            
            <Link href="/contact" className="contents">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Explore Trading Solutions
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
            <h2 className="font-serif text-4xl font-bold golden-title mb-8">Our Trading Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RICHMIND Trading operates on the principle that successful trading requires a perfect balance of
              analytical rigor, technological innovation, and disciplined risk management. Our approach combines
              quantitative analysis with market intuition to identify and capitalize on trading opportunities across
              global markets.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We employ sophisticated algorithms, real-time market analysis, and proven trading strategies to deliver
              consistent performance. Our commitment to transparency and ethical trading practices ensures that our
              clients&apos; interests are always our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold golden-title mb-6">Trading Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive trading solutions powered by advanced technology and expert market knowledge.
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
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Trade with Confidence?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with RICHMIND Trading to access sophisticated trading strategies and global market opportunities.
          </p>
          
          <Link href="/contact" className="contents">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Trading
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
