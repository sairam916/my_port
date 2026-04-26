import { ExternalLink } from "lucide-react";
import { projects, featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in-up">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.status === "Completed" ? project.link : "#"}
                target={project.status === "Completed" && project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.status === "Completed" && project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-white border border-border/40 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 group flex flex-col cursor-pointer no-underline transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header with Visual Preview */}
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center relative overflow-hidden group">
                  {project.id === 1 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">🥒</div>
                        <p className="text-sm text-orange-700 font-semibold">E-Commerce Store</p>
                      </div>
                    </div>
                  )}
                  {project.id === 2 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">💼</div>
                        <p className="text-sm text-teal-700 font-semibold">Portfolio Website</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-accent transition-opacity duration-300" />
                  <div className="text-center z-10 absolute">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === "Upcoming"
                          ? "bg-accent/20 text-accent border border-accent/30"
                          : "bg-teal-500/20 text-teal-600 border border-teal-300/50"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 flex-1 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/30 hover:border-accent/60 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link Indicator */}
                  {project.status === "Completed" && (
                    <div className="inline-flex items-center gap-2 text-accent font-semibold mt-auto group/link hover:gap-3 transition-all duration-200">
                      View Project
                      <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in-up">Innovative Solutions</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                className="bg-white border-2 border-accent/20 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 group flex flex-col cursor-pointer no-underline transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="h-40 bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center relative overflow-hidden">
                  {project.id === 1 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50" />
                  )}
                  {project.id === 2 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100" />
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-accent transition-opacity duration-300" />
                  <div className="text-center z-10 relative">
                    <span className="text-7xl mb-2 block group-hover:scale-125 transition-transform duration-300">{project.icon}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 flex-1 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/30 hover:border-accent/60 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link Indicator */}
                  <div className="inline-flex items-center gap-2 text-accent font-semibold mt-auto group/link hover:gap-3 transition-all duration-200">
                    View Project
                    <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
