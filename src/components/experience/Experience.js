import React, { useState } from 'react';
import './Experience.css'; // Import the CSS file

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState('Company A');
  const [animationKey, setAnimationKey] = useState(0); // Key to force re-render

  // Sample data for companies and job descriptions
  const experiences = [
    {
      company: 'Company A',
      description: 'At Company A, I was responsible for developing new features, fixing bugs, and maintaining legacy codebases. Led a team of developers and collaborated with cross-functional teams to deliver high-quality software on time.'
    },
    {
      company: 'Company B',
      description: 'At Company B, I focused on backend development using Spring Boot and PostgreSQL. Implemented REST APIs, optimized database queries, and ensured system scalability and performance.'
    },
    {
      company: 'Company C',
      description: 'At Company C, I worked on frontend development with React.js. Developed user interfaces, integrated APIs, and worked closely with designers to create responsive and user-friendly applications.'
    }
  ];

  // Handle click event to show the job description
  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setAnimationKey(prevKey => prevKey + 1); // Force re-render by changing key
  };

  const description = experiences.find(exp => exp.company === selectedCompany)?.description;

  return (
    <div id="experience" className="experience-section">
      <h1>Experience</h1>
      <div className="experience-columns">
        <div className="companies-column">
          <h2>Companies</h2>
          <ul>
            {experiences.map((exp, index) => (
              <li key={index} onClick={() => handleCompanyClick(exp.company)}>
                {exp.company}
              </li>
            ))}
          </ul>
        </div>
        <div className="description-column">
          <h2>Job Description</h2>
          <p key={animationKey} className="slide-in-bottom">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
