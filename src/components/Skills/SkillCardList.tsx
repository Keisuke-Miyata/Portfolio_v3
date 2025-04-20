import { skills } from "../../data/skillsData";
import SkillCard from "./SkillCard";
import styles from "./Skills.module.scss";

export default function SkillCardList(){
    return (
        <div className={styles.grid}>
            {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
            ))}
        </div>
    )
}