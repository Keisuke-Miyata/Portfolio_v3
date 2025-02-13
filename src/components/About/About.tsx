import styles from "./About.module.scss"
import Link from 'next/link'

const About = () => {
    return (
        <section id="about" className={styles.section}>
            <h2>About Me</h2>
            <p>
                Hi, I'm Keisuke, a Computer Science Student.
                I'm currently a senior-year student at the <Link href="https://www.edu.unideb.hu/" className={styles.link}>University of Debrecen</Link>, pursuing a degree in Computer Science.
                Throughout my studies, I've gained exposure to a wide range of topics in computer science, including software development, algorithms, and system design.
            </p>
            <p>
                When I'm not immersed in academics, I enjoy coding, reading, and exploring different countries, which keeps my creativity flowing and my curiosity sharp.
            </p>
            <p>
                Looking ahead, I'm eager to pursue internships in software engineering. I'm excited to apply my academic knowledge in real-world projects
                and gain hands-on experience that will help me transition into a successful career in software development.
            </p>
        </section>

    )
}

export default About