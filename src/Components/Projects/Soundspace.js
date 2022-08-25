import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";

export default function Soundspace() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(theme, isMatch);

  return (
    <div id="container">
      <div
        class={isMatch ? "grid-container-mobile" : "grid-container"}
        style={{ height: "100%" }}
      >
        <div style={{ height: "100%" }} class="grid-item grid-item-1"></div>
        <div class="grid-item grid-item-2">
          <h1
            style={{
              fontFamily: "interMedium",
              fontSize: "75px",
              marginTop: "100px",
            }}
          >
            Soundspace
          </h1>

          <div>
            <p style={{ width: "60%" }}>
              Soundspace is an app that provides an online rental marketplace
              for hosting and booking spaces with musical instruments and
              equipment.
              <br />
              <br />
              Soundspace started off as a UX/UI project in which I was
              challenged to design an app using a UX design process. After
              completing the project, I became interested in building out the UX
              design prototype into a functioning app.
              <br />
              <br />
              The biggest challenge of this project was integrating the Map API,
              which required me to thoroughly study the documentation provided.
              Details such as retrieving GPS coordinate data, adding pins, and
              customizing the map was a challenge. However it's rewarding to see
              my UX project come to life as a functioning prototype.
              <br />
              <br />
              Although the app isn't a 1 to 1 replica of the original UI design,
              I'm still happy with the outcome. I hope to contiune to develop my
              design coding skills by contiuning to work on this app by refining
              the UI to more closely resemble the original high fidelity
              prototype.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "interMedium" }}>Technologies Used</h2>
            <p>Firebase Realtime Database</p>
            <p>Mapbox</p>
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
