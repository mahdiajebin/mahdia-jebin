import React from 'react';
import Slider from 'react-slick';
import './Other.css'; // Ensure CSS is loaded
const PUBLIC_URL = process.env.PUBLIC_URL;

const projects = [
  {
    title: '',
    images: [`${PUBLIC_URL}/assets/Hobbies.jpg`, `${PUBLIC_URL}/assets/Hobbies2.jpg`],
    description: 'Some Other things I enjoy',
  },
];

const OtherProject = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section id="otherproject" className="otherproject">
      <h1>Other Hobbies</h1>
      <div className="container">
        <div className="otherproject-slider">
          <Slider {...sliderSettings} key={projects[0].images.length}>
            {projects[0].images.map((image, idx) => (
              <div key={idx} className="slideshow-item">
                <img src={image} alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </Slider>
          <div className="otherproject-description">
            <h2>{projects[0].title}</h2>
            <p>{projects[0].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProject;
