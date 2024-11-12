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
                            I am a Full-Stack Web Developer with a passion for building dynamic and intuitive web applications, specializing in both front-end and back-end development.
                            With strong skills in Angular and React for front-end frameworks, and Spring Boot for backend solutions, I develop scalable, high-quality applications that 
                            deliver excellent user experiences. Currently, I am advancing my expertise through <a style={{ color: 'white', textDecoration: 'underline' }} href="https://www.npower.org/" target="_blank">NPower's</a> Full Stack Development course, as well as courses in IT automation, Data Analysis, and AI on <a href="https://www.coursera.org/" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}> Coursera </a>. As I seek my next professional opportunity, I am excited to apply my skills to create innovative solutions. Explore my projects below to see my work in action!
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
