import Link from "next/link"
// import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { MapPin, Globe, Phone } from "lucide-react"
import pckg from '@/package.json';
import Image from "next/image";

export function Footer() {
  const companies = [
    { name: "Investment", href: "/companies/investment" },
    { name: "Development", href: "/companies/development" },
    { name: "Media", href: "/companies/media" },
    { name: "Fintech", href: "/companies/fintech" },
    { name: "VIP Club", href: "/companies/vip-club" },
    { name: "Trading", href: "/companies/trading" },
    { name: "Sport", href: "/companies/sport" },
    { name: "Cosmetics & Beauty", href: "/companies/cosmetics-beauty" },
    { name: "Pharmaceutical & Medical", href: "/companies/pharmaceutical-medical" },
    { name: "Tourism & Holiday", href: "/companies/tourism-holiday" },
    { name: "Project Management", href: "/companies/project-management" },
    { name: "Properties & Real Estate", href: "/companies/properties-real-estate" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              width={200}
              height={200}
              src="/img/RichMindlogo-white-half.png"
              alt="Richmin Holding"
              className="w-55 object-center object-contain h-auto"
            />
            <h3 className="font-serif text-2xl font-bold mb-4">RICHMIND Holding</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Global reach, local expertise. Our mission is to use operational expertise and strategic investments to
              promote innovation, sustainability, and brilliance.
            </p>

            {/* <div className="flex space-x-4">
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
            </div> */}
          </div>

          <div className="md:justify-self-center-safe text-nowrap w-min  md:col-span-3">
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
            </ul>
            <h4 className="font-semibold mb-4 mt-6">Contact</h4>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="flex items-center gap-1 text-xs">
                <MapPin name="map-pin" className="size-4" />
                <span className="truncate">
                  207 Regent Street.London W1B 3HH, United Kingdom (Main)
                </span>
              </li>
              <li className="flex items-center gap-1 text-xs">
                <MapPin name="map-pin" className="size-4" />
                <span className="truncate">
                  Office 301, 3rd Floor Vision Tower, Business Bay Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-1 text-xs">
                <Globe name="map-pin" className="size-4" />
                <span className="truncate">Info@RichMindHolding.com</span>
              </li>
              <li className="flex items-center gap-1 text-xs">
                <Phone name="map-pin" className="size-4" />
                <span>+44 20 76 92 56 76</span>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-start text-nowrap w-min">
            <h4 className="font-semibold mb-4">Our Companies</h4>
            <ul className="space-y-2">
              {companies.slice(0, 7).map((company) => (
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

          <div className="md:justify-self-end text-nowrap w-min">
            <h4 className="font-semibold mb-4">&nbsp;</h4>
            <ul className="space-y-2">
              {companies.slice(7).map((company) => (
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

        <Image
          width={200}
          height={200}
          src="/img/banner-photo-font-01.png"
          alt="Richmin Holding"
          className="w-full object-center object-contain h-auto  mt-8 opacity-40"
        />
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/60">
            © 2024 RICHMIND Holding. All rights reserved.
            <span title={new Date(pckg['version.stamp']).toLocaleString()}> v{pckg.version}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
