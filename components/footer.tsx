import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
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
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">RICHMIND Holding</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Global reach, local expertise. Our mission is to use operational expertise and strategic investments to
              promote innovation, sustainability, and brilliance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Companies</h4>
            <ul className="space-y-2">
              {companies.slice(0, 6).map((company) => (
                <li key={company.href}>
                  <Link
                    href={company.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2024 RICHMIND Holding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
