import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Globe, Users, TrendingUp, Award } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Globe, label: "Global Markets", value: "50+" },
    { icon: Users, label: "Team Members", value: "200+" },
    { icon: TrendingUp, label: "Portfolio Companies", value: "12" },
    { icon: Award, label: "Years of Excellence", value: "25+" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center my-16">
            <h1 className="font-serif text-3xl font-bold golden-title mb-6">About RICHMIND Holding</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A legacy of excellence, innovation, and sustainable growth across diverse industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon
              return (
                <Card key={stat.label} className="text-center border-accent/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div className="font-serif text-2xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl font-bold golden-title mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At RICHMIND Holding, our mission is to use operational expertise and strategic investments to promote
                innovation, sustainability, and brilliance, reaffirming our ongoing commitment to worldwide community
                service.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in creating lasting value through responsible business practices, fostering innovation across
                industries, and building sustainable solutions that benefit both our stakeholders and the communities we
                serve.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/img/about-us/about-us-3.jpg"
                alt="RICHMIND team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="bg-[image:url(/london-wide.jpg)] bg-fixed bg-cover absolute inset-0 -z-1 bg-primary/45 bg-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-lg max-w-3xl mx-auto text-white/90">
              The principles that guide every decision and drive our success across all ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 glass border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-4">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive for excellence in everything we do, setting the highest standards for quality, performance,
                  and results across all our portfolio companies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 glass border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transparency, honesty, and ethical business practices form the foundation of all our relationships
                  with stakeholders, partners, and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 glass border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We embrace cutting-edge technologies and forward-thinking approaches to drive progress and create
                  sustainable solutions for the future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
