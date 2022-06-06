import React from "react";
import image from "../../images/about.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about-section font-mono pt-10">
      <img src={image} alt="" />
      <div className="mt-10">
        <h1 className="text-4xl mb-8">
          <span>Hello I am Abi Abdullah</span>
        </h1>
        <p className="text-xl">
          I' am Studying Diploma in Computer Science & Engineering. I want to
          build my career as a web developer.
          <span>My Goal is to be a good full-stack</span>
          developer. I hope i can make it by the blessing of Almighty and
          through my hardwork
        </p>
      </div>
    </div>
  );
};

export default About;
