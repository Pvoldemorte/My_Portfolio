import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      
      <h2>About <span>Me</span></h2>
      
      <div className="container about__container">
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Internship</h5>
              <small>Seven Months In Newton School </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <div className="para">
          <p>
            Hello' I am <b>Chetan Patidar</b>. I am from <b>Ujjain</b>. I have Completed my BE in the stream of Mechanical Engineering in 2019.
            I have Completed six months Full Stack Web Developer course from <b>Newton School</b>.
          </p>
          </div>
        </div>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </section>
  );
};

export default About;
