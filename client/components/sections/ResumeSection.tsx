import { Download } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 md:py-32 bg-gradient-to-r from-accent/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Resume</h2>
          <p className="text-foreground/75 mb-12 text-lg leading-relaxed">
            Download my resume to learn more about my experience, education, and technical skills. Get a comprehensive overview of my professional journey and expertise.
          </p>

          <a
            href="/resume.pdf.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-accent hover:bg-accent/85 text-accent-foreground font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 text-lg gap-3 group"
          >
            <Download size={24} className="group-hover:-translate-y-1 transition-transform" />
            <span>View & Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
