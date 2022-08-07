import React from "react";
import "./Projects.css";

export default function Ecomm() {
  return (
    <div class="grid-container">
      <div style={{ height: "100%" }} class="grid-item grid-item-1"></div>
      <div class="grid-item grid-item-2">
        <h1
          style={{
            fontFamily: "interMedium",
            fontSize: "75px",
            marginTop: "100px",
          }}
        >
          Ecommerce App
        </h1>

        <h2 style={{ fontFamily: "interMedium" }}>About</h2>
        <h2 style={{ fontFamily: "interMedium" }}>Link</h2>
      </div>
      <div class="grid-item grid-item-3"></div>
    </div>
  );
}
