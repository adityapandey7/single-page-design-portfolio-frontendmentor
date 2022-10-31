import React from "react";
import graphicDesign from "../assets/pattern-graphic-design.svg";
import uiux from "../assets/pattern-ui-ux.svg";
import apps from "../assets/pattern-apps.svg";
import illustrations from "../assets/pattern-illustrations.svg";
import photography from "../assets/pattern-photography.svg";
import motionGraphics from "../assets/pattern-motion-graphics.svg";

function HeroSection() {
  return (
    <section className="hero style">
      <div className="text">
        <h1>Design solutions made easy</h1>
        <p className="text-p">
          With over ten years of experience in various design disciplines, I'm
          your one-stop shop for your design needs
        </p>
      </div>  
      <div className="graphics">
        <div className="graphics-1">
          <img src={graphicDesign} alt="" />
          <span>Graphic Design</span>
      </div>
      <div className="ui-ux">
          <img src={uiux} alt="" />
          <span>UI/UX</span>
      </div>
      <div className="apps">
          <img src={apps} alt="" />
          <span>Apps</span>
      </div>
      <div className="illustrations">
          <img src={illustrations} alt="" />
          <span>Illustrations</span>
      </div>
      <div className="photography">
          <img src={photography} alt="" />
          <span>Photography</span>
      </div>
      <div className="motionGraphics">
          <img src={motionGraphics} alt="" />
          <span>Motion Graphics</span>
      </div>
      </div>
    </section>
  );
}

export default HeroSection;
