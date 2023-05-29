import React from "react";
import "./navbar.css";
function navbar() {
  return (
    <div className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt=""
        className="navimg"
      />
      <h2 className="navh2">
        <a href="#bann">HOME</a>
      </h2>
      <h2 className="navh2">
        <a href="#act">ACTION</a>
      </h2>
      <h2 className="navh2">
        <a href="#netflixorig">ORIGINALS</a>
      </h2>
      <h2 className="navh2">
        <a href="#comedy">COMEDY</a>
      </h2>
      <select name="" id="">
        <option value="">ENGLISH</option>
        <option value="">HINDI</option>
      </select>
      <button className="sign-in">SIGN-IN</button>
    </div>
  );
}

export default navbar;
