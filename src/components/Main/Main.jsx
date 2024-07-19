import React, { useEffect, useState } from "react";
import "./Main.css";
import { IoMdTrophy } from "react-icons/io";
import { FaStopwatch } from "react-icons/fa6";
import rawData from "../../data.json";
import Carousel from "../../utils/carousel/carousel";
import AddScore from "../AddScore/AddScore";

const Main = () => {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [recentEntry, setRecentEntry] = useState({});
  const [data, setData] = useState(
    rawData.sort((a, b) => {
      const timeA = a.time.split(":").map(Number);
      const timeB = b.time.split(":").map(Number);

      if (timeA[0] < timeB[0]) return -1;
      if (timeA[0] > timeB[0]) return 1;
      if (timeA[1] < timeB[1]) return -1;
      if (timeA[1] > timeB[1]) return 1;
      if (timeA[2] < timeB[2]) return -1;
      if (timeA[2] > timeB[2]) return 1;
      return 0;
    })
  );


  useEffect(() => {
    const recentEntryIndex = data.findIndex(
      (item) => item.id === recentEntry.id
    );
    if (recentEntryIndex !== -1) {
      const rowElement = document.getElementById(`row-${recentEntryIndex + 1}`);
      rowElement.scrollIntoView({ behavior: "smooth" });
      rowElement.style.boxShadow =
        "0 0 10px #2cced6, 0 0 10px #2cced6, 0 0 10px #2cced6";
    }
  }, [recentEntry]);

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
        <AddScore
          setToggleAdd={setToggleAdd}
          setData={setData}
          data={data}
          setRecentEntry={setRecentEntry}
        />
      ) : (
        <div className="addScore-btn-container">
          <button onClick={() => setToggleAdd(true)} className="addScore-btn">
            Add Score
          </button>
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
        {data.slice(0, 3).map((item, index) => {
          return (
            <div
              id={`row-${index + 1}`}
              className={`${
                index === 0
                  ? "first-row"
                  : index === 1
                  ? "second-row"
                  : "third-row"
              }`}
            >
              <div className="name-container">
                <div className={`number${index + 1}`}>{index + 1}</div>
                <p>{item.name}</p>
              </div>
              <div className="time-container">
                <p>{item.time}</p>
              </div>
            </div>
          );
        })}
        {data.slice(3).map((item, index) => {
          return (
            <div id={`row-${index + 4}`} className="row">
              <div className="name-container">
                <div className="numberX">{index + 4}</div>
                <p>{item.name}</p>
              </div>
              <div className="time-container">
                <p>{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="carousel-container">
        {" "}
        <Carousel />
      </div>
    </div>
  );
};

export default Main;
