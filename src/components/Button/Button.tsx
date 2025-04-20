import React from 'react';
import styles from "./Button.module.scss";

interface ButtonProps {
    href: string;
    text: string;
    icon: React.ReactNode;
    variant: "demo" | "repository";
}

const Button: React.FC<ButtonProps> = ({ href, text, icon, variant }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${variant === "repository" ? styles.repository : styles.demo}`}
    >
        <span className={styles.icon}>{icon}</span>
        {text}
    </a>
);

export default Button;
