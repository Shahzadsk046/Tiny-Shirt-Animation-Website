import React from "react";
import { NavLink } from "react-router-dom";
import c1 from "../images/c1.gif";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={c1}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
