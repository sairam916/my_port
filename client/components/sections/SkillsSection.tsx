import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in-up">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="group relative p-8 bg-gradient-to-br from-white to-accent/5 border border-border/40 rounded-2xl hover:border-accent/60 transition-all duration-500 hover:shadow-lg hover:shadow-accent/15 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-accent group-hover:text-accent/90 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, itemIndex) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-foreground/70 group-hover:text-foreground transition-all duration-200"
                      style={{ animationDelay: `${itemIndex * 0.05}s` }}
                    >
                      <span className="w-2 h-2 bg-accent/60 group-hover:bg-accent rounded-full transition-colors" />
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Border animation on hover */}
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
