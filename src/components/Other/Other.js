import React, { useState } from 'react';
import Slider from 'react-slick';
import './Other.css'; // Ensure the CSS file is imported correctly

// Sample data for projects with multiple images
const projects = [
  {
    title: '',
    images: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'],
    description: 'Nature ... to add',
  },
  {
    title: '',
    images: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'],
    description: 'Group Events... to add',
  },
  {
    title: '',
    images: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'],
    description: 'Art... to add',
  }
];

const OtherProject = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: index => setSelectedProjectIndex(index),
  };

  return (
    <section id="otherproject" className="otherproject">
      <h1>Other Hobbies</h1>
      <div className="container">
        <div className="otherproject-slider">
          {/* Slider for project images */}
          <Slider {...sliderSettings} className="otherproject-slider-inner">
            {projects[selectedProjectIndex].images.map((image, idx) => (
              <div key={idx} className="slideshow-item">
                <img src={image} alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </Slider>

          {/* Project description below slider */}
          <div className="otherproject-description">
            <h2>{projects[selectedProjectIndex].title}</h2>
            <p>{projects[selectedProjectIndex].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProject;
