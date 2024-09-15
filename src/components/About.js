import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="profile-pic">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div className="about-content">
          <h2>Simon Chen</h2>
          <h3>Data Analyst & Enthusiast</h3>
          <p>
            I'm Simon Chen, a passionate data analyst with expertise in
            transforming raw data into actionable insights. My experience spans
            across various industries, where I've applied statistical analysis,
            machine learning, and data visualization to drive decision-making
            and optimize processes.
          </p>
          <p>
            I'm always eager to learn new techniques and technologies to stay at
            the forefront of the data science field. Let's connect and explore
            how we can make data work for you!
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/simonchen"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/simonchen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:simon.chen@example.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
