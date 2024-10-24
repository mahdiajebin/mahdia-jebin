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
                        </p>
                        <div> Tools & Technologies I have used:</div>
                        <div className="skills">
                        Java, JavaScript, TypeScript, HTML, CSS, Dart, VB.NET, Angular 12, AngularJS, ReactJS, Flutter, Spring Boot, Express.js, MySQL, MongoDB, Git, Docker, Jira, REST APIs, Agile Methodologies, Scrum
                        </div>

                        <br></br>
                        <div><p> Personal Skills:  Communication, problem-solving, teamwork, adaptability, time management, critical thinking,
                        empathy, conflict resolution, attention to detail, curiosity, and continuous learning</p>
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
