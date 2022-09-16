import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";

export default function About() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div id="container">
      <div
        class={isMatch ? "grid-container-mobile" : "grid-container"}
        style={{ height: "100%" }}
      >
        <div style={{ height: "100%" }} class="grid-item grid-item-1"></div>
        <div class="grid-item grid-item-2">
          <h1 class={isMatch ? "h1_tag_mobile" : "h1_tag"}>About</h1>

          <div>
            <p class={isMatch ? "project_text_mobile" : "project_text"}>
              My name is Alex Buchanan and I'm a UX Researcher and Web Developer
              based in Los Angeles. I'm passionate about designing and building
              digital products and I have over 8 years of professional
              experience in research.
              <br />
              <br />
              My background in market and customer insights research allows me
              to ensure that all my projects are built using a data driven
              process which eliminates guesswork and keeps the end user always
              in mind.
            </p>
          </div>
        </div>
        <div class="grid-item grid-item-3"></div>
      </div>
    </div>
  );
}
