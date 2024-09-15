import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:simon.chen@example.com">simon.chen@example.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/simonchen"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/simonchen
          </a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+123-456-7890</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
