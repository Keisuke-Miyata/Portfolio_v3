export interface SkillData {
    technology: string;
    logo: string;
    proficiency: number;
}

export const skills : SkillData[] = [
    {
        technology: "JavaScript",
        logo: "/static/logos/Javascript_Logo.png",
        proficiency: 70,
    },
    {
        technology: "TypeScript",
        logo: "/static/logos/Typescript_logo.png",
        proficiency: 70
    },
    {
        technology: "Python",
        logo: "/static/logos/Python_logo.png",
        proficiency: 70
    },
    {
        technology: "React",
        logo: "/static/logos/React_logo.svg",
        proficiency: 70
    }

]