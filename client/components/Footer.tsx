import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-white/50 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">
              Sairam
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
              Aspiring Software Engineer • AI/ML Student • Full-Stack Developer passionate about building innovative solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-foreground text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-foreground/60 hover:text-accent transition-colors duration-200 font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-foreground/60 hover:text-accent transition-colors duration-200 font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-foreground/60 hover:text-accent transition-colors duration-200 font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/60 hover:text-accent transition-colors duration-200 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-6 text-foreground text-lg">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/sairam916"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sairamdbt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sairamvadlamuri64@gmail.com"
                className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-10">
          <p className="text-center text-sm text-foreground/50 font-medium">
            © {currentYear} Sairam Odalmoru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
