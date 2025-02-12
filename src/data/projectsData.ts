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
        description: "A peer-to-peer real estate platform that simplifies accommodation and flatmate searches while integrating item exchange. Built with a modern tech stack.",
        link: "https://real-estate-virid-ten.vercel.app/",
        technologies: ["JavaScript", "Tailwind CSS", "REACT", "HTML", "Vercel", "Render"],
        image: "/static/images/realestate_ss.png",
    },
    {
        name: "E-commerce Platform",
        description: "A scalable e-commerce platform with React and Node.js.",
        link: "https://example.com/ecommerce",
        technologies: ["JavaScript", "TypeScript", "SCSS", "REACT", "HTML"],
        image: "/static/images/todo_list.png",
    },
];
