import styles from "./Skills.module.scss";

export default function SkillCard(){
    return (
        <div className={styles.card}>
            <div className={styles.card__icon}>
                <p>Icon</p>
            </div>
            <h3 className={styles.card__title}>JavaScript</h3>
            <div className={styles.card__progressBar}>
                <div className={styles.card__progress}></div>
            </div>
        </div>
    )
}