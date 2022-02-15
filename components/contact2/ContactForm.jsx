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
            <form name="contact2" method="POST" data-netlify="true">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" autocomplete="name" placeholder="Your name" title="Please enter your name" required>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" autocomplete="email" placeholder="Your email address" title="The domain portion of the email address is invalid (the portion after the @)." pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$" required>
                <label for="message">Message</label>
                <textarea name="message" id="message" placeholder="Write your message here" rows="7" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;