"use client";

import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import styles from "./Loader.module.scss";

interface LoaderProps {
    onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const sequence = async () => {
            await animate(
                "#loaderHex",
                { pathLength: 1 },
                { duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 }
            );
            await animate(
                "#loaderLetter",
                { opacity: 1 },
                { duration: 0.4, ease: "easeInOut" }
            );
            await animate(
                "#loaderLogo",
                { opacity: 0, scale: 0.1 },
                { duration: 0.3, ease: "easeInOut", delay: 0.5 }
            );
            await animate(
                scope.current,
                { opacity: 0 },
                { duration: 0.2, ease: "easeInOut" }
            );
            document.body.style.overflow = "";
            onFinish();
        };

        sequence();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div ref={scope} className={styles.loader}>
            <motion.div id="loaderLogo" className={styles.logoWrapper}>
                <svg viewBox="0 0 100 100" width="100" height="100">
                    <motion.path
                        id="loaderHex"
                        d="M 50,5 L 11,27 L 11,72 L 50,95 L 89,73 L 89,28 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                    />
                    <motion.text
                        id="loaderLetter"
                        x="50"
                        y="66"
                        textAnchor="middle"
                        fontSize="42"
                        fontWeight="700"
                        fill="currentColor"
                        initial={{ opacity: 0 }}
                    >
                        K
                    </motion.text>
                </svg>
            </motion.div>
        </div>
    );
}
