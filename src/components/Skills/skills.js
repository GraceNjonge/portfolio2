import React from 'react';
import './skills.css';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
            <div className="skillBars">
               
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Developer</h2>
                        <p>A website developer creates the look, layout, and functionality of websites, balancing artistic aesthetics .</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Video Editing</h2>
                        <p> a creative professional responsible for assembling raw footage, trimming segments, and inserting sound, music, and graphics to produce a polished final video.</p>
                    </div>
                </div>
        </section>
    );
}

export default Skills;
