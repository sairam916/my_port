import { ExternalLink, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-teal-400 bg-clip-text text-transparent leading-tight">
                Sairam Odalmoru
              </h1>
              <p className="text-xl md:text-2xl text-accent font-semibold leading-relaxed">
                Aspiring Software Engineer • Web Developer • AI/ML Enthusiast
              </p>
            </div>

            <p className="text-foreground/75 text-lg md:text-xl leading-relaxed max-w-xl">
              I'm passionate about technology and building real-world projects that make a difference. Currently pursuing B.Tech in AI/ML, I'm dedicated to mastering software engineering and creating innovative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/85 text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 text-lg"
              >
                View Projects
                <ExternalLink className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent hover:bg-accent/5 font-semibold rounded-xl transition-all duration-300 hover:border-accent/70 hover:shadow-lg hover:shadow-accent/20 text-lg"
              >
                Contact Me
                <Mail className="ml-2" size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl border-2 border-accent/40 overflow-hidden group shadow-2xl hover:shadow-accent/20 transition-all duration-500">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9c149273ccd34a448610ea3671717cea%2F9c624710524d442a8e57fcaf7d9ffb6b?width=800&height=1200"
                alt="Sairam Odalmoru"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
