import React, { useRef, useState, useEffect } from 'react';
import './myportfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

function Myportfolio() {
    const footerRef = useRef(null);
    const cardsRef = useRef(null);
    const skillsRef = useRef(null);
    const [visibleCardCount, setVisibleCardCount] = useState(2);
    const [isExpanded, setIsExpanded] = useState(false);

    const navigate = useNavigate();

    const handleEmailClick = () => {
        navigate('/contact');
    };

    const scrollToFooter = () => {
        if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSkills = () => {
        if (skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToCards = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleCardVisibility = () => {
        if (isExpanded) {
            setVisibleCardCount(2);
        } else {
            setVisibleCardCount(6);
        }
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    return (
        <div className="parent">
            <div className="header" data-aos="zoom-in">
                <div className="header-left" data-aos="zoom-in">SK.</div>
                <div className="header-right">
                    <div className="header-right-project" onClick={scrollToCards}>
                        <a href="#projects" className="project">Projects</a>
                    </div>
                    <div className="header-right-resume">
                        <a href="#skills" className="skills-header" onClick={scrollToSkills}>Skills</a>
                    </div>
                    <div className="header-right-contact" onClick={scrollToFooter}>
                        <a href="#contact" className="contact">Contact</a>
                    </div>
                    <div className="header-right-icon">
                        <img className='dark-light' src='/kekishvili-portfolio/Darklight.png' alt="Theme Icon" />
                    </div>
                </div>
            </div>
            <div className="content" data-aos="zoom-in">
                <div className="content-row1" data-aos="zoom-in">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 50,
                            strings: ["Hey, I'm"],
                            deleteSpeed: Infinity
                        }}
                    />
                </div>
                <div className="content-row2" data-aos="zoom-in">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 80,
                            strings: ["SABA KEKISHVILI"],
                            deleteSpeed: Infinity
                        }}
                    />
                </div>
                <div className="content-row3" data-aos="zoom-in">
                I'm a front-end developer based in Tbilisi, Georgia, and also a business administration (management) student at Ilia State University. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university, and I've managed to gain a decent amount of experience and valuable knowledge from various fields throughout my projects and work.
                </div>
                <div className="content-row4" data-aos="zoom-in">Say Hi *</div>
            </div>
            <div className="skills" data-aos="zoom-in" ref={skillsRef}>
                <div className="skills-top">Skills</div>
                <div className="skills-bottom">
                    <div className='skills-bottom-son'>Figma</div>
                    <div className='skills-bottom-son'>HTML</div>
                    <div className='skills-bottom-son'>CSS</div>
                    <div className='skills-bottom-son'>Bootstrap</div>
                    <div className='skills-bottom-son'>Javascript</div>
                    <div className='skills-bottom-son'>C#</div>
                    <div className='skills-bottom-son'>React</div>
                    <div className='skills-bottom-son'>Node Js</div>
                    <div className='skills-bottom-son'>Express Js</div>
                    <div className='skills-bottom-son'>Unity 2D</div>
                    <div className='skills-bottom-son'>MongoDB</div>
                </div>
            </div>
            <div className="cards" data-aos="zoom-in" ref={cardsRef}>
                <div className="cards-top">
                    <div className="div">FEATURED PROJECTS</div>
                </div>
                <div className="cards-bottom">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className={`cards-son${index + 1}`}
                            style={{ display: visibleCardCount > index ? 'block' : 'none' }}
                        >
                            <div className="cards-image">
                                <img
                                    src={
                                        index === 0 ? '/kekishvili-portfolio/Cold.png' :
                                        index === 1 ? '/kekishvili-portfolio/Sugar.png' :
                                        index === 2 ? '/kekishvili-portfolio/Redsun.png' :
                                        index === 3 ? '/kekishvili-portfolio/Cold.png' :
                                        index === 4 ? '/kekishvili-portfolio/Sugar.png' :
                                        '/kekishvili-portfolio/Redsun.png'
                                    }
                                    alt={`Project ${index + 1}`}
                                />
                            </div>
                            <div className="cards-title">Project Name {index + 1}</div>
                            <div className="cards-content">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                            </div>
                            <div className="cards-footer">HTML - CSS - Bootstrap</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cards-button">
                <button className='load-more' onClick={toggleCardVisibility}>
                    {isExpanded ? 'Load Less' : 'Load More'}
                </button>
            </div>
            <div className="footer" data-aos="zoom-in" ref={footerRef}>
                <div className="footer-top">
                    <div className="footer-contact">CONTACT</div>
                </div>
                <div className="footer-bottom">
                    <a href='#' onClick={handleEmailClick}><img src='/kekishvili-portfolio/mail.png' alt="Mail" /> Send an email</a>
                    <a href='https://www.linkedin.com/in/saba-kekishvili-507ba4285/'><img src='/kekishvili-portfolio/linkdin.png' alt="LinkedIn" />LinkedIn</a>
                    <a href='https://github.com/SabaKekishvili'><img src='/kekishvili-portfolio/github.png' alt="GitHub" />GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Myportfolio;
