import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import Technologies from "../Technologies/Technologies";
import Link from "next/link";
import Arrow from "../Arrow/Arrow"
import { ProjectData } from "../../data/projectsData";

export default function Project({ name, description, link, technologies, image }: ProjectData) {
    return (
        <div className={styles.card}>
            <Link href={link} rel="noopener noreferrer" target="_blank">
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={image}
                            width={150}
                            height={80}
                            alt={name}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>
                <div className={styles.right}>
                    <h3>
                        {name} <Arrow />
                    </h3>
                    <p>{description}</p>
                    <Technologies technologies={technologies} />
                </div>
                </div>
            </Link>
        </div>
    );
}
