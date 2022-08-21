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

  // return (
  //   <div>
  // <ul>
  //   <li>
  //     <a href="#">About</a>
  //   </li>
  //   <li>
  //     <button onClick={() => navigateToHome()}>Projects</button>
  //     {/* <button onClick={navigateToHome}>Projects</button> */}
  //   </li>
  // </ul>
  //   </div>
  // );

  const changeRoute = (event) => {
    //document.body.style.backgroundColor = "#FFFFFF";
    //history.push("/" + route);
    clearElements();
    window.scrollTo(0, 0);
  };

  return (
    <div id="container" style={{}}>
      <div class="grid-container" style={{ height: "100%" }}>
        <div
          style={{
            height: "100%",
          }}
          class="grid-item grid-item-1"
        >
          <ul style={{ display: "table", margin: "0 auto" }}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/"
              onClick={changeRoute}
            >
              <li>
                <a>Alex Buchanan</a>
              </li>
            </Link>
          </ul>
        </div>
        <div class="grid-item grid-item-2"></div>
        <div
          class="grid-item grid-item-3"
          style={{
            height: "100%",
          }}
        >
          <ul style={{ display: "table", margin: "0 auto" }}>
            <li>
              <button
                onClick={() => navigateToHome()}
                style={{
                  color: "inherit",
                  border: "none",
                  padding: "14px 16px 14px 16px",
                  font: "inherit",
                  outline: "inherit",
                  cursor: "pointer",
                  marginRight: "10px",
                  background: "inherit",
                }}
              >
                Projects
              </button>
              {/* <button onClick={navigateToHome}>Projects</button> */}
            </li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
              onClick={changeRoute}
            >
              <li>
                <a>About</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* https://www.educative.io/answers/how-to-create-a-navbar-using-css */
