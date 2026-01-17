export interface ProjectData {
    readonly name: string;
    readonly description: string;
    readonly websiteUrl: string;
    readonly githubUrl: string;
    readonly technologies: string[];
    readonly image: string;
}

export const projects: ProjectData[] = [
    {
        name: "Real Estate Project",
        description: "A peer-to-peer real estate platform that simplifies accommodation and flatmate searches while integrating item exchange. Built with a modern tech stack.",
        websiteUrl: "https://real-estate-virid-ten.vercel.app/",
        githubUrl:"https://github.com/Keisuke-Miyata/RealEstate",
        technologies: ["JavaScript", "Tailwind CSS", "REACT", "HTML", "Vercel", "Render"],
        image: "/static/images/realestate_ss.png",
    },
    {
        name: "Personal Portfolio V3",
        description: "This features a responsive design and a theme toggle, built with Next.js and Sass.",
        websiteUrl: "https://portfoliov3-orpin.vercel.app/",
        githubUrl: "https://github.com/Keisuke-Miyata/Portfolio_v3",
        technologies: ["TypeScript", "JavaScript", "SCSS", "REACT", "Vercel", "HTML"],
        image: "/static/images/portfolio_v3.png",
    },
    {
        name: "Flower Image Classification",
        description: "This Flower102 image classification project involves using machine learning techniques to classify images of 102 different flower species.  By training a model on a diverse dataset of flower images, the goal is to accurately predict the species of a given flower based on its visual features, demonstrating the application of deep learning in image classification.",
        websiteUrl: "https://huggingface.co/spaces/Keitarou1003/Flower102_classification",
        githubUrl:"https://github.com/Keisuke-Miyata/Flower102_Classification",
        technologies: ["Python", "Hugging Face", "Pytorch"],
        image: "/static/images/flower102_classification_full.png",
    },
    {
        name: "Bootstrap-Portfolio",
        description: "This portfolio website was created during my internship program at Lime Light TechLead. It is based on a Bootstrap template, customized by following the provided instructions while adding small unique design and functionality enhancements using HTML, CSS, JavaScript, and jQuery.",
        websiteUrl: "https://keisuke-miyata.github.io/Bootstrap-Portfolio/",
        githubUrl:"https://github.com/Keisuke-Miyata/Bootstrap-Portfolio",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
        image: "/static/images/bootstrap_portfolio.png",
    },
    {
        name: "Parallax-Effect-Scrolling",
        description: "This website was created during my internship at Lime Light TechLead by following provided instructions to implement a parallax scrolling effect. The project focuses on using HTML, CSS, and JavaScript to create smooth scrolling interactions and visual depth.",
        websiteUrl: "https://keisuke-miyata.github.io/Parallax-Effect-Scrolling/",
        githubUrl:"https://github.com/Keisuke-Miyata/Parallax-Effect-Scrolling",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "/static/images/parallax_effect.png",
    },
];
