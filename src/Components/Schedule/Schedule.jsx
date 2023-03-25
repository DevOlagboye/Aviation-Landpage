import React, { useState, useMemo } from "react";
import "./Schedule.css";
import leftGradient from "../../Assets/images/gradient-left.png";
import rightGradient from "../../Assets/images/gradient-right.png";
import logoImg from "../../Assets/images/logo.png";
import Select from "react-select";
import countryList from "react-select-country-list";

const Schedule = () => {
  const [value, setValue] = useState("");
  const [traveltoValue, setTravelto] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const travelTo = (traveltoValue) => {
    setTravelto(traveltoValue);
  };
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
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input type="email" placeholder="Enter your Email" id="email" />
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input type="text" placeholder="Enter your Name" id="name" />
          <label htmlFor="from">Flying From</label>
          <Select
            id="from"
            className="select-option"
            required
            placeholder={"Where are you going"}
            options={options}
            value={value}
            onChange={changeHandler}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
                border: "3px solid #e0effe",
                height: "52px",
                marginTop: "20px",
              }),
            }}
          />
          <label htmlFor="to">Flying to</label>
          <Select
            id="from"
            className="select-option"
            required
            placeholder={"Where are you going"}
            options={options}
            value={traveltoValue}
            onChange={travelTo}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
                border: "3px solid #e0effe",
                height: "52px",
                marginTop: "20px",
              }),
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Schedule;
