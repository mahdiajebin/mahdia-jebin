import React, { useEffect } from 'react';
import './Home.css';
import Tree from '../tree/Tree';


const Home = () => {
    useEffect(() => {
        const letters = document.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('bounce-in');
            }, index * 80); // Delay each letter's animation
        });
    }, []);

    const handleSeeMore = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSeeProjects = () => {
        const projectsSection = document.getElementById('project');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const name = "Welcome! I'm Mahdia";
    const letters = name.split('').map((letter, index) => (
        <span key={index} className="letter">{letter === ' ' ? '\u00A0' : letter}</span>
    ));
    return (
        <section id="home" className="home">
            <div className="home-container">
                <div className="intro-section">
                    <h2 className="display-5 fw-bold  glowing-text text-color mb-5 name">
                        
                        {letters}
                        <svg id="bird" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bird">
                            <path d="M5 12l1.5 1.5L12 10l5.5 5.5L20 12l-2-2L12 6 7 11 5 12z" />
                        </svg>
    
                    </h2>
                    <div className="col-lg-8 mx-auto">
                        <p className="lead mb-4">
                            I am a Full-Stack Web Developer with a passion for building and managing both the front-end and back-end of websites and web applications. My experience includes extensive work in frontend development, but I am equally enthusiastic about tackling backend challenges. You can explore some of my projects in the Projects section.
                        </p>
                        <p className="lead mb-4">
                            I'm actively seeking job opportunities where I can leverage my skills, contribute to projects, and grow professionally. If you have an opportunity that aligns with my expertise, please don't hesitate to <strong>contact me</strong>.
                        </p>
                        <div><br></br></div>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleSeeMore}>
                                See More
                            </button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleSeeProjects}>
                                Projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Home;
