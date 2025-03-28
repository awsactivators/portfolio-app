import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/styles.css';
import ResumeButton from '../components/ResumeButton';
import Skills from '../components/Skills';
import ProjectSection from '../sections/ProjectSection';
import BlogSection from '../sections/BlogSection';
import veeImg from '../assets/images/vee.png';


function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [location]);

  return (
    <main>
      <section id="about-me" style={{ backgroundImage: `url(${veeImg})` }}>
        <div className="name" id="name">
          <p>Hi, I am</p>
          <h1>Genevieve Awa</h1>
          <p className="job-title">DevOps Engineer | Web Developer</p>
        </div>

        <div className="summary">
          <p>
            DevOps/Cloud Infrastructure Engineer with 6+ years of experience in designing, implementing,
            and maintaining scalable infrastructure for enterprise applications. Skilled in developing
            automation frameworks, optimizing CI/CD pipelines, managing cloud environments (AWS, GCP),
            and building full-stack solutions (frontend and backend).
          </p>
        </div>

        <div className="resume-btn">
          <ResumeButton
            label="DevOps Resume"
            link="https://drive.google.com/file/d/1xjW9tZrzmof1WEdwBdxPes_zzz_hJv_3/view?usp=sharing"
          />
          <ResumeButton
            label="Developer Resume"
            link="https://drive.google.com/file/d/1N0P33EuZ7r2wjtrpZ1nzVI92RMUuFKsE/view?usp=sharing"
          />
        </div>
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <ProjectSection />
      </section>
      <section>
        <BlogSection />
      </section>
    </main>
  );
}

export default Home;
