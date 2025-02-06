import { projects } from "../data/projectsData";
import Project from "./ProjectCard";

export default function ProjectsList() {
    return (
        <div>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
}
