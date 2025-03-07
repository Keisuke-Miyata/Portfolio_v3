import styles from './Experience.module.scss';
import Technologies from '../Technologies/Technologies';
import Link from 'next/link';
import Arrow from "../Arrow/Arrow"

interface ExperienceProps {
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  companyLink: string;
}

export default function Experience({
  title,
  company,
  description,
  startDate,
  endDate,
  technologies,
  companyLink
}: ExperienceProps) {
  return (
    <div className={styles.card}>
      <Link href={companyLink} rel="noopener noreferrer" target="_blank">
        <div className={styles.container}>
          <div className={styles.chronological}>
            <h5>{startDate} <hr /> {endDate}</h5>
          </div>
          <div className={styles.content}>
            <h3>{company}<Arrow /></h3>
            <h5>{title}</h5>
            <p>{description}</p>
            <Technologies technologies={technologies} />
          </div>
          </div>
      </Link>
    </div>
  );
}
