export type SkillCategory = "frontend" | "backend" | "tools";

export interface SkillData {
    readonly name: string;
    readonly iconClass: string;
    readonly category: SkillCategory;
}

export const skills: SkillData[] = [
    // Frontend
    { name: "HTML", iconClass: "devicon-html5-plain colored", category: "frontend" },
    { name: "CSS", iconClass: "devicon-css3-plain colored", category: "frontend" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored", category: "frontend" },
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored", category: "frontend" },
    { name: "React", iconClass: "devicon-react-original colored", category: "frontend" },
    { name: "Next.js", iconClass: "devicon-nextjs-plain colored", category: "frontend" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored", category: "frontend" },
    { name: "Sass/SCSS", iconClass: "devicon-sass-original colored", category: "frontend" },
    { name: "Bootstrap", iconClass: "devicon-bootstrap-plain colored", category: "frontend" },
    { name: "jQuery", iconClass: "devicon-jquery-plain colored", category: "frontend" },

    // Backend
    { name: "Python", iconClass: "devicon-python-plain colored", category: "backend" },
    { name: "Java", iconClass: "devicon-java-plain colored", category: "backend" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored", category: "backend" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", category: "backend" },
    { name: "MySQL", iconClass: "devicon-mysql-original colored", category: "backend" },

    // Tools & Cloud
    { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored", category: "tools" },
    { name: "Vercel", iconClass: "devicon-vercel-original colored", category: "tools" },
    { name: "PyTorch", iconClass: "devicon-pytorch-original colored", category: "tools" },
    { name: "VS Code", iconClass: "devicon-vscode-plain colored", category: "tools" },
];
