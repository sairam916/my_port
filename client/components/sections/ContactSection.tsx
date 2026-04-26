import { useState } from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in-up">Get In Touch</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="p-6 bg-white border border-border/30 rounded-2xl hover:border-accent/50 hover:shadow-md hover:shadow-accent/10 transition-all duration-300 group">
                <h3 className="text-lg font-bold mb-3 text-accent flex items-center gap-2">
                  <Mail size={20} />
                  Email
                </h3>
                <a
                  href="mailto:sairamvadlamuri64@gmail.com"
                  className="text-foreground/75 hover:text-accent transition-colors text-lg break-all"
                >
                  sairamvadlamuri64@gmail.com
                </a>
              </div>

              <div className="p-6 bg-white border border-border/30 rounded-2xl hover:border-accent/50 hover:shadow-md hover:shadow-accent/10 transition-all duration-300 group">
                <h3 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
                  <Globe size={20} />
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/sairam916"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/75 hover:text-accent transition-all duration-200 group/link hover:translate-x-2"
                  >
                    <Github size={20} className="text-accent" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sairamdbt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/75 hover:text-accent transition-all duration-200 group/link hover:translate-x-2"
                  >
                    <Linkedin size={20} className="text-accent" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border/50 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 placeholder-foreground/40"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border/50 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 placeholder-foreground/40"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-border/50 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none placeholder-foreground/40"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent hover:bg-accent/85 text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 text-lg"
              >
                Send Message
              </button>

              {isSubmitted && (
                <div className="p-4 bg-teal-50 border border-teal-200 text-teal-700 rounded-xl text-sm text-center animate-fade-in font-medium">
                  ✓ Message received! Thank you for reaching out. I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
