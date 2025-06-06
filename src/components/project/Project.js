import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './Project.css'; // Ensure the CSS file is imported correctly

const PUBLIC_URL = process.env.PUBLIC_URL;

// Simulate data fetching function
const fetchProjects = async () => {
  try {
    // Simulate a delay to mimic a real API call
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            title: 'Weather-App',
            images: [
              `${PUBLIC_URL}/assets/Weather-app.jpg`,
      
            ],
            description: 'We did Project as Part of learning how to use public API.',
            gitlink: 'https://github.com/mahdiajebin/Weather-App-Template',
          },
          {
            title: 'Clumsy Proof',
            images: [
              `${PUBLIC_URL}/assets/ClumsyProofPics/pic1.png`,
              `${PUBLIC_URL}/assets/ClumsyProofPics/pic2.png`,
              `${PUBLIC_URL}/assets/ClumsyProofPics/pic3.png`,
            ],
            description: 'This was a class project I did in my class use VB.net framwork. it is an website for phone case',
            gitlink: 'https://github.com/mahdiajebin/ClumsyProofVB.net',

          },
          {
            title: 'House Of Noor',
            images: [
              `${PUBLIC_URL}/assets/HouseOfNoorPics//pic1.png`,
              `${PUBLIC_URL}/assets/HouseOfNoorPics/pic2.png`,
              `${PUBLIC_URL}/assets/HouseOfNoorPics//pic3.png`,
            ],
            description: 'An E-Commerce project using React, Strapi, Firebase I am stil working on the project but heres Whats working',
            gitlink: 'https://github.com/mahdiajebin/HouseOfNoor |  https://github.com/mahdiajebin/StrapiHouseOfNoor',

          }
          ,
          {
            title: 'Adding Soon...',
            images: [
              `${PUBLIC_URL}/assets/addingSoon.png`,
              `${PUBLIC_URL}/assets/addingSoon.png`,
              `${PUBLIC_URL}/assets/addingSoon.png`,
            ],
            description: 'They are currently some on github I am yet to update and link here ',
            gitlink: 'https://github.com/mahdiajebin/Weather-App-Template',

          }
        ]);
      }, 100); // Simulate a delay
    });

    return response;
  } catch (error) {
    throw new Error('Failed to fetch projects.');
  }
};

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(
    parseInt(localStorage.getItem('selectedProjectIndex')) || 0
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError('Failed to fetch projects.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Handle image load errors
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/600x400'; // Fallback image
  };

  // Conditional rendering based on state
  if (loading) {
    return <p>Loading...</p>; // Show loading message
  }

  if (error) {
    return <p>{error}</p>; // Show error message
  }

  if (!projects.length) {
    return <p>No projects available.</p>; // Handle empty data case
  }

  return (
    <section id="project" className="project">
      <h1>Projects</h1>
      <div className="container">
        {/* Two-column layout */}
        <div className="project-layout">
          {/* First column: Project names */}
          <div className="project-names">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`project-name-button ${index === selectedProjectIndex ? 'active' : ''}`}
                onClick={() => {
                  setSelectedProjectIndex(index);
                  localStorage.setItem('selectedProjectIndex', index);
                }}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Second column: Project details */}
          <div className="project-details">
            {/* Carousel for project images */}
            <div className="slideshow">
              <Carousel 
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                infiniteLoop
                autoPlay
                className="project-slider-inner"
              >
                {projects[selectedProjectIndex].images.map((image, idx) => (
                  <div key={idx} className="slideshow-item">
                    <img 
                      src={image} 
                      alt={`Slide ${idx + 1}`} 
                      onError={handleImageError} 
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Project description below carousel */}
            <div className="project-description">
              <h2>{projects[selectedProjectIndex].title}</h2>
              <p>{projects[selectedProjectIndex].description}</p>
              <p>
                 GitHub Link:{" "}
                <a
                  href={projects[selectedProjectIndex].gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projects[selectedProjectIndex].gitlink}
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
