export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
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
