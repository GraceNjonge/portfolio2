import React from 'react';
import './intro.css';
import bg from '../../assets/home.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Grace</span> <br />Front End  Developer</span>
                <p className="introPara">I am a skilled Front End designer with experience in creating<br />visually appealing and user friendly websites.</p>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
