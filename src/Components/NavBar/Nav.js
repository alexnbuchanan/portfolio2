import React, { useRef, useEffect, useState } from "react";
import "./Nav.css";
// import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [isScrolled, setScrolled] = useState(true);
  const navigateToHome = () => {
    // navigate to /contacts
    navigate("/", {
      state: {
        scrolled: isScrolled,
      },
    });
  };

  // useEffect(() => {
  //   if (isScrolled) {
  //     scrollFun("projects");
  //   }
  // }, []);

  return (
    <div>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <button onClick={() => navigateToHome()}>Projects</button>
          {/* <button onClick={navigateToHome}>Projects</button> */}
        </li>
      </ul>
    </div>
  );
}

/* https://www.educative.io/answers/how-to-create-a-navbar-using-css */
