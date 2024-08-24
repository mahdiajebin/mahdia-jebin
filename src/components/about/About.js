import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
        <section id="about" className="about">

            <div className="about-container">
            <div>
            <h1>About Me</h1>
                <div className="about-content">
                    
                    <div className="about-info">
                        <img 
                            src="https://via.placeholder.com/300" 
                            alt="Profile" 
                            className="profile-pic"
                        />
                    </div>
                    <div className="about-text">
                        <p>
                            I am a Full-Stack Web Developer with a passion for building and managing both the front-end and back-end of websites and web applications. My experience includes extensive work in frontend development, but I am equally enthusiastic about tackling backend challenges. You can explore some of my projects in the Projects section.
                        </p>
                        <p>
                            I am currently seeking opportunities to leverage my skills in innovative projects and collaborative environments. If you are looking for a dedicated developer with a passion for technology, feel free to <strong>contact me</strong>.
                        </p>
                        <div className="skills">
                            Technologies I have used:
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default About;
