import vectorIcon from '../assets/images/Vector.png';

function ResumeButton({ label, link }) {
  return (
    <a href={link} download target="_blank" rel="noopener noreferrer" className="resume">
      {label} <img src={vectorIcon} alt="download icon" />
    </a>
  );
}

export default ResumeButton;
