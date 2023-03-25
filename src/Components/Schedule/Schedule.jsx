import React from "react";
import "./Schedule.css";
import leftGradient from "../../Assets/images/gradient-left.png";
import rightGradient from "../../Assets/images/gradient-right.png";
import logoImg from "../../Assets/images/logo.png";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="gradient-container">
        <img src={leftGradient} alt="" className="left-gradient" />
        <img src={rightGradient} alt="" className="right-gradient" />
        <img src={logoImg} alt="" className="schedule-logo" />
        <div>
          <h4 className="schedule-text">
            Welcome.
            <br />
            Start your Journey now!
            <br />
            Kindly Schedule your Flight!
          </h4>
        </div>
      </div>
      <div className="schedule-form">
        <h5>Schedule your Flight</h5>
      </div>
    </div>
  );
};

export default Schedule;
