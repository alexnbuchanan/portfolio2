import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import ProjectsMobile from "./ProjectsMobile.js";

export default function Home(props) {
  const backColor = useRef();
  // const projectText = useRef();
  const location = useLocation();

  console.log("LOCATION", location.state?.scrolled);

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

    if (location.state?.scrolled) {
      scrollFun("projects");
    }
  }, []);

  const scrollFun = (id) => {
    document.querySelector(`#` + id)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    // document.getElementById("#" + id).scrollTop += 1000;
    // You can do this way
    // const elId = "#id" + id;
    // const element = document.querySelector(elId);
    // element.scrollIntoView({ behavior: "smooth" });
  };

  if (document.querySelector(`#projects`) && location.state?.scrolled) {
    scrollFun("projects");
  }

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
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      <div id="container" style={{ height: "calc(100vh - 50px)" }}>
        <div className="contents" style={{ height: "100%" }}>
          <div className={isMatch ? "mainText-Mobile" : "mainText"}>
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
                    fontFamily: "ptMono",
                  }}
                >
                  ALEX BUCHANAN
                </u>
                <img src="/images/grand_canyon.png" />
              </a>
            </div>{" "}
            IS A WEB DEVELOPER & UX RESEARCHER BASED IN <br />
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
                    fontFamily: "ptMono",
                  }}
                >
                  LOS ANGELES, CA
                </u>
                <img src="/images/LA_Freeway.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isMatch ? (
        <div ref={backColor} id="projects">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/soundspace"
            onClick={changeRoute}
          >
            <h2 className="fontStyleMobile">Soundspace App</h2>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/soundspaceux"
            onClick={changeRoute}
          >
            <h2 className="fontStyleMobile"> Soundspace UX/UI</h2>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/social"
            onClick={changeRoute}
          >
            <h2 className="fontStyleMobile">Social Media App</h2>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/ecomm"
            onClick={changeRoute}
          >
            <h2 className="fontStyleMobile">Ecommerce App</h2>
          </Link>
        </div>
      ) : (
        // <ProjectsMobile backColor={backColor} changeRoute={changeRoute} />
        <div ref={backColor} id="projects">
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
      )}
    </div>
  );
}
