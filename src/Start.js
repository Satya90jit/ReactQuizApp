import React, { useState } from "react";
import { Link } from "react-router-dom";

function Start() {
  const [nameOfUser, setNameOfUser] = useState("");
  const handleOnchange = (e) => {
    setNameOfUser(e.target.value);
  };
  localStorage.setItem("name", nameOfUser);

  
  return (
    <>
      <div className="container">
        <h2>Welcome </h2>
        <div className="input">
          <h3>Name</h3>
          <input
            className="startName "
            type="text"
            placeholder="Enter Your Name"
            value={nameOfUser}
            onChange={handleOnchange}
          />
        </div>
          {
            nameOfUser.trim() ? <Link className="startBtn" to={"/Quiz"}>
            Start
          </Link>: 'Enter Name to Start quiz'
          }
       
      </div>
    </>
  );
}

export default Start;
