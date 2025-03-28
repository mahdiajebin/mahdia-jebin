import React, { useState , useEffect} from "react";
import "./Experience.css"; // Import the CSS file

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [animationKey, setAnimationKey] = useState(0); // Key to force re-render

  // Sample data for companies and job descriptions
  const experiences = [
    {
      company: "Tata Consultancy Services (TCS)-Western Union",
      description: `
      As a Junior Developer, I contributed to the migration of
      a large-scale Point of Sale (POS) system from AngularJS 
      to Angular 12, with a focus on enhancing both performance
      and maintainability. I developed dynamic and reusable
         
      Angular components, services, and directives that significantly
      improved the application's user interface and overall user 
      experience. I also integrated RESTful APIs by building robust
      TypeScript components, ensuring seamless data consumption 
      throughout the application.I collaborated closely with cross-functional teams,
      contributing to project planning, sprint reviews, and iterative development, which led to the successful delivery of project milestones and improved team adaptability.
    `,
    },
    {
      company: "Union Settlement",
      description: `
      As an IT Intern , We implemented a new Symantec security system across multiple company locations, ensuring enhanced protection against cybersecurity threats. Collaborated with IT teams to visit various company locations to assess and verify the successful deployment and functionality of the new security system. Researched and resolved security policy issues, addressing vulnerabilities that improved system reliability and maintained compliance with internal policies.
    `,
    },
    {
      company: " Verizon Media(Oath)",
      description: `
    As a Software Engineer Intern, We designed and developed a diversity tracking dashboard using HTML, CSS, and JavaScript, enabling strategic analysis of the company’s diversity metrics. The dashboard was used by HR and leadership to track diversity trends and identify areas for improvement, supporting strategic decisions around hiring, re-skilling, and training initiatives to address diversity challenges. Delivered the dashboard project on time, contributing to Verizon Media’s ongoing diversity initiatives. Fostered professional relationships with colleagues, gaining insights into the tech industry and enhancing teamwork dynamics across the project.
  `,
    },
  ];
  useEffect(() => {
    setSelectedCompany(experiences[0].company);
    setAnimationKey((prevKey) => prevKey + 1); // Force re-render to show description
  }, []);

  // Handle click event to show the job description
  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setAnimationKey((prevKey) => prevKey + 1); // Force re-render by changing key
  };

  const description = experiences.find(
    (exp) => exp.company === selectedCompany
  )?.description;

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
