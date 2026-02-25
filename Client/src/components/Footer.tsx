import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight">
              CRESTVIEW<span className="text-accent">.</span>
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-primary-foreground/70">
              Crafting landmark developments that redefine urban living. With over 15 years of
              expertise, we deliver spaces where quality meets vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Quick Links</h4>
            <div className="gold-divider !mx-0 mb-6" />
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Our Services</h4>
            <div className="gold-divider !mx-0 mb-6" />
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              <li>Residential Development</li>
              <li>Commercial Construction</li>
              <li>Interior Design</li>
              <li>Property Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Contact Us</h4>
            <div className="gold-divider !mx-0 mb-6" />
            <ul className="space-y-4 font-body text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>42 Meridian Boulevard,<br />Downtown Business District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>+1 (555) 890-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>info@crestviewdev.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Crestview Developers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
