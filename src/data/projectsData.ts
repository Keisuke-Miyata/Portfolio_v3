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
];
