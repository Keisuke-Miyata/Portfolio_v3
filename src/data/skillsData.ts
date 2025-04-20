export interface SkillData {
    readonly technology: string;
    readonly logo: string;
    readonly proficiency: number;
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
        proficiency: 50
    },
    {
        technology: "Python",
        logo: "/static/logos/Python-logo.png",
        proficiency: 80
    },
    {
        technology: "React",
        logo: "/static/logos/React_logo.svg",
        proficiency: 70
    },
    {
        technology: "Java",
        logo: "/static/logos/java.png",
        proficiency: 40
    }

]