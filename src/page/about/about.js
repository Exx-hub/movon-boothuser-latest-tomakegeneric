import React from "react";
import "./about.css";

import { Image } from "antd";
import { config } from "../../config";

import aboutLogo from "../../assets/images/aboutLogo.png";
function About() {
  return (
    <div className="about-container">
      <div className="image-build-div">
        <Image preview={false} src={aboutLogo} alt="" />
        <div className="build-div">version {config.version.build}</div>
      </div>
      <div className="about-text">
        Nisi laborum esse officia aliqua fugiat anim eu culpa. Ex aute voluptate
        cupidatat aute incididunt quis eu sint. Nostrud excepteur exercitation
        nulla sunt proident est aliquip proident occaecat. Mollit incididunt
        adipisicing mollit ad incididunt ea do quis. Eiusmod duis occaecat duis
        ipsum. Proident excepteur deserunt occaecat adipisicing. Nisi laborum
        esse officia aliqua fugiat anim eu culpa. Ex aute voluptate cupidatat
        aute incididunt quis eu sint. Nostrud excepteur exercitation nulla sunt
        proident est aliquip proident occaecat. Mollit incididunt adipisicing
        mollit ad incididunt ea do quis. Eiusmod duis occaecat duis ipsum.
        Proident excepteur deserunt occaecat adipisicing.
      </div>
      <div className="about-footer">
        <span>
          ©2022 movon.com.ph | v.{config.version.build} | IOT Instant Online
          Transport | All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default About;
