import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ExternalLink, Github, Linkedin, Mail, Download, Code2, Cpu, Globe, X } from "lucide-react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const projects = [
    {
      id: 1,
      title: "East Godavari Pickles E-commerce",
      description: "A full-featured e-commerce platform for selling traditional pickles online with product listings, shopping cart, and payment integration",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Completed",
      link: "https://ssgodavaripickels.netlify.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing projects and skills with smooth animations and modern design",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      status: "Completed",
      link: "#",
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Menstrual Cycle Tracker",
      description: "A comprehensive mobile-friendly application designed to help users track their menstrual cycle, predict upcoming periods, and log symptoms. Includes period predictions, symptom tracking, and health insights.",
      technologies: ["React", "JavaScript", "Local Storage"],
      status: "Completed",
      link: "#",
      icon: "📱",
    },
    {
      id: 2,
      title: "RMap Coordinator",
      description: "A goal achievement and roadmap planning tool that helps teams create clean, organized roadmaps to reach their objectives. Features milestone tracking, progress visualization, and collaborative planning capabilities.",
      technologies: ["React", "Google Maps API", "Firebase"],
      status: "Completed",
      link: "#",
      icon: "🗺️",
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["Java"],
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Docker Basics"],
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Time Management", "Teamwork"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-accent to-teal-400 bg-clip-text text-transparent">
                  Sairam Odalmoru
                </h1>
                <p className="text-lg md:text-2xl text-accent font-semibold">
                  Aspiring Software Engineer | Web Developer | AI/ML Student
                </p>
              </div>

              <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-lg">
                I'm passionate about technology and building real-world projects that make a difference. Currently pursuing B.Tech in AI/ML, I'm dedicated to mastering software engineering and creating innovative solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  View Projects
                  <ExternalLink className="ml-2" size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Contact Me
                  <Mail className="ml-2" size={18} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-slide-in">
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl border-2 border-accent/30 overflow-hidden group shadow-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9c149273ccd34a448610ea3671717cea%2F9c624710524d442a8e57fcaf7d9ffb6b?format=webp&width=800&height=1200"
                  alt="Sairam Odalmoru"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">About Me</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg leading-relaxed">
                I am a B.Tech student specializing in Artificial Intelligence and Machine Learning. With a passion for technology and innovation, I'm committed to becoming a skilled software engineer who can create meaningful solutions to real-world problems.
              </p>

              <p className="text-lg leading-relaxed">
                I possess strong communication skills, excellent time management abilities, and thrive in collaborative environments. My goal is to continuously learn and grow as a developer, mastering both backend and frontend technologies while staying current with industry trends.
              </p>

              <div className="pt-4 space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">→</span>
                  <span>
                    <strong>B.Tech in AI/ML</strong> - Currently pursuing my degree with focus on practical applications
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">→</span>
                  <span>
                    <strong>Full-Stack Developer</strong> - Learning web technologies and software architecture
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">→</span>
                  <span>
                    <strong>Problem Solver</strong> - Passionate about tackling challenges and building innovative solutions
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-6 bg-white border border-border/30 rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/15 group"
              >
                <h3 className="text-lg font-bold mb-4 text-accent group-hover:text-accent/80 transition-colors">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-foreground/80 group-hover:text-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-border/30 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/15 group flex flex-col"
              >
                {/* Project Header */}
                <div className="h-40 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-accent transition-opacity duration-300" />
                  <div className="text-center z-10">
                    {project.status === "Upcoming" ? (
                      <Code2 size={48} className="text-accent/60 mx-auto mb-2" />
                    ) : (
                      <Globe size={48} className="text-accent/60 mx-auto mb-2" />
                    )}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "Upcoming"
                          ? "bg-accent/20 text-accent"
                          : "bg-teal-500/20 text-teal-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 flex-1">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  {project.status === "Completed" && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors mt-auto"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border-2 border-accent/20 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/15 group flex flex-col"
              >
                {/* Project Header */}
                <div className="h-32 bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-accent transition-opacity duration-300" />
                  <div className="text-center z-10">
                    <span className="text-6xl mb-2 block">{project.icon}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 flex-1">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors mt-auto"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Resume</h2>
            <p className="text-foreground/80 mb-8 text-lg">
              Download my resume to learn more about my experience, education, and technical skills.
            </p>

            <a
              href="/resume.pdf"
              download="Sairam_Odalmoru_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-all duration-200 hover:scale-105 text-lg gap-2"
            >
              <Download size={24} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-accent">Email</h3>
                  <a
                    href="mailto:sairamvadlamuri64@gmail.com"
                    className="text-foreground/80 hover:text-accent transition-colors"
                  >
                    sairamvadlamuri64@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-accent">Social Links</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
                    >
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 bg-white border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 bg-white border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-white border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="p-3 bg-teal-500/20 border border-teal-500/50 text-teal-400 rounded-lg text-sm text-center animate-fade-in">
                    Message received! Thank you for reaching out.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
