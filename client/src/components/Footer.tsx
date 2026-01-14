import { Link } from "wouter";
import { Music, Instagram, Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-background text-foreground p-2 rounded-none">
                <Music className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl uppercase tracking-wider">
                Baseline<span className="font-light">Academy</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Professional bass guitar tuition for the modern musician. Mastering the low end since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-lg mb-6 text-white">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Instructor", href: "/about" },
                { label: "Tuition Services", href: "/services" },
                { label: "Curriculum", href: "/lessons" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-lg mb-6 text-white">Enquiries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>London, United Kingdom</li>
              <li>info@baselineacademy.com</li>
              <li>+44 (0) 20 1234 5678</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-lg mb-6 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-white hover:text-black transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white hover:text-black transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white hover:text-black transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Baseline Academy. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
