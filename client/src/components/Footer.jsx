function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="back-to-top">
          <a href="#about-me">
            <p id="up-arrow">^</p>
            <p id="back">Back to top</p>
          </a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/awsactivators" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          <a href="https://linkedin.com/in/vieve-awa" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          <a href="https://medium.com/@awavieve" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium"></i></a>
          <a href="mailto:awavieve@gmail.com"><i className="fa fa-envelope"></i></a>
        </div>
        <div className="copyright">
          <p>© 2024 Genevieve Awa</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
