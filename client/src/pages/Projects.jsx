import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';

function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState('software');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const fetchProjects = (cat) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects/${cat}`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setCurrentPage(1);
      });
  };

  useEffect(() => {
    const storedCategory = sessionStorage.getItem('category');
    const defaultCategory = storedCategory || 'software';
    setCategory(defaultCategory);
    fetchProjects(defaultCategory);
  }, []);

  useEffect(() => {
    fetchProjects(category);
  }, [category]);

  const startIndex = (currentPage - 1) * perPage;
  const paginated = projects.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(projects.length / perPage);

  return (
    <div className="projects-page">
      <h2 className="h2-header">{category === 'devops' ? 'DevOps Projects' : 'Web Application Projects'}</h2>

      <div className='main-toggle'>
        <div className="category-toggle">
          <button
            className={category === 'software' ? 'toggle-btn active' : 'toggle-btn'}
            onClick={() => setCategory('software')}
          >
            Software
          </button>
          <button
            className={category === 'devops' ? 'toggle-btn active' : 'toggle-btn'}
            onClick={() => setCategory('devops')}
          >
            DevOps
          </button>
        </div>
      </div>


      <div className="project-card-wrapper">
        {paginated.map((proj) => (
          <ProjectCard key={proj._id} {...proj} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      <button className="back-btn" onClick={() => navigate('/#project')}>← Back to Project</button>
    </div>
  );
}

export default Projects;
