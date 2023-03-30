import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cta.css";
import ctaImage from "../../Assets/images/Cta-image.png";
import ctaLine from "../../Assets/images/cta-line.png";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cta = () => {
  const navigate = useNavigate();
  const bookNavigate = () => {
    navigate("/schedule");
  };
  return (
    <div className="cta-container">
      <div className="cta-image">
        <img src={ctaImage} alt="Call to Action" />
      </div>
      <div className="cta-details">
        <h5>
          Let's Fly <img src={ctaLine} alt="CTA Line" className="cta-line" />
        </h5>
        <h4>
          It’s one of the leading online flight <br /> booking platforms in the
          world
        </h4>
        <div className="cta-more-details">
          <p>
            {" "}
            <span className="circle"></span> Contrary to popular belief, Lorem
            Ipsum is not simply random text
          </p>
        </div>
        <div className="cta-more-details">
          <p>
            <span className="circle"></span> If you are going to use a passage
            of Lorem Ipsum
          </p>
        </div>
        <div className="cta-more-details">
          <p>
            {" "}
            <span className="circle"></span> Lorem Ipsum is therefore always
            free from repetition, injected
            <br /> humour, or non-characteristic words etc.
          </p>
        </div>
        <div className="cta-more-details">
          <p>
            <span className="circle"></span> It is a long established fact that
            a reader will be distracted <br />
            by the readable content of a page when looking at its layout.
          </p>
        </div>
        <button onClick={bookNavigate}>Book Now</button>
      </div>
    </div>
  );
};

export default Cta;
