import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";

export default function Social() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div id="container" style={{}}>
      <div
        class={isMatch ? "grid-container-mobile" : "grid-container"}
        style={{ height: "100%" }}
      >
        <div style={{ height: "100%" }} class="grid-item grid-item-1"></div>
        <div class="grid-item grid-item-2">
          <h1 class={isMatch ? "h1_tag_mobile" : "h1_tag"}>Social Media App</h1>
          <div>
            <p class={isMatch ? "project_text_mobile" : "project_text"}>
              I built a social media app which allows users to create an
              authenticated profile and post to a feed. Users also have the
              ability to upload photos as well as like and comment on other
              posts.
              <br /> <br />
              This is the first project in which I used a backend server
              (Firebase) to manage user data.
              <br /> <br />I used the Cloundinary API to manage photo uploads.
              <br /> <br />
              This is the first project in which I used Redux which taught me
              the importance of centralized state management.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "interMedium" }}>Technologies Used</h2>
            <p>Firebase Realtime Database</p>
            <p>node.js</p>
            <p>Cloudinary</p>
            <p>Material UI</p>
          </div>
          <h2 style={{ fontFamily: "interMedium" }}>Links</h2>
          <div>
            <p>
              <a href="https://dynamic-cuchufli-630c9a.netlify.app/">
                Final project
              </a>{" "}
              (test@test.com, password: password123)
            </p>
          </div>

          <a href="https://github.com/alexnbuchanan/social_client">Github</a>
          <br />
          <br />
        </div>
        <div class="grid-item grid-item-3"></div>
      </div>
    </div>
  );
}
