import React from "react";
import "./Schedule.css";
import leftGradient from "../../Assets/images/gradient-left.png"
import rightGradient from "../../Assets/images/gradient-right.png"

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="gradient-container">
        <img src={leftGradient} alt="" className="left-gradient"/>
        <img src={rightGradient} alt="" className="right-gradient"/>
      </div>
      <div className="schedule-form"></div>
    </div>
  );
};

export default Schedule;
