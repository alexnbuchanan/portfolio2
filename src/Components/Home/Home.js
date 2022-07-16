import React, { useState, useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    const items1 = document.querySelectorAll(".item1");
    const items2 = document.querySelectorAll(".item2");

    items1.forEach((el) => {
      const image = el.querySelector("img");

      el.addEventListener("mouseenter", (e) => {
        gsap.to(image, { autoAlpha: 1 });
      });

      el.addEventListener("mouseleave", (e) => {
        gsap.to(image, { autoAlpha: 0 });
      });

      el.addEventListener("mousemove", (e) => {
        gsap.set(image, { x: e.offsetX - 200 });
      });
    });

    items2.forEach((el) => {
      const image = el.querySelector("img");

      el.addEventListener("mouseenter", (e) => {
        gsap.to(image, { autoAlpha: 1 });
      });

      el.addEventListener("mouseleave", (e) => {
        gsap.to(image, { autoAlpha: 0 });
      });

      el.addEventListener("mousemove", (e) => {
        gsap.set(image, { x: e.offsetX - -500 });
      });
    });
  }, []);

  grained("#container", {});

  return (
    <div id="container" style={{ height: "calc(100vh - 50px)" }}>
      <div class="contents" style={{ height: "100%" }}>
        <div className="mainText">
          <div className="item1" style={{ display: "inline" }}>
            <img src="/images/zlatan.jpg" />
            <u style={{ textDecorationThickness: "1px" }}>Alex Buchanan</u>
          </div>{" "}
          is a web developer based in <br />
          <div className="item2" style={{ display: "inline" }}>
            <img className="tiger" src="/images/la_city_hall.jpg" />
            <div style={{ float: "right" }}>
              <u style={{ textDecorationThickness: "1px" }}>Los Angeles, CA</u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
