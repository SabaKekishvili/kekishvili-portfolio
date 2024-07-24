import './contact.css';
import React, { useRef, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Contact() {
    const navigate = useNavigate();
    const [notification, setNotification] = useState(false); 

    const handleHomepageClick = () => {
        navigate('/');
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g8m3x0q', 'template_x5nb1c8', form.current, 'W1C1mhWp6Y2_Jfsbl')
            .then(
                () => {
                    setNotification(true);
                    setTimeout(() => setNotification(false), 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    }
    return (
        <div className="parent1">
            <div className="header1" data-aos="zoom-in">
                <div className="header-left1" onClick={handleHomepageClick}>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 300,
                            strings: ["SK."],
                            deleteSpeed: Infinity
                        }}
                    />
                </div>
                <div className="header-right-icon">
                    <img className='dark-light' src='/kekishvili-portfolio/Darklight.png' alt="Theme Icon" />
                </div>
            </div>
            <div className="form-container" data-aos="fade-right">
                <div className="contact-me" data-aos="zoom-in">Contact Me</div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <label className="form-label">Name</label>
                    <input type='text' name="user_name" className="form-input"data-aos="zoom-in" />
                    <label className="form-label">Email</label>
                    <input type='email' name="user_email" className="form-input"data-aos="zoom-in" />
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-textarea"data-aos="zoom-in"></textarea>
                    <input type="submit" value="Send" className="form-submit" data-aos="zoom-in" />
                </form>
                {notification && <div className="notification">Message Sent!</div>}
            </div>
        </div>
    );
}

export default Contact;
