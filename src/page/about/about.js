import React from "react";
import "./about.css";

import { Image } from "antd";
import { config } from "../../config";

import aboutLogo from "../../assets/images/aboutLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/count/countSlice";

function About() {
  const count = useSelector((state) => state.countState.count);
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  return (
    <div className="about-container">
      <div className="image-build-div">
        <Image preview={false} src={aboutLogo} alt="" />
        <div className="build-div">version {config.version.build}</div>
      </div>
      <div className="about-text">
        MovOn Booth User is a web app created to handle walk in client
        transactions. It is designed to accommodate those who wish to reserve
        seats in advance or select and purchase trips from bus terminals. Booth
        User App is also an alternative to using MovOn's mobile app, for getting
        guaranteed seats. Bus partners can also easily track daily reports for
        transactions and ticket purchases whether done online through the mobile
        app or done via this web app for walk-in transactions.
      </div>
      <div>Count Testing: {count}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
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
