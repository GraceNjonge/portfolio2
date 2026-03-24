// Import React so we can create a component
import React from 'react';

// Import CSS file for styling this section
import './works.css';

// Import portfolio images
import Portfolio1 from '../../assets/p1.png';
import Portfolio2 from '../../assets/p2.png';
import Portfolio3 from '../../assets/p3.png';
import Portfolio4 from '../../assets/p4.png';
import Portfolio5 from '../../assets/p5.png';

// Create a functional component called Works
const Works = () => {

    // Return the UI (what will be displayed on the screen)
    return (

        // Section with id="works" (used for scrolling/navigation)
        <section id='works'>

            {/* Title of the portfolio section */}
            <h2 className="worksTitle">My Portfolio</h2>

            {/* Short description about your work */}
            <span className="worksDesc">
                I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. 
                I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
            </span>

            {/* Container that holds all portfolio images */}
            <div className="worksImgs">

                {/* Each image represents a project */}
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
                <img src={Portfolio4} alt="" className="worksImg" />
                <img src={Portfolio5} alt="" className="worksImg" />

            </div>
        </section>
    );
}

// Export the component so it can be used in other parts of the app
export default Works;