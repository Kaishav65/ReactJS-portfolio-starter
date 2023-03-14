import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Obcaecati quo molestias nisi vero reiciendis nam eos,
          <br /> provident consequuntur officiis, non pariatur molestiae!
          Quaerat, rem ex.
          <br /> Ea placeat minima numquam molestias?
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ bankground: "#ABF1FF94",top:'10rem',left:'25rem' }}></div>
      </div>
      {/* right side */}
      <div className="cards" >
      <div style={{left:'13rem'}}>
        <Card
          emoji = {HeartEmoji}
          heading ={'Design'}
          detail = {'Figma, Sketch, Photoshop, Adobe '}
        />
      </div>
      {/* second card */}
      <div style={{top:'11rem',left:'-4rem'}}>
        <Card 
          emoji = {Glasses}
          heading = {'Developer'}
          detail ={'HTML, CSS, JavaScript, ReactJS'}
        />
      </div>
      <div className="blur s-blur1" style={{ bankground: "#ABF1FF94" }}></div>
      {/* third card */}
      <div style={{top:'17rem',left:'12rem'}}>
        <Card 
          emoji = {Humble}
          heading = {'UI/UX'}
          detail = {"Lorem Ipsum dummy text are usually use in sections"}
        />
      </div>
      </div>
    </div>
  );
};

export default Services;
