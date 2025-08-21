import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Video, Radio, Newspaper, Smartphone } from "lucide-react"

export default function MediaPage() {
  const features = [
    {
      icon: Video,
      title: "Digital Content Creation",
      description:
        "Producing high-quality video content, documentaries, and multimedia experiences for global audiences.",
    },
    {
      icon: Radio,
      title: "Broadcasting Solutions",
      description:
        "Comprehensive broadcasting services including live streaming, podcast production, and audio content.",
    },
    {
      icon: Newspaper,
      title: "Publishing & Editorial",
      description:
        "Editorial services, content strategy, and publishing solutions across multiple platforms and formats.",
    },
    {
      icon: Smartphone,
      title: "Social Media Management",
      description: "Strategic social media campaigns, community management, and digital marketing solutions.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Media</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Crafting compelling narratives and delivering impactful media solutions that connect brands with their
              audiences across all platforms.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-primary mb-8">Our Media Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RICHMIND Media believes in the power of storytelling to inspire, inform, and transform. We create content
              that resonates with audiences while maintaining the highest standards of quality and authenticity. Our
              approach combines creative excellence with strategic thinking to deliver media solutions that drive
              results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From traditional broadcasting to cutting-edge digital platforms, we leverage the latest technologies and
              creative techniques to ensure our clients' messages reach their intended audiences with maximum impact and
              engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">Media Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive media solutions tailored to meet the diverse needs of modern businesses and organizations.
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
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with RICHMIND Media to create compelling content that engages your audience and drives your business
            forward.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Start Your Campaign
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
