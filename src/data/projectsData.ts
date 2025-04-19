export interface ProjectData {
    name: string;
    description: string;
    link: string;
    technologies: string[];
    image: string;
}

export const projects: ProjectData[] = [
    {
        name: "Real Estate Project",
        description: "A peer-to-peer real estate platform that simplifies accommodation and flatmate searches while integrating item exchange. Built with a modern tech stack.",
        link: "https://real-estate-virid-ten.vercel.app/",
        technologies: ["JavaScript", "Tailwind CSS", "REACT", "HTML", "Vercel", "Render"],
        image: "/static/images/realestate_ss.png",
    },
    {
        name: "Personal Portfolio V3",
        description: "This features a responsive design and a theme toggle, built with Next.js and Sass.",
        link: "https://portfoliov3-orpin.vercel.app/",
        technologies: ["TypeScript", "JavaScript", "SCSS", "REACT", "Vercel", "HTML"],
        image: "/static/images/portfolio_v3.png",
    },
    {
        name: "Flower Image Classification",
        description: "",
        link: "https://huggingface.co/spaces/Keitarou1003/Flower102_classification",
        technologies: ["Python", "Hugging Face", "Pytorch"],
        image: "",
    },
];
