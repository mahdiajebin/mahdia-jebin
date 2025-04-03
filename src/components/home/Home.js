import React, { useEffect } from 'react';
import './Home.scss';
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
                        <p> As a results-driven Full-Stack Web Developer, I specialize in creating impactful, user-friendly applications that blend innovation with technical precision. Leveraging my expertise in front-end technologies like React and Angular, along with back-end solutions in Spring Boot, I am committed to building solutions that enhance user experience and drive success. Actively seeking opportunities where I can apply my skills and grow professionally, I am excited to connect with teams looking for a dedicated developer who values quality, creativity, and continuous improvement. If you're hiring, I’d love to discuss how my skills can contribute to your goals. </p>                        </p>
                        <p className="lead mb-4">
                           If you have an opportunity that aligns with my expertise, please don't hesitate to <strong>contact me</strong>.
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
