import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import sparkbudLogo from "@/assets/sparkbud-logo.png";

const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfoHSxSqCniAzzLhSTvnN3pSe46phWd79G84W-zrNEIQMdPMw/viewform?usp=header";

const navLinks = [
  { name: "About", path: "/" },
  { name: "Mentors", path: "/mentors" },
  { name: "Curriculum", path: "/curriculum" },
  { name: "Register", path: "/register" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={sparkbudLogo} 
              alt="SparkBud - Discover your passion for Computer Science" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-semibold transition-all duration-300 hover:text-primary relative py-2 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-orange text-primary-foreground px-6 py-2.5 rounded-full font-bold shadow-soft hover:shadow-glow-orange transition-all duration-300 hover:scale-105"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold transition-colors py-2 px-4 rounded-lg ${
                    location.pathname === link.path
                      ? "text-primary bg-accent"
                      : "text-foreground/70 hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-orange text-primary-foreground px-6 py-3 rounded-full font-bold text-center shadow-soft hover:shadow-glow-orange transition-all duration-300 mt-2"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
