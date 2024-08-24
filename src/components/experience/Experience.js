import React, { useState } from 'react';
import './Experience.css'; // Import the CSS file

const Experience = () => {
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

  // State to keep track of the selected company
  const [selectedCompany, setSelectedCompany] = useState('Company A');

  // Handle click event to show the job description
  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
   
    <div id="experience" className="experience-section">
          <div >
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
          {selectedCompany ? (
            <p>
              {experiences.find(exp => exp.company === selectedCompany).description}
            </p>
          ) : (
            <p>Select a company to see the job description.</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
