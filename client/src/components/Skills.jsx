import { useEffect, useState } from 'react';
import skills from '../data/skillsData';
import SkillsModal from './SkillsModal';

function Skills() {
  const [visible, setVisible] = useState(5);
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width <= 480) setVisible(2);
      else if (width <= 768) setVisible(3);
      else setVisible(5);
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + visible) % skills.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateVisible);
    };
  }, [visible]);

  const visibleSkills = skills.slice(index, index + visible).concat(
    index + visible > skills.length ? skills.slice(0, (index + visible) % skills.length) : []
  );

  return (
    <div className="skills-container" id="skill">
      <div className="skill-title-view">
        <div>
          <h2 className="h2-header" id="skill-header">SKILLS</h2>
        </div>
        <div className="view-skills-btn">
          <button onClick={() => setShowModal(true)}>View All Skills</button>
        </div>
      </div>

      <div id="skills-banner">
        {visibleSkills.map((skill, i) => (
          <img key={i} src={skill.src} alt={skill.alt} className="image" />
        ))}
      </div>

      <SkillsModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Skills;
