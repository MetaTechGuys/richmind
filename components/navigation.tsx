"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const companies = [
    { name: "Investment", href: "/companies/investment" },
    { name: "Development", href: "/companies/development" },
    { name: "Media", href: "/companies/media" },
    { name: "Fintech", href: "/companies/fintech" },
    { name: "Project Management", href: "/companies/project-management" },
    { name: "Trading", href: "/companies/trading" },
    { name: "Pharmaceutical & Medical", href: "/companies/pharmaceutical-medical" },
    { name: "Cosmetics & Beauty", href: "/companies/cosmetics-beauty" },
    { name: "Tourism & Holiday", href: "/companies/tourism-holiday" },
    { name: "VIP Club", href: "/companies/vip-club" },
    { name: "Sport", href: "/companies/sport" },
    { name: "Properties & Real Estate", href: "/companies/properties-real-estate" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-serif text-2xl font-bold text-primary">
            RICHMIND
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-accent transition-colors">Companies</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-accent/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {companies.map((company) => (
                    <Link
                      key={company.href}
                      href={company.href}
                      className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {company.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-accent/20">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Companies</div>
                <div className="space-y-1 pl-4">
                  {companies.map((company) => (
                    <Link
                      key={company.href}
                      href={company.href}
                      className="block py-1 text-sm text-foreground hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {company.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
