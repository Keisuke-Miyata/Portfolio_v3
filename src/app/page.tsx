"use client";

import styles from "./page.module.scss";
import ExperienceList from "../components/ExperienceList";
import ProjectsList from "../components/ProjectsList";
import About from "../components/About";
import { useEffect, useRef, useState } from "react";
import LeftContainer from "@/components/LeftContainer";

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
          <p>Loosely designed in Figma and thrown together in VS Code. Built with Next.js, styled with Sass, and deployed on Vercel. Text is set in Inter, because why not</p>
        </div>
      </main>
    </div>

  );
}

