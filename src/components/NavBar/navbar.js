// Import React and the useState hook (used to store and update data in a component)
import React, { useState } from 'react';

// Import CSS file for styling the navbar
import './navbar.css';

// Import images used in the navbar
import logo from '../../assets/2026.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

// Import Link from react-scroll (used for smooth scrolling to sections)
import { Link } from 'react-scroll';

// Create a functional component called Navbar
const Navbar = () => {

    // useState hook:
    // showMenu = current state (true/false)
    // setShowMenu = function to update the state
    // false means the mobile menu is hidden by default
    const [showMenu, setShowMenu] = useState(false);

    // Return what should be displayed on the screen
    return (
        <nav className="navbar">

            {/* Logo image */}
            <img src={logo} alt="Logo" className='logo'/>

            {/* Desktop menu (visible on larger screens) */}
            <div className="desktopMenu">

                {/* Each Link scrolls smoothly to a section */}
                <Link 
                    activeClass='active'   // adds 'active' class when section is in view
                    to='intro'             // scrolls to element with id="intro"
                    spy={true}             // keeps track of scroll position
                    smooth={true}          // enables smooth scrolling
                    offset={-100}          // adjusts scroll position
                    duration={500}         // scroll animation duration (ms)
                    className="desktopMenuListItem"
                >
                    Home
                </Link>

                <Link to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
                    About
                </Link>

                <Link to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
                    Portfolio
                </Link>
            </div>

            {/* Contact button */}
            <button 
                className="desktopMenuBtn" 
                onClick={() => {
                    // Scrolls to the element with id="contact"
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}
            >
                <img src={contactImg} alt="" className="desktopMenuImg" />
                Contact Me
            </button>

            {/* Mobile menu icon (hamburger icon) */}
            <img 
                src={menu} 
                alt="Menu" 
                className='mobMenu' 
                onClick={() => setShowMenu(!showMenu)} 
                // Toggles menu: if false → true, if true → false
            />

            {/* Mobile dropdown menu */}
            <div 
                className="navMenu" 
                style={{display: showMenu ? 'flex' : 'none'}} 
                // Show menu if showMenu is true, otherwise hide it
            >

                {/* Mobile menu links */}
                <Link to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem"
                    onClick={() => setShowMenu(false)} // close menu after click
                >
                    Home
                </Link>

                <Link to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    About
                </Link>

                <Link to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Portfolio
                </Link>

                <Link to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Clients
                </Link>

                <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Contact
                </Link>

            </div>
        </nav>
    );
}

// Export the Navbar so it can be used in other files
export default Navbar;