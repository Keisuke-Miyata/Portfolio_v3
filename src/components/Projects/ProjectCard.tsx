import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import Technologies from "../Technologies/Technologies";
import Link from "next/link";
import Arrow from "../Arrow/Arrow"
import { ProjectData } from "../../data/projectsData";
import Button from "../Button/Button";

import { CiVideoOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";



export default function Project({ name, description, websiteUrl, githubUrl, technologies, image }: ProjectData) {
    return (
        <div className={styles.card}>
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
                    <div className={styles.buttons}>
                        <Button href={websiteUrl} text="demo" icon={<CiVideoOn />} variant="demo"/>
                        <Button href={githubUrl} text="code" icon={<FaGithub />} variant="repository"/>
                    </div>

            </div>
            <div className={styles.right}>
                <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                    {name} <Arrow />
                </Link>
                <p>{description}</p>
                <Technologies technologies={technologies} />
            </div>
            </div>
        </div>
    );
}
