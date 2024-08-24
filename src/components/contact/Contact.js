import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section id="contact" className="contact-me">
      <h3 className="contact-heading">Contact</h3>
      <div className="contact-details">
        <div className="contact-item">
          <strong>Email:</strong>
          <a href="mailto:mahdiajebin.dev@gmail.com">mahdiajebin.dev@gmail.com</a>
        </div>
        <div className="contact-item">
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/mahdia-jebin-a7034a155/" target="_blank" rel="noopener noreferrer">Mahdia Jebin</a>
        </div>
        <div className="contact-item">
          <strong>GitHub:</strong>
          <a href="https://github.com/mahdiajebin" target="_blank" rel="noopener noreferrer">mahdiajebin</a>
        </div>
        <div className="contact-item">
          <strong>Resume:</strong>
          <a href={`${process.env.PUBLIC_URL}/assets/Resume/Portfolio_ResumeMJ.pdf`} target="_blank" rel="noopener noreferrer">View my resume</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
