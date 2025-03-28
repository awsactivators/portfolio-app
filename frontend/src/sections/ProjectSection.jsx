// src/sections/ProjectSection.jsx
import { Link } from 'react-router-dom';
import devopsBanner from '../assets/images/devops-banner.png';
import softwareBanner from '../assets/images/software-dev-banner.png';

function ProjectSection() {
  return (
    <section className="project-container" id="project">
      <h2 className="h2-header" id="project-header">PROJECTS</h2>

      <article>
        <div className="card">
          <img src={devopsBanner} alt="DevOps Project Banner" />
          <div className="project-summary">
            <h2><b>DevOps</b></h2>
            <p>
              In my DevOps projects, I focus on building and managing scalable, automated infrastructure
              solutions. I specialize in CI/CD pipeline implementation, cloud architecture, container
              orchestration, and deployment automation.
            </p>
          </div>
          <div className="view-btn">
            <Link to="/projects">
              <button onClick={() => sessionStorage.setItem('category', 'devops')}>View Projects</button>
            </Link>
          </div>
        </div>
      </article>

      <article>
        <div className="card">
          <img src={softwareBanner} alt="Web Application Project Banner" />
          <div className="project-summary">
            <h2><b>Web Application</b></h2>
            <p>
              These projects involve designing and building user-centered applications using full-stack
              technologies. I create responsive and functional solutions that solve real-world problems.
            </p>
          </div>
          <div className="view-btn">
            <Link to="/projects">
              <button onClick={() => sessionStorage.setItem('category', 'software')}>View Projects</button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProjectSection;
