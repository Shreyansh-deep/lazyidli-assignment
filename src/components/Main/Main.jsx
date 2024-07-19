import React, { useState } from "react";
import "./Main.css";
import { IoMdTrophy } from "react-icons/io";
import { FaStopwatch } from "react-icons/fa6";
import data from "../../data.json";
import Carousel from "../../utils/carousel/carousel";
import AddScore from "../AddScore/AddScore";

const Main = () => {
  const [toggleAdd, setToggleAdd] = useState(false);
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
      <div className="break"></div>
      {toggleAdd ? (
        <AddScore setToggleAdd={setToggleAdd} />
      ) : (
        <div className="addScore-btn-container">
          <button onClick={() => setToggleAdd(true)} className="addScore-btn">Add Score</button>
        </div>
      )}
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
            <div className="number1">1</div>
            <p>Anjum</p>
          </div>
          <div className="time-container">
            <p>₹50000</p>
            <p>00:00:00</p>
          </div>
        </div>
        <div className="second-row">
          <div className="name-container">
            <div className="number2">2</div>
            <p>Raaju</p>
          </div>
          <div className="time-container">
            <p>₹5000</p>
            <p>00:00:00</p>
          </div>
        </div>
        <div className="third-row">
          <div className="name-container">
            <div className="number3">3</div>
            <p>Shyam</p>
          </div>
          <div className="time-container">
            <p>₹500</p>
            <p>00:00:00</p>
          </div>
        </div>
        {data.map((item) => {
          return (
            <div className="row">
              <div className="name-container">
                <div className="numberX">{item.id + 3}</div>
                <p>{item.name}</p>
              </div>
              <div className="time-container">
                <p>{item.time}</p>
              </div>
            </div>
          );
        })}
        <div className="recent-entry-container">
          <p className="recent-entry-text">RECENT ENTRY</p>
          <div
            className="row"
            style={{
              boxShadow: "0 0 4px #2cced6, 0 0 10px #2cced6, 0 0 2px #2cced6",
            }}
          >
            <div className="name-container">
              <div className="numberX">34</div>
              <p>Kilwish</p>
            </div>
            <div className="time-container">
              <p>00:00:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        {" "}
        <Carousel />
      </div>
    </div>
  );
};

export default Main;
