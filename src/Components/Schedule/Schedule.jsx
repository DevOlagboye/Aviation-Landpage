import React, { useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Schedule.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { DatePicker } from "antd";
import leftGradient from "../../Assets/images/gradient-left.png";
import rightGradient from "../../Assets/images/gradient-right.png";
import logoImg from "../../Assets/images/logo.png";
import { message } from "antd";
import Select from "react-select";
import countryList from "react-select-country-list";
import { validEmail } from "./regex";
import { db } from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Schedule = () => {
  const [value, setValue] = useState("");
  const [traveltoValue, setTravelto] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const departureDateRef = useRef();
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [emailError, setEmailError] = useState(null);
  let selectRef = useRef();
  let secondSelectRef = useRef();
  let errorRef = useRef();
  let emailRef = useRef();
  const options = useMemo(() => countryList().getData(), []);
  const [messageApi, contextHolder] = message.useMessage();

  const changeDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const changeHandler = (value) => {
    setValue(value);
  };

  const travelTo = (traveltoValue) => {
    setTravelto(traveltoValue);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const schedulesCollectionRef = collection(db, "schedules");
  const selectHandle = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(value.label);
    console.log(traveltoValue.label);
    console.log(departureDate);
    console.log(returnDate);
    selectRef.current.value = value;
    secondSelectRef.current.value = traveltoValue;
    emailRef.value = email;
    if (emailRef.current.value === "") {
      emailRef.current.style = "border: 1.5px solid red";
    } else if (selectRef.current.value === "") {
      selectRef.current.controlRef.style = "border: 1.5px solid red";
    } else if (secondSelectRef.current.value === "") {
      secondSelectRef.current.controlRef.style = "border: 1.5px solid red";
    } else {
      console.log((secondSelectRef.current.value = traveltoValue));
      selectRef.current.controlRef.style = "border: 1.5px solid blue";
      secondSelectRef.current.controlRef.style = "border: 1.5px solid blue";
      emailRef.current.style = "border: 1.5px solid blue";
      try {
        await addDoc(schedulesCollectionRef, {
          email: email,
          name: name,
          flyingFrom: value.label,
          flyingTo: traveltoValue.label,
          departureDate: departureDate,
          returnDate: returnDate,
        });
      } catch (err) {
        console.error(err);
      }
      messageApi
        .open({
          type: "loading",
          content: "Scheduling your Flight...",
          duration: 2.5,
        })
        .then(() => message.success("Flight Scheduled Successfully", 2.5));
      // .then(() => navigate("/"));
    }
  };
  const validateEmail = () => {
    if (!validEmail.test(email)) {
      setEmailError(true);
      errorRef.current.innerHTML = "Invalid Email";
      errorRef.current.style = "color: red";
    } else {
      setEmailError(false);
      errorRef.current.innerHTML = "Looks Good!";
      errorRef.current.style = "color: blue";
    }
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
        <AiOutlineArrowLeft className="back-icon" onClick={handleNavigate} />
        <h5 className="schedule-flight-text">Schedule your Flight</h5>
        <form action="" className="schedule-info">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            id="email"
            value={email}
            ref={emailRef}
            onKeyUp={validateEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error" ref={errorRef}></p>
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="from" className="input-label">
            Flying From
          </label>
          <Select
            ref={selectRef}
            id="from"
            className="select-option"
            required
            placeholder={"Where are you traveling From"}
            options={options}
            value={value}
            onChange={changeHandler}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
                border: "3px solid #e0effe",
                height: "50px",
                marginTop: "10px",
                marginBottom: "20px",
                borderRadius: "8px",
              }),
            }}
          />
          <label htmlFor="to" className="input-label">
            Flying to
          </label>
          <Select
            ref={secondSelectRef}
            id="to"
            className="select-option"
            required
            placeholder={"Where are you going to"}
            options={options}
            value={traveltoValue}
            onChange={travelTo}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
                border: "3px solid #e0effe",
                borderRadius: "8px",
                height: "50px",
                marginTop: "10px",
                marginBottom: "20px",
              }),
            }}
          />
          <div className="dates">
            <div className="departure-date">
              <label htmlFor="departure-date" className="date-label">
                Departure Date
              </label>
              <DatePicker
                id="departure-date"
                onChange={(date, dateString) => {
                  setDepartureDate(dateString);
                }}
                placeholder={"YY-MM-DD"}
              />
            </div>
            <div className="return-date">
              <label htmlFor="return-date" className="date-label">
                Return Date
              </label>
              <DatePicker
                id="return-date"
                onChange={(date, dateString) => {
                  setReturnDate(dateString);
                }}
                placeholder={"YY-MM-DD"}
              />
            </div>
          </div>
          {contextHolder}
          <button
            type="submit"
            className="schedule-button"
            onClick={selectHandle}
          >
            Schedule Flight
          </button>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
