import React from "react";

export default function Soundspace() {
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
