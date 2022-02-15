const ContactForm = () => {
  return (
    <div className="section">
      <div className="main-background"></div>
      <div className="main-container">
        <div className="flex-container">
          <div className="flex-1">
            <h3 className="title">Ask A Question</h3>
            <p className="desc">
              {`I'm`} OK with any kind of questions and will answer as many as I
              possibly can.
            </p>
          </div>
          <div className="flex-1">
            <div className="contact-form">
              <form
                name="contact-form-nextjs"
                method="POST"
                netlify-honeypot="bot-field"
                action="https://podcast.doctrineofdiscovery.org/thank-you"
                data-netlify="true"
                netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-content">
                  <div className="form-group">
                    <label htmlFor="name" className="input-lable">
                      Name
                    </label>
                    <input
                      className="input-field"
                      name="name"
                      id="contact-form-name"
                      aria-labelledby="contact-form-name-label"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="input-lable">
                      Email
                    </label>
                    <input
                      className="input-field"
                      name="email"
                      id="contact-form-email"
                      aria-labelledby="contact-form-email-label"
                      type="text"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="textarea" className="input-lable">
                      Question
                    </label>
                    <textarea
                      style={{ minHeight: 156 }}
                      className="input-field"
                      type="textarea"
                      name="message"
                      placeholder="Your question"
                    />
                  </div>
                </div>
                <div className="form-checkbox flex-container">
                  <input name="checkbox" type={`checkbox`} />
                  <p className="checkbox-lable">
                    I understand that this form is storing my submitted
                    information so I can be contacted.
                  </p>
                </div>
                <div className="btn-wrapper">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
