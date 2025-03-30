function ProjectCard({ title, description, techStack, githubLink }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {techStack}</p>
      <p>
        <strong>GitHub:</strong>{' '}
        <a href={githubLink} target="_blank" rel="noreferrer">
          {githubLink}
        </a>
      </p>
    </div>
  );
}

export default ProjectCard;
