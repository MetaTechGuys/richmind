import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Smartphone, Brain, Globe, Shield } from "lucide-react"

export default function FintechPage() {
  const features = [
    {
      icon: Shield,
      title: "Blockchain-Powered Ecosystems",
      description: "Bringing transparency to transactions and eliminating inefficiencies.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Risk management, fraud prevention, and smarter financial decisions.",
    },
    {
      icon: Smartphone,
      title: "Seamless User Experience",
      description: "Tools built for accessibility across devices and regions.",
    },
    {
      icon: Globe,
      title: "Cross-Border Integration",
      description: "Platforms designed for the global citizen and global enterprise.",
    },
  ]

  const offerings = [
    "Digital Banking & Payments — Enabling borderless transfers and mobile-first financial management.",
    "Wealth Management Tools — AI-driven insights for individuals and institutions to grow assets securely.",
    "Compliance Automation — KYC/AML solutions that reduce friction while meeting global regulations.",
    "DeFi & Web3 Infrastructure — Building frameworks for decentralized finance adoption at scale.",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold golden-title mb-6">Fintech</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Fintech division is where technology and finance converge to reimagine the way the world transacts,
                invests, and saves. We build digital infrastructures that democratize financial services, reduce
                inefficiencies, and empower individuals and enterprises alike.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/img/companies/box-2-virtualassets.webp"
                alt="Fintech solutions"
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold golden-title mb-6">
              Our Philosophy: Finance for All
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We believe that financial access should not be a privilege—it should be a global standard. Every
              innovation we design focuses on inclusion, security, and transparency, ensuring our platforms benefit not
              only institutions but also underserved communities worldwide.
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

      {/* Core Offerings Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/blockchain-network.png"
                alt="Blockchain technology"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold golden-title mb-6">Core Offerings</h2>
              <div className="space-y-4">
                {offerings.map((offering, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{offering}</p>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold golden-title mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              By integrating advanced technologies with human-centered design, we deliver fintech solutions that are
              secure, scalable, and impactful. Our ecosystem bridges traditional finance and next-generation digital
              assets seamlessly.
            </p>
          </div>

          <Card className="border-accent/20 bg-card">
            <CardContent className="p-12 text-center">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">Join Our Movement</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Richmind Fintech is paving the way for a borderless financial future—where trust, access, and growth
                belong to everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
