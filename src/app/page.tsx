"use client";

import styles from "./page.module.scss";
import ExperienceList from "../components/Experience/ExperienceList";
import ProjectsList from "../components/Projects/ProjectsList";
import About from "../components/About/About";
import { useEffect, useRef, useState } from "react";
import LeftContainer from "@/components/LeftContainer/LeftContainer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { x, y } = container.getBoundingClientRect();

      const newX = e.clientX - x;
      const newY = e.clientY - y;


      container.style.setProperty("--x", `${e.clientX - x}px`);
      container.style.setProperty("--y", `${e.clientY - y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <div ref={containerRef} className={styles.container}>

      {/* Left Side Navigation */}
      <LeftContainer />

      {/* Right Side Content */}
      <main className={styles.right}>
        <About />
        <section id="experience" className={styles.section}>
          <h2>Experience</h2>
          <ExperienceList />
          <a href="./Europass_cv.pdf" rel="noopener noreferrer" target='_blank'>View Full EU Resume</a>
        </section>

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <ProjectsList />
        </section>

        <div className={styles.comments}>
          <p>Loosely designed in <a href="https://www.figma.com/" rel="noopener noreferrer" target="_blank">Figma</a>
            and thrown together in <a href="https://code.visualstudio.com/" rel="noopener noreferrer" target="_blank">VS Code</a>.
            Built with <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">Next.js</a>, styled with <a href="https://sass-lang.com/" rel="noopener noreferrer" target="_blank">Sass</a>, and deployed on Vercel. Text is set in <a href="https://fonts.google.com/specimen/Inter" rel="noopener noreferrer" target="_blank">Inter</a>, because why not</p>
        </div>
      </main>
    </div>

  );
}

