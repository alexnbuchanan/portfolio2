import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const backColor = useRef();
  const projectText = useRef();

  useEffect(() => {
    gsap.to("body", {
      backgroundColor: "black",
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: backColor.current,
        start: "top center",
        markers: true,
      },
    });
    gsap.to(".fontStyle", {
      color: "#f9cdcd",
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: backColor.current,
        start: "top center",
      },
    });
  }, []);

  return (
    <div>
      <div id="container" style={{ height: "calc(100vh - 50px)" }}>
        <div class="contents" style={{ height: "100%" }}>
          <div className="mainText">
            <div className="item1" style={{ display: "inline" }}>
              <a
                aria-label="link-1"
                target="_blank"
                rel="noopener"
                draggable="false"
                className="link w-inline-block"
              >
                <u style={{ textDecorationThickness: "1px" }}>Alex Buchanan</u>
                <img src="/images/zlatan.jpg" />
              </a>
            </div>{" "}
            is a web developer based in <br />
            <div className="item2" style={{ display: "inline" }}>
              <a
                aria-label="link-1"
                target="_blank"
                rel="noopener"
                draggable="false"
                className="link w-inline-block"
              >
                <u style={{ textDecorationThickness: "1px", float: "right" }}>
                  Los Angeles, CA
                </u>
                <img src="/images/la_city_hall.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div ref={backColor} className="fontStyle">
        <h1>Soundspace App</h1>

        <h1>Social Media App</h1>

        <h1>Ecommerce site</h1>

        <h1> Soundspace UX/UI</h1>
      </div>
    </div>
  );
}
