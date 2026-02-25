import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // No longer need an effect to close on navigation, 
  // we can handle it in the nav link clicks or just let the page transition handle it.
  // Most mobile navs close when a Link is clicked.
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 shadow-md backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <div className="container-main flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-primary">
          CRESTVIEW<span className="text-gradient-gold">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent ${location.pathname === link.path
                ? "text-accent"
                : "text-foreground/80"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="bg-accent font-body text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-gold-dark">
              <Phone className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="border-t border-border bg-background px-4 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`font-body text-sm font-medium uppercase tracking-widest transition-colors ${location.pathname === link.path
                  ? "text-accent"
                  : "text-foreground/80"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={closeMenu}>
              <Button className="mt-2 w-full bg-accent font-body text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-gold-dark">
                Get in Touch
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
