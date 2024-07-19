import React, { useState } from "react";
import "./AddScore.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddScore = ({ setToggleAdd }) => {
  const [time, setTime] = useState();
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleTimeChange = (e) => {
    const inputValue = e.target.value;
    const pattern = /^(\d{2}):(\d{2}):(\d{3})$/;
    if (pattern.test(inputValue)) {
      setTime(inputValue);
      setError(null);
    } else {
      setError(true);
    }
  };

  const handleClick = () => {
    if (error || !name || !time) {
      if (!name && !time) {
        toast("Please enter both name and time");
      } else if (!name) {
        toast("Please enter a name");
      } else if (!time) {
        toast("Please enter a time");
      } else {
        toast("Invalid time format. Please use MM:SS:MMS");
      }
    } else {
      const score = { name, time };
      console.log(score);
      toast("Score added successfully!");
      setTimeout(() => {
        setToggleAdd(false);
      }, 2000);
    }
  };

  return (
    <div className="addscore">
      <input
        type="text"
        placeholder="Player Name"
        className="playerName"
        onChange={(e) => handleChange(e)}
        value={name}
      />
      <input
        type="text"
        value={time}
        onChange={handleTimeChange}
        placeholder="MM:SS:MMS"
        className="time"
      />
      <button onClick={() => handleClick()} className="addbtn">
        ADD
      </button>
      <ToastContainer />
    </div>
  );
};

export default AddScore;
