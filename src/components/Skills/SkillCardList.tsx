"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, SkillCategory } from "../../data/skillsData";
import SkillCard from "./SkillCard";
import styles from "./Skills.module.scss";

const filters: { label: string; value: SkillCategory | "all" }[] = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Tools", value: "tools" },
];

export default function SkillCardList() {
    const [activeFilter, setActiveFilter] = useState<SkillCategory | "all">("all");

    const filteredSkills = skills.filter(
        (skill) => activeFilter === "all" || skill.category === activeFilter
    );

    return (
        <div>
            <div className={styles.filters}>
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        type="button"
                        className={`${styles.filterButton} ${activeFilter === filter.value ? styles.filterActive : ""}`}
                        onClick={() => setActiveFilter(filter.value)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <motion.div layout className={styles.grid}>
                <AnimatePresence>
                    {filteredSkills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <SkillCard {...skill} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
