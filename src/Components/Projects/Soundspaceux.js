import React, { useState } from "react";
import PopUpModal from "./PopUpModal.js";

export default function Soundspaceux() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [imgIndex, setImgIndex] = useState("");

  return (
    <div id="container" style={{}}>
      <div class="grid-container" style={{ height: "100%" }}>
        <div style={{ height: "100%" }} class="grid-item grid-item-1"></div>
        <div class="grid-item grid-item-2">
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
            <img
              src="/images/competitive_analysis2.png"
              className="visibleImage"
              width="900px"
              alt=""
              onClick={() => {
                setOpen(true), setImgIndex(0);
              }}
            />
            {imgIndex === 0 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/competitive_analysis2.png"}
              />
            )}
          </div>
          <div>
            <h4>User Survey</h4>
            <p>
              I conducted a user survey in order to better understand my target
              audience (musicians who rent rehearsal spaces) and identify any
              pain points in their current experience renting rehearsal spaces.
              <br />
              <br />
              The biggest takeaways are that a fifth of those who currently rent
              a rehearsal space are unsatisfied with the security, equipment and
              soundproofing available at their current location. Furthermore, of
              those who currently don’t rent a rehearsal space, 50% note cost as
              the biggest barrier.
            </p>
            <img
              src="/images/user_surveys.png"
              className="visibleImage"
              width="800px"
              alt=""
              onClick={() => {
                setOpen(true), setImgIndex(1);
              }}
            />
            {imgIndex === 1 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/user_surveys.png"}
              />
            )}
          </div>
          <div>
            <h4>User Personas</h4>
            <p>
              Using the user research, I created user personas to represent my
              target audience. These personas helped me focus on the end user
              and keep them top of mind when designing the product. I wanted to
              be sure that in the end, the final product would truly address
              their needs.
            </p>
            <img
              src="/images/user_personas.png"
              className="visibleImage"
              width="900px"
              alt=""
              onClick={() => {
                setOpen(true), setImgIndex(2);
              }}
            />
            {imgIndex === 2 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/user_personas.png"}
              />
            )}
          </div>
          <div>
            <h4>User Stories</h4>
            <p>
              With the user research and personas, I mapped out the most
              important goals that the target audience would want to accomplish
              while using this product. The user stories helped me outline all
              of the possible features this app would need to cover as well as
              organize and prioritize them by importance.
            </p>
            <img
              src="/images/user_stories.png"
              className="visibleImage"
              width="800px"
              alt=""
              onClick={() => {
                setOpen(true), setImgIndex(3);
              }}
            />
            {imgIndex === 3 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/user_stories.png"}
              />
            )}
          </div>
          <div>
            <h4>User Flows</h4>
            <p>
              Focusing first on the most important user stories, I created user
              flows to map out each process. My goal was to keep each step as
              short as possible so that the final product is simple and easy to
              use.
            </p>

            <img
              src="/images/user_flows.png"
              className="visibleImage"
              width="900px"
              alt=""
              onClick={() => {
                setOpen(true), setImgIndex(4);
              }}
            />
            {imgIndex === 4 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/user_flows.png"}
              />
            )}
          </div>
          <div>
            <h4>Site Map</h4>

            <div style={{ overflow: "auto" }}>
              <div style={{ float: "right", marginRight: "150px" }}>
                <img
                  src="/images/site_map.png"
                  className="visibleImage"
                  width="500px"
                  alt=""
                  onClick={() => {
                    setOpen(true), setImgIndex(5);
                  }}
                />
                {imgIndex === 5 && (
                  <PopUpModal
                    open={open}
                    handleClose={handleClose}
                    img={"/images/site_map.png"}
                    widthType={"site_map"}
                  />
                )}
              </div>

              <p style={{ paddingTop: "100px", width: "40%" }}>
                With the user stories as guidance, I created a site map to
                outline each screen of the design. I made sure that each user
                story was represented by a screen. <br />
                <br />
                This site map provided a blueprint for the final product, from
                here I could now start building each individual screen…
              </p>
            </div>
          </div>

          <div>test6</div>
          <div>test6</div>
          <div>test6</div>
        </div>

        <div class="grid-item grid-item-3"></div>
      </div>
    </div>
  );
}
