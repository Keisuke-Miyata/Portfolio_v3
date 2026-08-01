import styles from "./Skills.module.scss";
import { SkillData } from "../../data/skillsData";

export default function SkillCard({ name, iconClass }: SkillData) {
    return (
        <div className={styles.card} title={name}>
            <i className={iconClass}></i>
        </div>
    );
}
