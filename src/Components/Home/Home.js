import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
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

  const changeRoute = (event) => {
    //document.body.style.backgroundColor = "#FFFFFF";
    //history.push("/" + route);
    clearElements();
    window.scrollTo(0, 0);
  };

  // const clearElements = () => {
  //   const arrClass = [
  //     "gsap-marker-end",
  //     "gsap-marker-start",
  //     "gsap-marker-scroller-end",
  //     "gsap-marker-scroller-start",
  //   ];
  //   const arrTags = ["loom-container", "canvas"];
  //   arrClass.forEach((item) => {
  //     const arrElem = [...document.querySelectorAll("." + item)];
  //     deleteElements(arrElem);
  //   });
  //   arrTags.forEach((item) => {
  //     const arrElem = [...document.querySelectorAll(item)];
  //     deleteElements(arrElem);
  //   });
  // };

  // const deleteElements = (arrElem) => {
  //   if (arrElem) {
  //     arrElem.forEach((element) => {
  //       element.remove();
  //     });
  //   }
  // };

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
                <u
                  style={{
                    textDecorationThickness: "1px",
                  }}
                >
                  Alex Buchanan
                </u>
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
                <u
                  style={{
                    textDecorationThickness: "1px",

                    float: "right",
                  }}
                >
                  Los Angeles, CA
                </u>
                <img src="/images/LA_Freeway.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div ref={backColor}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/soundspace"
          onClick={changeRoute}
        >
          <h2 className="fontStyle">Soundspace App</h2>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/soundspaceux"
          onClick={changeRoute}
        >
          <h2 className="fontStyle"> Soundspace UX/UI</h2>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/social"
          onClick={changeRoute}
        >
          <h2 className="fontStyle">Social Media App</h2>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/ecomm"
          onClick={changeRoute}
        >
          <h2 className="fontStyle">Ecommerce App</h2>
        </Link>
      </div>
    </div>
  );
}
