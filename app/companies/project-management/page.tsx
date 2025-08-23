import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Clock, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ProjectManagementPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Project Planning & Execution",
      description:
        "Comprehensive project planning with detailed execution strategies to ensure successful delivery on time and within budget.",
    },
    {
      icon: Clock,
      title: "Timeline Management",
      description:
        "Advanced scheduling and milestone tracking to keep projects on track and stakeholders informed throughout the process.",
    },
    {
      icon: Users,
      title: "Team Coordination",
      description:
        "Expert coordination of cross-functional teams, ensuring seamless collaboration and optimal resource utilization.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Real-time project analytics and reporting to monitor progress, identify risks, and optimize project outcomes.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="page-banner bg-[image:url(/img/companies/5-projectmanagment/cover.webp)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Project Management</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Delivering excellence through strategic project management, ensuring every initiative achieves its
              objectives efficiently and effectively.
            </p>
            <Link href="/contact" className="contents">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
                Explore Our Approach
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
            <h2 className="font-serif text-4xl font-bold golden-title mb-8">Our Project Management Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RICHMIND Project Management combines proven methodologies with innovative approaches to deliver
              exceptional results. We believe that successful project management is built on clear communication,
              meticulous planning, and adaptive execution that responds to changing requirements and challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our experienced team leverages industry best practices and cutting-edge tools to ensure projects are
              completed on time, within budget, and to the highest quality standards. We focus on building strong
              relationships with stakeholders while maintaining transparency throughout the project lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold golden-title mb-6">Core Management Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive project management solutions designed to optimize efficiency and ensure successful project
              delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <Card key={feature.title} className="border-accent/20 hover:shadow-lg transition-shadow py-0!">
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
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Optimize Your Projects?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with RICHMIND Project Management to ensure your initiatives are delivered successfully and
            efficiently.
          </p>
          <Link href="/contact" className="contents">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 ps-8!">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
