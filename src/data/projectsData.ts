export interface ProjectData {
    name: string;
    description: string;
    link: string;
    technologies: string[];
    image: string;
}

export const projects: ProjectData[] = [
    {
        name: "Portfolio Website",
        description: "A personal portfolio showcasing my skills and projects.",
        link: "https://stackoverflow.com/",
        technologies: ["JavaScript", "TypeScript", "SCSS", "REACT", "HTML"],
        image: "/static/images/todo_list.png",
    },
    {
        name: "E-commerce Platform",
        description: "A scalable e-commerce platform with React and Node.js.",
        link: "https://example.com/ecommerce",
        technologies: ["JavaScript", "TypeScript", "SCSS", "REACT", "HTML"],
        image: "/static/images/todo_list.png",
    },
];
