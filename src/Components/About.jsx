import React from "react";
// import { NavLink } from "react-router-dom";
import c2 from "../images/c2.gif";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={c2}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
