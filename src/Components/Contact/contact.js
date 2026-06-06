import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wsoac2s',
        'template_xr8mpp1',
        form.current,
        'Lk4T3bKPhdUQEokrH'
      )
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
      console.log("EmailJS Error:", error);
      console.log("Status:", error.status);
      console.log("Text:", error.text);
      alert("Failed to send message.");
    });
  };

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
            <p><strong>LinkedIn:</strong> linkedin.com/in/maheshwari-raccha</p>
          </div>
        </div>

        <div className="right">
          <form ref={form} onSubmit={sendEmail} className="contactForm">

            <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
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