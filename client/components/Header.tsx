import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/40 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
        >
          SA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground/70 font-medium hover:text-accent transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="relative text-foreground/70 font-medium hover:text-accent transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-accent transition-colors duration-200 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/98 backdrop-blur-sm animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/70 hover:text-accent transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-accent/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground/70 hover:text-accent transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-accent/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
