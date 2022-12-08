import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import ContactForm from "./contactForm.js";

function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-form">
        <p>Want to get in touch? Contact me on any of the platform</p>
        <ContactForm />
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;