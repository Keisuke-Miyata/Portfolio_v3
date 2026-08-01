"use client";

import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import styles from "./LeftContainer.module.scss";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Typed from "typed.js";

export default function LeftContainer() {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const typedElRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!typedElRef.current) return;

        const typed = new Typed(typedElRef.current, {
            strings: ["Software Engineer"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        });

        return () => typed.destroy();
    }, []);

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
                <button
                    type="button"
                    className={styles.themeToggle}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label={mounted ? (theme === "dark" ? "Switch to light mode" : "Switch to dark mode") : undefined}
                >
                    {mounted && (
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={theme}
                                className={styles.iconWrapper}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                {theme === "dark" ? (
                                    <MdOutlineWbSunny size={20} />
                                ) : (
                                    <MdOutlineDarkMode size={20} />
                                )}
                            </motion.span>
                        </AnimatePresence>
                    )}
                </button>
            </div>

            <h2>I&apos;m a <span ref={typedElRef} className={styles.typed}></span></h2>
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
