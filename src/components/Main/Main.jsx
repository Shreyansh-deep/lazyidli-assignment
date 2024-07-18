import React from "react";
import "./Main.css";
import { IoMdTrophy } from "react-icons/io";
import { FaStopwatch } from "react-icons/fa6";

const Main = () => {
  return (
    <div className="main">
      <div className="top-bar">
        <div className="left-lines-container">
          <div className="left-line"></div>
          <div className="left-line"></div>
          <div className="left-line"></div>
        </div>
        <p className="top-bar-text">FASTEST OF TODAY</p>
        <div className="right-lines-container">
          <div className="right-line"></div>
          <div className="right-line"></div>
          <div className="right-line"></div>
        </div>
      </div>
      <div className="leader-board">
        <div className="leader-board-navbar">
          <div className="name-container-navbar">
            <IoMdTrophy />
            <p>NAME</p>
          </div>
          <div className="time-conatainer-navbar">
            <FaStopwatch />
            <p>TIME</p>
          </div>
        </div>
        <div className="first-row">
          <div className="name-container">
            <div className="number">1</div>
            <p>Anjum</p>
          </div>
          <div className="time-container">
            <p>₹50000</p>
            <p>00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
