import React, { useState } from 'react';
import Slider from 'react-slick';
import './Project.css'; // Ensure the CSS file is imported correctly

// Sample data for projects with dummy images
const projects = [
  {
    title: 'Project 1',
    images: [
      'https://placehold.co/600x400', // Dummy image 1
      'https://placehold.co/600x700', // Dummy image 2
      'https://placehold.co/600x400', // Dummy image 3
    ],
    description: 'Description for Project 1 goes here. This is a brief overview of the project and its features.',
  },
  {
    title: 'Project 2',
    images: [
      'https://placehold.co/600x400', // Dummy image 1
      'https://placehold.co/600x400', // Dummy image 2
      'https://placehold.co/600x400', // Dummy image 3
    ],
    description: 'Description for Project 2 goes here. This is a brief overview of the project and its features.',
  },
  {
    title: 'Project 3',
    images: [
      'https://placehold.co/600x400', // Dummy image 1
      'https://placehold.co/600x400', // Dummy image 2
      'https://placehold.co/600x400', // Dummy image 3
    ],
    description: 'Description for Project 3 goes here. This is a brief overview of the project and its features.',
  }
];

const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

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
                onClick={() => setSelectedProjectIndex(index)}
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
                    <img src={image} alt={`Slide ${idx + 1}`} />
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
