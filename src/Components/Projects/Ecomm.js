import React from "react";
import "./Projects.css";

export default function Ecomm() {
  return (
    <div id="container" style={{}}>
      <div class="grid-container" style={{ height: "100%" }}>
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

          <div>
            <p style={{ width: "60%" }}>
              I built a e-commerce store connected with Stripe. In the process
              of building this app, I learned how to utilize local storage and
              params to route between items. I also gained experience creating a
              backend server to host the data for the store items.
              <br />
              <br /> I also integrated Stripe into the app to handle purchases
              and utilized material UI to create a clean UI.
              <br />
              <br />
              GSAP animations were added to the homepage to create a more fun
              and dynamic user experience.
              <br />
              <br />
              Looking back, I realize I can improve this project by using better
              naming conventions to keep my code organized and legible. I made
              sure to do this in subsequent projects.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "interMedium" }}>Technologies Used</h2>
            <p>Stripe</p>
            <p>GSAP</p>
            <p>Material UI</p>
          </div>

          <h2 style={{ fontFamily: "interMedium" }}>Link</h2>
        </div>
        <div class="grid-item grid-item-3"></div>
      </div>
    </div>
  );
}
