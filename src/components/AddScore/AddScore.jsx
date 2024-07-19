import React, { useState } from "react";
import "./AddScore.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddScore = ({ setToggleAdd, data, setData, setRecentEntry }) => {
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
      const newData = {
        id: data.length + 1,
        name,
        time,
      };
      setRecentEntry(newData)
      const updatedData = [...data, newData];
      setData(
        updatedData.sort((a, b) => {
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
