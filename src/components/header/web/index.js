import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#projects" >
          <i className="fi-rr-edit-alt option-icon"></i>Projects
        </a>
    </div>
    <div className="web-option">
        <a href="#skills">
        <i className="fi-rr-laptop option-icon"></i>Skills
        </a>
    </div>
    <div className="web-option">
        <a href="#education">
        <i className="fi-rr-briefcase option-icon"></i>Education
        </a>
    </div>
    <div className="web-option">
      <a href="https://google.com">
      <i className="fi fi-rr-file"></i>Resume
      </a>
    </div>
    <div className="web-option">
        <a href="#contact">
        <i className="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
  </div>;
}

export default Web;