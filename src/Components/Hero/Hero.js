import React from "react";
import "./Hero.css";
import heroImg from "./../../images/illustration-mockups.svg";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="text-box">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            {" "}
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="btn btn-primary">Get Started For Free</button>
        </div>
        <img src={heroImg} alt="heroImg" />
      </div>
    </section>
  );
};

export default Hero;
