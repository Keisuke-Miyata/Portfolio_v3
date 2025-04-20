"use client";

import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import styles from "./LeftContainer.module.scss";
import { useEffect, useState } from "react";

export default function LeftContainer() {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 1.0 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <div className={styles.leftContainer}>
            <div className={styles.header}>
                <h1>Keisuke Miyata</h1>
                <div className={styles.themeToggle}>
                    {theme === "dark" ? (
                        <MdOutlineWbSunny
                            size={24}
                            onClick={() => setTheme("light")}
                            style={{ cursor: "pointer" }}
                            title="Switch to Light Mode"
                        />
                    ) : (
                        <FaMoon
                            size={24}
                            onClick={() => setTheme("dark")}
                            style={{ cursor: "pointer" }}
                            title="Switch to Dark Mode"
                        />
                    )}
                </div>
            </div>

            <h2>Software Engineer</h2>
            <p>I design and develop digital experiences that are as functional as they are beautiful.</p>

            <nav className={styles.nav}>
                {["about", "experience", "projects", "skills"].map((id) => (
                    <a key={id} href={`#${id}`} className={activeSection === id ? styles.active : ""}>
                        <hr />
                        {id.toUpperCase()}
                    </a>
                ))}
            </nav>

            <div className={styles.socialLinks}>
                <a href="https://github.com/Keisuke-Miyata" rel="noopener noreferrer" target='_blank'>
                    <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/keisuke-miyata/" rel="noopener noreferrer" target='_blank'>
                    <i className="fa-brands fa-linkedin fa-lg"></i>
                </a>
            </div>
        </div>
    );
}
