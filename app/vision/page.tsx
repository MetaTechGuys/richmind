import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Globe, Users, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
      <section className="pt-24">
        <div className="max-w-4xl mx-auto relative">
          <Image
            src="/vision.jpg"
            alt="RICHMIND vision"
            width={600}
            height={400}
            className="size-full inset-0 absolute object-cover -z-1 object-right-top"
          />
          <div className="size-full flex flex-col justify-end-safe h-100 p-8">
            <h1 className="text-3xl font-serif font-bold text-primary-foreground my-6">Our Vision</h1>
            <p className="text-xl text-muted">
              Shaping the future through strategic integration of capital, innovation, and sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 md:py-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
              Vision Statement of RichMind Holding
            </h2>

            <div className="prose prose-lg max-w-none text-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                At RichMind Holding, we envision a future where capital, innovation, and strategic development are
                harmoniously integrated to create enduring value. Headquartered in London, our mission extends beyond
                traditional investment; we are dedicated to fostering ecosystems of sustainable growth that empower
                businesses, elevate industries, and contribute to global prosperity.
              </p>

              <p className="text-lg leading-relaxed">
                Our portfolio spans twelve diverse yet interconnected activities: Investment, Development, Media,
                Fintech, VIP Club, Trading, Sport, Cosmetics & Beauty, Pharmaceutical & Medical, Tourism & Holiday,
                Project Management, and Properties & Real Estate. This breadth of engagement enables RichMind Holding to
                act as a catalyst for synergy, bridging sectors and shaping opportunities that are both profitable and
                transformative.
              </p>

              <p className="text-lg leading-relaxed">
                We aspire to establish ourselves as a trusted bridge between emerging markets and established global
                arenas. By connecting Europe, the Middle East, and Asia, we align financial resources with innovation
                and entrepreneurship, enabling local initiatives to evolve into internationally recognized enterprises
                while generating sustainable value for our stakeholders.
              </p>

              <p className="text-lg leading-relaxed">
                Beyond financial returns, RichMind Holding is committed to a legacy of responsibility, innovation, and
                excellence. Our vision is to leave a lasting imprint on economies, societies, and future generations,
                positioning RichMind Holding as a symbol of integrity and progress in the international business
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-primary text-center mb-12">
            Our Vision Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-accent/20 p-6">
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Global Integration</h3>
              <p className="text-foreground">
                Bridging emerging markets with established global arenas across Europe, the Middle East, and Asia.
              </p>
            </div>

            <div className="bg-card border border-accent/20 p-6">
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Sustainable Growth</h3>
              <p className="text-foreground">
                Creating enduring value through ecosystems that empower businesses and elevate entire industries.
              </p>
            </div>

            <div className="bg-card border border-accent/20 p-6">
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Legacy of Excellence</h3>
              <p className="text-foreground">
                Committed to responsibility, innovation, and leaving a lasting positive imprint on future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Join Our Vision</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to shape the future of global business and create lasting value across industries and
            continents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent/10 bg-transparent"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
