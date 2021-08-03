import React from "react";
import { NavLink } from "react-router-dom";
import c1 from "../images/c1.gif";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={c1}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
