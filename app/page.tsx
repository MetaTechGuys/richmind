'use client'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Lottie from 'lottie-react';
import animationData from '@/public/animates/worldmap/data.json';
import { ArrowRight, Globe, Users, TrendingUp, Lightbulb, Handshake, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"
import { useBoolean } from 'usehooks-ts';
import Image from "next/image"
import ScrollInviter from "@/components/ui/ScrollInviter"

interface IPoint {
  label: string;
  x: number;
  y: number;
  isMain?: boolean;
}

const points: IPoint[] = [
  { label: 'London', x: 1055, y: 475, isMain: true },
  { label: 'Dubai', x: 1409, y: 707, isMain: true },
  { label: 'Pretoria', x: 1207, y: 1075 },
  { label: 'Ottawa', x: 410, y: 445 },
  { label: 'Canberra', x: 1890, y: 1080 },
  { label: 'Washington, D.C.', x: 460, y: 588 },
  { label: 'Tokyo', x: 1840, y: 615 },
  { label: 'New Delhi', x: 1530, y: 779 },
  { label: 'Riyadh', x: 1345, y: 735 },
  { label: 'Beijing', x: 1695, y: 645 },
  { label: 'Ankara', x: 1262, y: 590 },
  { label: 'Rome', x: 1140, y: 560 },
  { label: 'Madrid', x: 1029, y: 580 },
  { label: 'Berlin', x: 1120, y: 485 },
  { label: 'Paris', x: 1077, y: 520 },
];

export default function HomePage() {
  const showClickMap = useBoolean();
  const companies = [
    { name: "Investment", href: "/companies/investment", icon: TrendingUp, image: '/img/companies/box-1-investment.webp' },
    { name: "Development", href: "/companies/development", icon: Globe, image: '/img/companies/box-6-development.webp' },
    { name: "Media", href: "/companies/media", icon: Users, image: '/img/companies/3-media/box.webp' },
    { name: "Fintech", href: "/companies/fintech", icon: TrendingUp, image: '/img/companies/box-2-virtualassets.webp' },
    { name: "Project Management", href: "/companies/project-management", icon: Users, image: '/img/companies/box-5-projectmanager.webp' },
    { name: "Trading", href: "/companies/trading", icon: TrendingUp, image: '/img/companies/box-12-trading.webp' },
    { name: "Pharmaceutical & Medical", href: "/companies/pharmaceutical-medical", icon: Globe, image: '/img/companies/8-cosmomed/box.webp' },
    { name: "Cosmetics & Beauty", href: "/companies/cosmetics-beauty", icon: Users, image: '/img/companies/8-cosmomed/box.webp' },
    { name: "Tourism & Holiday", href: "/companies/tourism-holiday", icon: Globe, image: '/img/companies/7-holiday/box.webp' },
    { name: "VIP Club", href: "/companies/vip-club", icon: Users, image: '/img/companies/9-vipclub/box.webp' },
    { name: "Sport", href: "/companies/sport", icon: Users, image: '/img/companies/10-sport/box.webp' },
    { name: "Properties & Real Estate", href: "/companies/properties-real-estate", icon: TrendingUp, image: '/img/companies/box-4-properties.webp' },
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
      <Navigation autohide />

      {/* Hero Section with Video Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover" poster="/luxury-business-exterior.png">
            <source src="/videos/baner-site.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Image
            width={200}
            height={200}
            src="/img/RichMindlogo-white.png"
            alt="Richmin Holding"
            className="w-full object-center object-contain h-50"
          />
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Global reach, local expertise</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Our mission is to use operational expertise and strategic investments to promote innovation, sustainability,
            and brilliance, reaffirming our ongoing mission to do worldwide community service.
          </p>
          <Link href="#companies" className="contents">
            <Button size="lg" className="bg-linear-(--golded-gradient) text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 ps-8! font-bold">
              Discover
              <ArrowRight className="ml-2 size-6" />
            </Button>
          </Link>
          <ScrollInviter className="mt-10 [animation-duration:2000ms] " href="#companies" />
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold golden-title mb-6">
              RICHMIND Holding&apos;s Companies
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
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-accent group relative aspect-video">
                      {/* <img
                        className="absolute object-cover inset-0 size-full z-0"
                        src={company.image}
                      /> */}
                    <CardContent className="p-6 text-center z-1">
                      <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                        {company.name}
                      </h3>
                      {/* <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-accent transition-colors" /> */}
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold golden-title mb-6">Our Global Branches</h2>
            <div className="relative aspect-video">
              <Lottie
                animationData={animationData}
                className="inset-0 size-full object-contain contrast-90"
                onPlay={showClickMap.setTrue}
                loop
              />
              <svg
                className={cn('absolute inset-0 size-full object-contain', {
                  'opacity-0': !showClickMap.value,
                })}
                viewBox="0 0 2307 1457"
              >
                <g transform="matrix(1,0,0,1,12,12)">
                  {points.map((p) => (
                    <Point
                      className="z-100"
                      key={p.label}
                      label={p.label}
                      x={p.x}
                      y={p.y}
                      isMain={p.isMain}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[image:url(/london-wide.jpg)] bg-fixed bg-cover absolute inset-0 -z-1 opacity-50"></div>
          <div className="text-center mb-16 z-1">
            <h2 className="font-serif text-4xl md:text-5xl font-bold golden-title mb-6 brightness-50">
              High Standards in Global Investments
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                RICHMIND Holding aims to stay at the top of the global market through executing inventive investment
                approaches and delivering long-term, sustainable growth. We methodically identify and allocate resources
                to industries that have significant expansion potential.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-card/80 p-6 rounded-lg border border-accent/20 glass">
                  <h3 className="font-semibold text-xl text-primary mb-3">Strategic Investments in Key Sectors</h3>
                  <p className="text-foreground">
                    Focused allocation of resources to high-growth industries with proven expansion potential.
                  </p>
                </div>
                <div className="bg-card/80 p-6 rounded-lg border border-accent/20 glass">
                  <h3 className="font-semibold text-xl text-primary mb-3">Sustainability and Innovation Engagement</h3>
                  <p className="text-foreground">
                    Commitment to sustainable practices while driving innovation across all our portfolio companies.
                  </p>
                </div>
              </div>
              <p className="text-lg text-foreground mt-8 leading-relaxed">
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold golden-title mb-6">
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

interface PointProps {
  label: string;
  x: number;
  y: number;
  isMain?: boolean;
  className?: string;
  onClick?: VoidFunction;
}

const Point = ({ x, y, className, label, onClick, isMain }: PointProps) => {
  return (
    <g onClick={onClick}>
      {isMain ? (
        <>
          <text x={x + 20} y={y - 30} className="font-display animate-pulse fill-white text-2xl">
            {label}
          </text>
          <line x1={x} x2={x + 15} y1={y} y2={y - 20} className="stroke-white" />
          <line
            x1={x + 15}
            x2={x + 15 + label.length * 20}
            y1={y - 20}
            y2={y - 20}
            className="stroke-white"
          />
        </>
      ) : null}
      <circle
        data-title={label}
        cx={x}
        cy={y}
        className={cn(
          'cursor-pointer opacity-0',
          className,
          isMain ? 'fill-gold-dark' : 'fill-blue-300/70 opacity-0',
        )}
        r={isMain ? 20 : 20}
      />
      <circle
        data-title={label}
        cx={x}
        cy={y}
        className={cn(
          'cursor-pointer opacity-0',
          className,
          isMain ? '' : 'fill-blue-300 opacity-0',
        )}
        stroke="#290cfc"
        fill="url(#blue-gradient)"
        r={isMain ? 10 : 6}
      />
    </g>
  );
};