import { Mail, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-transparent relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in-up">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
              I am a B.Tech student specializing in Artificial Intelligence and Machine Learning. With a passion for technology and innovation, I'm committed to becoming a skilled software engineer who can create meaningful solutions to real-world problems.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
              I possess strong communication skills, excellent time management abilities, and thrive in collaborative environments. My goal is to continuously learn and grow as a developer, mastering both backend and frontend technologies while staying current with industry trends.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 bg-white border border-border/30 rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-md hover:shadow-accent/10 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl text-accent font-bold">📚</span>
                  <h3 className="font-bold text-lg">Education</h3>
                </div>
                <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                  B.Tech in AI/ML with focus on practical applications and real-world problem solving
                </p>
              </div>

              <div className="p-6 bg-white border border-border/30 rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-md hover:shadow-accent/10 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl text-accent font-bold">💻</span>
                  <h3 className="font-bold text-lg">Development</h3>
                </div>
                <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                  Full-stack developer learning web technologies, software architecture, and best practices
                </p>
              </div>

              <div className="p-6 bg-white border border-border/30 rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-md hover:shadow-accent/10 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl text-accent font-bold">🎯</span>
                  <h3 className="font-bold text-lg">Problem Solving</h3>
                </div>
                <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                  Passionate about tackling challenges and building innovative solutions that create impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
