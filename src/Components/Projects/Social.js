import React from "react";

export default function Social() {
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
            Social Media App
          </h1>

          <div>
            <p style={{ width: "60%" }}>
              I built a social media app which allows users to create an
              authenticated profile and post to a feed. Users also have the
              ability to upload photos as well as like and comment on other
              posts.
              <br /> <br />
              This is the first project in which I used a backend server
              (Firebase) to manage user data.
              <br /> <br />I used the Cloundinary API to manage photo uploads.
              <br /> <br />
              This is is the first project in which I used Redux which taught me
              the importance of centralized state management.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "interMedium" }}>Technologies Used</h2>
            <p>Firebase Realtime Database</p>

            <p>Cloudinary</p>
            <p>Material UI</p>
          </div>

          <h2 style={{ fontFamily: "interMedium" }}>Link</h2>
        </div>
        <div class="grid-item grid-item-3"></div>
      </div>
    </div>
  );
}
