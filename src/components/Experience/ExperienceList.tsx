// components/ExperienceList.tsx
import Experience from "./ExperienceCard";
import { experienceData } from "../../data/experienceData";

export default function ExperienceList() {
    return (
        <div>
            {experienceData.map((exp, index) => (
                <Experience key={index} {...exp} />
            ))}
        </div>
    );
}
