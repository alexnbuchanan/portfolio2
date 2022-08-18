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
          <h1
            style={{
              fontFamily: "interMedium",
              fontSize: "75px",
              marginTop: "100px",
            }}
          >
            Soundspace
          </h1>
          <p>
            {" "}
            I designed an app called Soundspace which provides an online rental
            marketplace for booking spaces with musical instruments and
            equipment. I oversaw each step of the design process, from ideation
            to the final prototype.{" "}
          </p>
          <hr
            class="solid"
            style={{
              marginTop: "50px",
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <br />
          <h2
            style={{
              fontSize: "50px",
              fontFamily: "interMedium",
            }}
          >
            Process...
          </h2>
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              Problem
            </h4>

            <p>
              Many musicians rent rehearsal spaces since practicing at home
              isn’t an option due to the noise level. However, there is
              currently no centralized platform that allows musicians to easily
              search for, and book, rehearsal spaces in their area.
              <br />
              <br />
              Many property owners have available space and instruments that
              could be used by musicians. However, there are currently no
              platforms that allow property owners to connect with, and rent
              out, this space to musicians.
            </p>
          </div>
          <br />
          <div>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "right", marginRight: "150px" }}>
                <img
                  src="/images/solution2.png"
                  className="visibleImage"
                  width="250px"
                  alt=""
                  onClick={() => {
                    setOpen(true), setImgIndex(99);
                  }}
                />
                {imgIndex === 99 && (
                  <PopUpModal
                    open={open}
                    handleClose={handleClose}
                    img={"/images/solution2.png"}
                    widthType={"solution2"}
                  />
                )}
                <div
                  style={{
                    fontSize: "14px",
                    fontFamily: "interLight",
                    color: "#8F8F8F",
                  }}
                >
                  Click here to view{" "}
                  <a
                    href="https://projects.invisionapp.com/share/4AUF1VYM2ND#/screens"
                    style={{ color: "#8F8F8F" }}
                  >
                    Prototype
                  </a>
                </div>
              </div>
              <h4
                style={{
                  fontSize: "30px",
                  fontFamily: "interMedium",
                }}
              >
                Solution
              </h4>
              <p style={{ marginTop: "50px" }}>
                Soundspace was created to…
                <br />
                <br />
                Provide a centralized platform that allows musicians to search
                and compare a range of options so they can book the rehearsal
                space that best fits their needs.
                <br />
                <br />
                Allow property owners to rent their available space (along with
                instruments) to musicians.
                <p />
              </p>
            </div>
          </div>
          <br />
          <br />
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              Competitive Analysis
            </h4>
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
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/competitive_analysis2.png"
                className="visibleImage"
                width="900px"
                alt=""
                onClick={() => {
                  setOpen(true), setImgIndex(0);
                }}
              />
            </div>
            {imgIndex === 0 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/competitive_analysis2.png"}
              />
            )}
            <br />
            <div
              style={{
                fontSize: "14px",
                fontFamily: "interLight",
                color: "#8F8F8F",
              }}
            >
              Click here to view{" "}
              <a
                href="https://drive.google.com/open?id=1GJCUlfazlfU6Y8Xu_WYCOMX-9OCrzHMg"
                style={{ color: "#8F8F8F" }}
              >
                full analysis
              </a>
            </div>
          </div>
          <br /> <br />
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              User Survey
            </h4>
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
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/user_surveys.png"
                className="visibleImage"
                width="800px"
                alt=""
                onClick={() => {
                  setOpen(true), setImgIndex(1);
                }}
              />
            </div>
            {imgIndex === 1 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/user_surveys.png"}
              />
            )}
            <br />
            <div
              style={{
                fontSize: "14px",
                fontFamily: "interLight",
                color: "#8F8F8F",
              }}
            >
              Click here to view{" "}
              <a
                href="https://drive.google.com/open?id=18HxykQoQDB-Irwc5BpB7ARvYBVkBH7pw"
                style={{ color: "#8F8F8F" }}
              >
                full user survey report
              </a>
            </div>
          </div>
          <br /> <br />{" "}
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              User Personas
            </h4>
            <p>
              Using the user research, I created user personas to represent my
              target audience. These personas helped me focus on the end user
              and keep them top of mind when designing the product. I wanted to
              be sure that in the end, the final product would truly address
              their needs.
            </p>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/user_personas.png"
                className="visibleImage"
                width="900px"
                alt=""
                onClick={() => {
                  setOpen(true), setImgIndex(2);
                }}
              />
            </div>
            {imgIndex === 2 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/user_personas.png"}
              />
            )}

            <br />
            <div
              style={{
                fontSize: "14px",
                fontFamily: "interLight",
                color: "#8F8F8F",
              }}
            >
              Click here to view{" "}
              <a
                href="https://drive.google.com/open?id=1sBMet6QHLLFi0_L3RhkQuTmSD-5V9PbH"
                style={{ color: "#8F8F8F" }}
              >
                full user personas
              </a>
            </div>
          </div>
          <br /> <br />{" "}
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              User Stories
            </h4>
            <p>
              With the user research and personas, I mapped out the most
              important goals that the target audience would want to accomplish
              while using this product. The user stories helped me outline all
              of the possible features this app would need to cover as well as
              organize and prioritize them by importance.
            </p>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/user_stories.png"
                className="visibleImage"
                width="800px"
                alt=""
                onClick={() => {
                  setOpen(true), setImgIndex(3);
                }}
              />
            </div>
            {imgIndex === 3 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/user_stories.png"}
              />
            )}
            <br />
            <div
              style={{
                fontSize: "14px",
                fontFamily: "interLight",
                color: "#8F8F8F",
              }}
            >
              Click here to view{" "}
              <a
                href="https://drive.google.com/open?id=1_tZGhYfPeLnLx7jLrk5kA1i2OHgRQeP6"
                style={{ color: "#8F8F8F" }}
              >
                all user stories
              </a>
            </div>
          </div>
          <br /> <br />{" "}
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              User Flows
            </h4>
            <p>
              Focusing first on the most important user stories, I created user
              flows to map out each process. My goal was to keep each step as
              short as possible so that the final product is simple and easy to
              use.
            </p>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/user_flows.png"
                className="visibleImage"
                width="900px"
                alt=""
                onClick={() => {
                  setOpen(true), setImgIndex(4);
                }}
              />
            </div>
            {imgIndex === 4 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/user_flows.png"}
              />
            )}
            <br />
            <div
              style={{
                fontSize: "14px",
                fontFamily: "interLight",
                color: "#8F8F8F",
              }}
            >
              Click here to view{" "}
              <a
                href="https://drive.google.com/open?id=1tNREGwRdUv38aFhIF4_gRoGv0L2nZGWZ"
                style={{ color: "#8F8F8F" }}
              >
                all user flows
              </a>
            </div>
          </div>
          <br /> <br />{" "}
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              Site Map
            </h4>

            <div style={{ overflow: "auto" }}>
              <div style={{ float: "right", marginRight: "5%" }}>
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
                <br />
                <div
                  style={{
                    fontSize: "14px",
                    fontFamily: "interLight",
                    color: "#8F8F8F",
                  }}
                >
                  Click here to view{" "}
                  <a
                    href="https://drive.google.com/open?id=1tNREGwRdUv38aFhIF4_gRoGv0L2nZGWZ"
                    style={{ color: "#8F8F8F" }}
                  >
                    site map
                  </a>
                </div>
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
          <br /> <br />{" "}
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              Lo-Fi Prototype
            </h4>
            <p>
              When it came to designing each screen, I started off with sketches
              to outline my ideas. From there, I created lo-fi designs that
              could be easily altered. I obviously wasn’t focused with
              aesthetics at this stage, but rather just making sure the user
              flows were being conveyed.
            </p>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/lofi_prototype.png"
                className="visibleImage"
                width="700px"
                alt=""
                onClick={() => {
                  setOpen(true), setImgIndex(6);
                }}
              />
            </div>
            {imgIndex === 6 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/lofi_prototype.png"}
                widthType={"lofi_prototype"}
              />
            )}
            <br />
            <div
              style={{
                fontSize: "14px",
                fontFamily: "interLight",
                color: "#8F8F8F",
              }}
            >
              Click here to view{" "}
              <a
                href="https://www.figma.com/file/pYb3EdCEB7KUmwmF56leRN/Project1_WireFrames-v2?node-id=0%3A1"
                style={{ color: "#8F8F8F" }}
              >
                Lo-Fi Prototypes
              </a>
            </div>
          </div>
          <br /> <br />{" "}
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              Brand Identity
            </h4>

            <div style={{ overflow: "auto" }}>
              <div style={{ float: "right", marginRight: "5%" }}>
                <img
                  src="/images/brand_id.png"
                  className="visibleImage"
                  width="500px"
                  alt=""
                  onClick={() => {
                    setOpen(true), setImgIndex(7);
                  }}
                />
                {imgIndex === 7 && (
                  <PopUpModal
                    open={open}
                    handleClose={handleClose}
                    img={"/images/brand_id.png"}
                    widthType={"brand_id"}
                  />
                )}
                <br />
                <div
                  style={{
                    fontSize: "14px",
                    fontFamily: "interLight",
                    color: "#8F8F8F",
                  }}
                >
                  Click here to view{" "}
                  <a
                    href="https://www.figma.com/file/vpycuaMgIDLSNrgu3M5RNh/Soundspace-Style-Guide-v2?node-id=0%3A1"
                    style={{ color: "#8F8F8F" }}
                  >
                    view style guide
                  </a>
                </div>
              </div>

              <p style={{ paddingTop: "100px", width: "40%" }}>
                With the lo-fi designs in place, I needed a brand identity that
                would inform the final design of the prototype. As such, I
                created a style guide which outlined the design standards for
                this product. <br />
                <br />I went back to my initial user research and noted that my
                core audience are younger, male and into rock music. I tried to
                use colors, fonts and styles that would appeal to this
                demographic.
              </p>
            </div>
          </div>
          <br /> <br />{" "}
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              Hi-Fi Prototypes
            </h4>

            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left", marginRight: "5%" }}>
                <img
                  src="/images/highfi_prototype.png"
                  className="visibleImage"
                  width="500px"
                  alt=""
                  onClick={() => {
                    setOpen(true), setImgIndex(8);
                  }}
                />
                {imgIndex === 8 && (
                  <PopUpModal
                    open={open}
                    handleClose={handleClose}
                    img={"/images/highfi_prototype.png"}
                    widthType={"hifi"}
                  />
                )}
                <br />
                <div
                  style={{
                    fontSize: "14px",
                    fontFamily: "interLight",
                    color: "#8F8F8F",
                  }}
                >
                  Click here to view{" "}
                  <a
                    href="https://www.figma.com/file/yHLoD6zlEfw2glXOcl0Wg9/Project1---High-Fidelity-Mockups-v4?node-id=0%3A1"
                    style={{ color: "#8F8F8F" }}
                  >
                    Hi-Fi Prototypes
                  </a>
                </div>
              </div>

              <p style={{ float: "right", paddingTop: "100px", width: "40%" }}>
                With the style guide in hand, I was able to transform the lo-fi
                designs into fully realized designs. <br />
                <br />
                Throughout the design process, I made sure to keep all elements
                consistent: button sizes, colors, margins, fonts etc.
              </p>
            </div>
          </div>
          <br /> <br />{" "}
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              Prototype and User Testing
            </h4>
            <p>
              With the hi-fi prototype ready, I conduced usability tests with
              three respondents. The tests revealed blind spots and areas for
              improvement. The tests led to changes throughout my product that
              greatly improved it.
            </p>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/user_testing.png"
                className="visibleImage"
                width="1000px"
                alt=""
                onClick={() => {
                  setOpen(true), setImgIndex(9);
                }}
              />
            </div>
            {imgIndex === 9 && (
              <PopUpModal
                open={open}
                handleClose={handleClose}
                img={"/images/user_testing.png"}
                widthType={"user_testing"}
              />
            )}

            <br />
            <div
              style={{
                fontSize: "14px",
                fontFamily: "interLight",
                color: "#8F8F8F",
              }}
            >
              Click here to view{" "}
              <a
                href="https://invis.io/4AUF1VYM2ND"
                style={{ color: "#8F8F8F" }}
              >
                Prototype
              </a>
            </div>
            <div
              style={{
                fontSize: "14px",
                fontFamily: "interLight",
                color: "#8F8F8F",
              }}
            >
              Click here to view{" "}
              <a
                href="https://drive.google.com/open?id=1SUVt78bVzQbaEf9jKPN_G4v-a_2S9fCa"
                style={{ color: "#8F8F8F" }}
              >
                user testing report
              </a>
            </div>
          </div>
          <br /> <br />{" "}
          <hr
            class="solid"
            style={{
              height: ".5px",
              backgroundColor: "#D9D9D9",
              border: "none",
            }}
          />
          <div>
            <h4
              style={{
                fontSize: "30px",
                fontFamily: "interMedium",
              }}
            >
              Final Updates
            </h4>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "right", marginRight: "80px" }}>
                <img
                  src="/images/final.png"
                  className="visibleImage"
                  width="500px"
                  alt=""
                  onClick={() => {
                    setOpen(true), setImgIndex(10);
                  }}
                />
                {imgIndex === 10 && (
                  <PopUpModal
                    open={open}
                    handleClose={handleClose}
                    img={"/images/final.png"}
                    widthType={"final"}
                  />
                )}
                <br />
                <div
                  style={{
                    fontSize: "14px",
                    fontFamily: "interLight",
                    color: "#8F8F8F",
                  }}
                >
                  Click here to view{" "}
                  <a
                    href="https://drive.google.com/open?id=1SUVt78bVzQbaEf9jKPN_G4v-a_2S9fCa"
                    style={{ color: "#8F8F8F" }}
                  >
                    full User Testing Report
                  </a>
                </div>
              </div>

              <p style={{ paddingTop: "100px", width: "40%" }}>
                After conducting user tests, I had enough feedback to make my
                final updates. Some of the biggest updates included*:
                <br />
                <br />
                Making key buttons more accessible (static)
                <br />
                <br /> Removing duplicative buttons
                <br />
                <br /> Making the user review section easier to understand
                <br />
                <br />
                Making text and confirmation screens more clear
                <br />
                <br /> However a secondary round of User Testing led to one more
                major update: increasing the size of buttons (and making some
                minor color adjustments) for greater mobile accessibility.
              </p>
            </div>
            <br /> <br />{" "}
            <hr
              class="solid"
              style={{
                height: ".5px",
                backgroundColor: "#D9D9D9",
                border: "none",
              }}
            />
            <div>
              <h4
                style={{
                  fontSize: "30px",
                  fontFamily: "interMedium",
                }}
              >
                Final thoughts
              </h4>
              <p>
                I’m really happy with the way this project turned out. One of
                the biggest goals I had with this project was creating a UI that
                looks modern and fresh. I felt that my last project looked dated
                in terms of the UI and I knew I wanted to improve in this area.
                <br />
                <br />
                I was also happy that the product concept itself generated a lot
                of interest and excitement from survey takers and usability test
                respondents. I’m really happy that I was able to receive
                feedback directly from my target audience (musicians) since they
                were able to provide deep insight into their needs and pain
                points. In the end, I was able to collect so much great feedback
                which led to critical insights and improvements to the overall
                product.
                <br />
                <br />
                One mistake I think I made was not interviewing any of my user
                survey respondents. I think this would have been really valuable
                to help create better, more realized user personas and provided
                more insights. Instead, I used just my user survey data to
                create the personas, which is fine, but I think interviews would
                have made them even more real.
                <br />
                <br />
                Overall, this project reinforced the importance of testing and
                making iterative improvements to the product throughout the
                design process. Next time, I want to see if there are even more
                opportunities for testing. Looking back, I think A/B testing
                would have been valuable to determine which UI design elements
                and color palettes would have been most appealing to the target
                audience.
                <br />
                <br />
                <div style={{ fontWeight: "bold" }}>UPDATE 2022:</div> UI design
                moves quickly, reflecting again I'm already noticing that some
                elements in my design look outdated such as the rating stars. I
                would now remove this design element and just leave the 5 star
                rating average.
              </p>
            </div>
          </div>
          <br /> <br />
        </div>

        <div class="grid-item grid-item-3"></div>
      </div>
      <br /> <br />
    </div>
  );
}
