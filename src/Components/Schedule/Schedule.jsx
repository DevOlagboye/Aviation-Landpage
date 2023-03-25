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
        <h5 className="schedule-flight-text">Schedule your Flight</h5>
        <form action="" className="schedule-info">
          <label for="email" className="input-label">
            Email
          </label>
          <input type="email" placeholder="Enter your Email" id="email" />
          <label for="name" className="input-label">
            Name
          </label>
          <input type="text" placeholder="Enter your Name" id="name" />
        </form>
      </div>
    </div>
  );
};

export default Schedule;
