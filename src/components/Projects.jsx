import siteConfig from "../config/siteConfig";
import Reveal from "./Reveal";
import "./Projects.css";

export default function Projects() {
  const { projectsSection, projects } = siteConfig;

  return (
    <section id="projects" className="section projects section--muted">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Our Work</span>
          <h2>{projectsSection.heading}</h2>
          <p>{projectsSection.subheading}</p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal as="article" className="project-card" delay={i * 50} key={project.id}>
              <div className="project-card__image">
                <img src={project.image} alt={`${project.title} in ${project.location}`} loading="lazy" />
                <span className="project-card__type">{project.type}</span>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p className="project-card__location">{project.location}</p>
                <p className="project-card__description">{project.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
