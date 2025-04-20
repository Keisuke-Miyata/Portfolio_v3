import styles from "./Skills.module.scss";
import { SkillData } from "../../data/skillsData";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function SkillCard({ technology, logo, proficiency }: SkillData) {

    const progressRef = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    // Reset after animation for repeatable trigger
                    setTimeout(() => setInView(false), 6000);
                }
            },
            { threshold: 0.5 }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, []);


    return (
        <div className={styles.card}>
            <div className={styles.card__icon}>
                <Image
                    src={logo}
                    width={40}
                    height={40}
                    alt={technology}
                />
            </div>
            <h3 className={styles.card__title}>{technology}</h3>
            <div className={styles.card__progressContainer}>
                <div ref={progressRef} className={`${styles.card__progress}, ${inView ? styles.card__progressMoved : ""}`}>
                    <div className={styles.card__progressBar} style={{width: `${proficiency}%`}}></div>
                </div>
            </div>
        </div>
    )
}
