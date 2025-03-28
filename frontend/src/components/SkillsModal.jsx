import skills from '../data/skillsData';

function SkillsModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>All Skills</h2>
        <div className="modal-skills-container">
          {skills.map((skill, i) => (
            <img key={i} src={skill.src} alt={skill.alt} className="image" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsModal;
