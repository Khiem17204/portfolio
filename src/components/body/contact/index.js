import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-form">
        <p>Want to get in touch? Contact me on any of the platform</p>
        <form name="contact-form" method="POST" data-netlify="true" className="form">
            <div className="form-container">
              <label className="form-info">Your Name:</label>
              <input name='name' type="text" className="form-input" />
            </div>
            <div className="form-container">
              <label className="form-info">Your Email:</label>
              <input name="email" type="email" className="form-input" />
            </div>
            <div className="form-container">
              <label className="form-info">Message:</label>
              <textarea name="message" className="form-input"></textarea>
            </div>
            <button type="submit" className="button">Send</button>
        </form>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;