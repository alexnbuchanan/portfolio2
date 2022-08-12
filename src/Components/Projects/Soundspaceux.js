import React from "react";

export default function Soundspaceux() {
  return (
    <div id="container" style={{}}>
      <div class="grid-container" style={{ height: "100%" }}>
        <div style={{ height: "100%" }} class="grid-item grid-item-1"></div>
        <div class="grid-item grid-item-2">
          <img
            src="/images/competitive_analysis.png"
            className="visibleImage"
            alt=""
          />

          <h1>Soundspace UX/UI</h1>

          <p>
            {" "}
            I designed an app called Soundspace which provides an online rental
            marketplace for booking spaces with musical instruments and
            equipment. I oversaw each step of the design process, from ideation
            to the final prototype.{" "}
          </p>

          <div>
            {" "}
            <h4 style={{ width: "60%" }}>Problem</h4>
            <ol>
              <li>
                Many musicians rent rehearsal spaces since practicing at home
                isn’t an option due to the noise level. However, there is
                currently no centralized platform that allows musicians to
                easily search for, and book, rehearsal spaces in their area.
              </li>

              <li>
                Many property owners have available space and instruments that
                could be used by musicians. However, there are currently no
                platforms that allow property owners to connect with, and rent
                out, this space to musicians.
              </li>
            </ol>
          </div>
          <div>
            {" "}
            <h4 style={{ width: "60%" }}>Solution</h4>
            <p>Soundspace was created to…</p>
            <p>
              1. Provide a centralized platform that allows musicians to search
              and compare a range of options so they can book the rehearsal
              space that best fits their needs.
            </p>
            <p>
              2. Allow property owners to rent their available space (along with
              instruments) to musicians.
            </p>
          </div>
          <h2>Process</h2>
          <div>
            <h4>Competitive Analysis</h4>
            <p>
              Through a competitive analysis, I discovered that there is only
              one direct competitor called Music Traveler. It’s a new company
              that is currently only available in a few (mostly European)
              cities.
              <br />
              <br />
              Peerspace and Splacer are also top competitors who provide a
              marketplace for booking/listing spaces, but none of them focus on
              spaces dedicated to music.
            </p>
          </div>
          <div>test4</div>
          <div>test5</div>
          <div>test6</div>
        </div>

        <div class="grid-item grid-item-3"></div>
      </div>
    </div>
  );
}
