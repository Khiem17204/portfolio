import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there, my name is
         <br /> <span className="info-name">Khiem Le</span>
         <br /> 
         <Typewriter
          options={{
            strings: ['Computer Science Student','Prospective Software Engineer '],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 100
          }}
         />
        <button className="button">
          <a href="#contact" className="link">
            Contact Me
          </a>
        </button>
        </div>
        <div className="about-photo">
          <img 
            alt="code"
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;