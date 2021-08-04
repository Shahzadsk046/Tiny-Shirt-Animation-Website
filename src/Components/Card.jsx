import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";
import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../images/c2.gif";

const Card = (props) => {

  const cardref = useWebAnimations({
    ...fadeInUp,
    animationOptions: {
      delay:800,
      duration: 1000,
      fill: "both"
    }
  })

  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" ref={cardref.ref}>
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt={props.title}
            width={200}
            height={250}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold ">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <NavLink to="/contact" className="btn btn-outline-success">
              Contact Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
