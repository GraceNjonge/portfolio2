import './contact.css';
//import the social media icons
import Facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

      // Create a reference to the form
    const form = useRef();

  // Function to handle form submission
    const sendEmail = (e) => {
        e.preventDefault();

    // Send form data using EmailJS(installed using 'npm install @emailjs/browser')
        emailjs.sendForm('service_j6efbve', // EmailJS service ID
             'template_b8rt5ih', // EmailJS template ID
             form.current, 'NTrRIoHn5gMHQPbU-' // EmailJS public key
        )
             .then((result) => {

            // If email is sent successfully
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {

            // If there's an error sending email    
                console.log(error.text);
            });
    };
    
  return (
    <div id="contactPage">
      
      {/* ===== CLIENTS SECTION ===== */}
      
      {/* ===== CONTACT FORM SECTION ===== */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>

        {/* Short instruction */}
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>

        {/* Contact Form */}
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          
          {/* Name input */}
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"   // Must match EmailJS template variable
            required
          />

          {/* Email input */}
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"  // Must match EmailJS template variable
            required
          />

          {/* Message textarea */}
          <textarea
            name="message"     // Must match EmailJS template variable
            placeholder="Your Message"
            rows={5}
            className="msg"
            required
          ></textarea>

          {/* Submit button */}
          <button type="submit" className="submitBtn">
            Submit
          </button>

          {/* Social media icons */}
          <div className="links">
            <a  href="https://www.facebook.com/grace.njonge.5"  target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="link"/>
            </a>
             <a  href="https://www.facebook.com/grace.njonge.5"  target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="link" />
            </a>
            <a  href="https://www.facebook.com/grace.njonge.5"  target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="link" />
            </a>
            <a  href="https://www.facebook.com/grace.njonge.5"  target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;