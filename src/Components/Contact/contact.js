import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="main">
      <div className="contact">

        <div className="left">
          <h1>Contact Me</h1>

          <p className="text">
            Feel free to reach out if you'd like to collaborate,
            discuss a project, or just connect.
          </p>

          <div className="contactInfo">
            <p><strong>Email:</strong> racchamaheshwari@gmail.com</p>
            <p><strong>Location:</strong> Maharashtra</p>
            <p><strong>GitHub:</strong> github.com/Maheshwari242008</p>
            <p className="tt"><strong>LinkedIn:</strong> https://www.linkedin.com/in/maheshwari-raccha-925940353/</p>
          </div>
        </div>

        <div className="right">
          <form className="contactForm">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;