// src/sections/Contact.jsx
function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="h2-header">Leave me a message</h2>

        <form action="https://formspree.io/f/xrbbonkl" method="POST">
          <div className="label-name">
            <label htmlFor="name">
              Name: <span className="asteriks">*</span>
            </label>
          </div>
          <div className="contact-input">
            <input type="text" id="name" name="name" placeholder="Name" required />
          </div>

          <div className="label-name">
            <label htmlFor="email">
              Email: <span className="asteriks">*</span>
            </label>
          </div>
          <div className="contact-input">
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>

          <div className="label-name">
            <label htmlFor="subject">
              Subject: <span className="asteriks">*</span>
            </label>
          </div>
          <div className="contact-input">
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
          </div>

          <div className="label-name">
            <label htmlFor="message">
              Message: <span className="asteriks">*</span>
            </label>
          </div>
          <div className="contact-textarea">
            <textarea id="message" name="message" placeholder="Message" required />
          </div>

          <div className="send">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
