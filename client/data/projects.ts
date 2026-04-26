export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: "Completed" | "Upcoming";
  link: string;
}

export interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: "Completed" | "Upcoming";
  link: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "East Godavari Pickles E-commerce",
    description:
      "A full-featured e-commerce platform for selling traditional pickles online with product listings, shopping cart, and payment integration",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "Completed",
    link: "https://ssgodavaripickels.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio showcasing projects and skills with smooth animations and modern design",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    link: "#",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Menstrual Cycle Tracker",
    description:
      "A comprehensive mobile-friendly application designed to help users track their menstrual cycle, predict upcoming periods, and log symptoms. Includes period predictions, symptom tracking, and health insights.",
    technologies: ["React", "JavaScript", "Local Storage"],
    status: "Completed",
    link: "#",
    icon: "📱",
  },
  {
    id: 2,
    title: "RMap Coordinator",
    description:
      "A goal achievement and roadmap planning tool that helps teams create clean, organized roadmaps to reach their objectives. Features milestone tracking, progress visualization, and collaborative planning capabilities.",
    technologies: ["React", "Google Maps API", "Firebase"],
    status: "Completed",
    link: "#",
    icon: "🗺️",
  },
];
