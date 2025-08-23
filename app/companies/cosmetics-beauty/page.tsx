import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Leaf, Users, Award } from "lucide-react"
import Link from "next/link"

export default function CosmeticsBeautyPage() {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Beauty Products",
      description:
        "Luxury cosmetics and beauty products crafted with the finest ingredients and innovative formulations.",
    },
    {
      icon: Leaf,
      title: "Natural & Sustainable",
      description: "Eco-friendly beauty solutions using natural ingredients and sustainable packaging practices.",
    },
    {
      icon: Users,
      title: "Personalized Beauty",
      description: "Customized beauty solutions tailored to individual skin types, preferences, and lifestyle needs.",
    },
    {
      icon: Award,
      title: "Award-Winning Innovation",
      description:
        "Industry-leading research and development creating breakthrough beauty technologies and treatments.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="page-banner bg-[image:url(/img/companies/8-cosmomed/cover.webp)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Cosmetics & Beauty</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Redefining beauty through innovative cosmetics and luxury beauty solutions that enhance natural radiance
              and confidence.
            </p>
            <Link href="/contact" className="contents">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
                Discover Our Collection
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
            <h2 className="font-serif text-4xl font-bold golden-title mb-8">Our Beauty Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RICHMIND Cosmetics & Beauty believes that true beauty comes from confidence and self-expression. We create
              premium beauty products that enhance natural features while promoting healthy skin and sustainable beauty
              practices. Our commitment to quality and innovation drives us to develop products that deliver exceptional
              results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From luxury skincare to innovative makeup solutions, we combine cutting-edge science with natural
              ingredients to create products that not only look beautiful but also nourish and protect. Our dedication
              to sustainability ensures that beauty doesn&apos;t come at the expense of our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold golden-title mb-6">Beauty Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive beauty and cosmetics solutions designed to enhance natural beauty and promote confidence.
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
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Enhance Your Beauty?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover RICHMIND&apos;s premium beauty products and experience the difference of luxury cosmetics.
          </p>
          <Link href="/contact" className="contents">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
