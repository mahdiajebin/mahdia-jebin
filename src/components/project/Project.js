import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
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
            title: 'My Deen',
            images: [
              `${PUBLIC_URL}/assets/MyDeenPics/pic0.png`,
              `${PUBLIC_URL}/assets/MyDeenPics/pic1.png`,
              `${PUBLIC_URL}/assets/MyDeenPics/pic2.png`,
            ],
            description: 'Description for Project 1 goes here. This is a brief overview of the project and its features.',
          },
          {
            title: 'Clumsy Proof',
            images: [
              `${PUBLIC_URL}/assets/ClumsyProofPics/pic1.png`,
              `${PUBLIC_URL}/assets/ClumsyProofPics/pic2.png`,
              `${PUBLIC_URL}/assets/ClumsyProofPics/pic3.png`,
            ],
            description: 'Description for Project 2 goes here. This is a brief overview of the project and its features.',
          },
          {
            title: 'Project 3',
            images: [
              'https://placehold.co/600x400',
              'https://placehold.co/600x400',
              'https://placehold.co/600x400',
            ],
            description: 'Description for Project 3 goes here. This is a brief overview of the project and its features.',
          }
        ]);
      }, 1000); // Simulate a delay
    });

    return response;
  } catch (error) {
    throw new Error('Failed to fetch projects.');
  }
};

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(
    localStorage.getItem('selectedProjectIndex') || 0
  ); //This checks if there's a value stored in local storage for selectedProjectIndex. If it exists, it uses that value. Otherwise, it defaults to 0.
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
  }, []); // Empty dependency array ensures this only runs on mount

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
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
            {/* Slider for project images */}
            <div className="slideshow">
              <Slider {...sliderSettings} className="project-slider-inner">
                {projects[selectedProjectIndex].images.map((image, idx) => (
                  <div key={idx} className="slideshow-item">
                    <img 
                      src={image} 
                      alt={`Slide ${idx + 1}`} 
                      onError={handleImageError} 
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Project description below slider */}
            <div className="project-description">
              <h2>{projects[selectedProjectIndex].title}</h2>
              <p>{projects[selectedProjectIndex].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
