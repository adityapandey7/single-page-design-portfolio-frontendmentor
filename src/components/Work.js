import React from "react";
import slide1 from "../assets/image-slide-1.jpg";
import slide2 from "../assets/image-slide-2.jpg";
import slide3 from "../assets/image-slide-3.jpg";
import slide4 from "../assets/image-slide-4.jpg";
import slide5 from "../assets/image-slide-5.jpg";
import left from "../assets/icon-arrow-left.svg";
import right from "../assets/icon-arrow-right.svg";

function Work() {



  return (
    <div className="work">
      <h3>My Work</h3>
      <div className="work-slide">
      <div className="slide-row">
        <div className="slide-col">
          <img src={slide1} alt="" />
        </div>
        <div className="slide-col">
        <img src={slide2} alt="" />
        </div>
        <div className="slide-col">
        <img src={slide3} alt="" />
        </div>
        <div className="slide-col">
        <img src={slide4} alt="" />
        </div>
        <div className="slide-col">
        <img src={slide5} alt="" />
        </div>
      </div>
      </div>
     

      <div className="slide-control">
        <div className="left" >
          <img src={left} alt="" />
        </div>
        <div className="right">
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Work;
