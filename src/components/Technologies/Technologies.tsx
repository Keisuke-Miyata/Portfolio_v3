import styles from './Technologies.module.scss';

interface TechnologiesProps {
    technologies?: string[];
}

export default function Technologies({ technologies = [] }: TechnologiesProps) {
    return (
        <div className={styles.technologies}>
            {technologies.map((tech, index) => (
                <button key={index} disabled className={styles.techButton}>
                    {tech}
                </button>
            ))}
        </div>
    );
}

