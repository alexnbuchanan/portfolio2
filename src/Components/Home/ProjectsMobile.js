import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ProjectsMobile({ backColor, changeRoute }) {
  console.log("Look here", backColor);
  return (
    <div ref={backColor} id="projects">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/soundspace"
        onClick={changeRoute}
      >
        <h2 className="fontStyle">Soundspace App</h2>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/soundspaceux"
        onClick={changeRoute}
      >
        <h2 className="fontStyle"> Soundspace UX/UI</h2>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/social"
        onClick={changeRoute}
      >
        <h2 className="fontStyle">Social Media App</h2>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/ecomm"
        onClick={changeRoute}
      >
        <h2 className="fontStyle">Ecommerce App</h2>
      </Link>
    </div>
  );
}
