import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Contact from "./contact/index";
import Education from "./education";

function Body() {
  return (
  <div className="body">
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="education">
      <Education />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
  );
}

export default Body;