import React, { useEffect } from 'react';
import './Home.scss';
const PUBLIC_URL = process.env.PUBLIC_URL;
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
                    <h2 className="display-5 fw-bold glowing-text text-color mb-5 name">
                        {letters}
                        {/* <img src={`${PUBLIC_URL}/assets/dove-svgrepo-com.svg`} alt="Bird" className="bird-img" />  */}
                    </h2>
                    <div className="col-lg-8 mx-auto">
                        <p className="lead mb-4">
                            I am a Full-Stack Web Developer with a passion for creating innovative and dynamic web applications. With expertise in React, JavaScript, and backend technologies, I enjoy building responsive and user-friendly interfaces.
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
                        <div className='stars'></div>

                    </div>
                </div>
            </div>
        
        </section>
    );
};

export default Home;
