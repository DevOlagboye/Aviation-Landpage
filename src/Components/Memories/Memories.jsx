import React from "react";
import "./Memories.css";
import { memoriesImages } from "./data";

const Memories = () => {
  return (
    <div className="memories-container">
      <h4>Make Memories With Us</h4>
      <div className="memories-cards">
        {memoriesImages.map((Memory) => (
          <div className="memories-card" key={Memory.id}>
            <img src={Memory.memoryImage} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;
