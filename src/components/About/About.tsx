import styles from "./About.module.scss"
import Link from 'next/link'

const About = () => {
    return (
        <section id="about" className={styles.section}>
            <h2>About Me</h2>
            <p>
                Hi, I&apos;m Keisuke, a recent graduate holding a Bachelor&apos;s degree in Computer Science from <Link href = "https://www.edu.unideb.hu/" className = { styles.link } >The University of Debrecen</Link>.
                Throughout my studies, I gained exposure to a wide range of computer science topics, including software development,
                algorithms, and system design.
            </p>
            <p>
                Outside of academics, I enjoy coding, reading, and exploring new activities such as hiking, which helps keep my creativity
                flowing and my curiosity sharp.
            </p>
            <p>
                Looking ahead, I am eager to begin my career as a software engineer. I&apos;m excited to apply my academic knowledge to
                real-world projects and gain hands-on experience that will support my growth as a professional software engineer.
            </p>
        </section>

    )
}

export default About