import useWebAnimations, { fadeInRight, fadeInUp} from "@wellyshen/use-web-animations";
// import React, {useRef} from "react";
import { NavLink } from "react-router-dom";

// import c1 from '../images/c1.gif';

const Common = (props) => {

  const h1ref = useWebAnimations({...fadeInUp})
  const h2ref =  useWebAnimations({
    ...fadeInUp,
  animationOptions: {
    delay:500,
    duration: 1000,
    fill: "both",
  }    
  })
  const btnref =  useWebAnimations({...fadeInUp,
    animationOptions: {
      delay:800,
      duration: 1000,
      fill: "both",
    }})
  const imgref =  useWebAnimations({...fadeInRight,
    animationOptions: {
      delay:500,
      duration: 1000,
      fill: "both",
      overflow: 'hidden'
    }})

  return (
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 ref={h1ref.ref}>
                    {props.name}
                    <strong className="brand-name">SK Tutorials</strong>
                  </h1>
                  <h2 className="my-3" ref={h2ref.ref}>
                    We are the of talented developer making websites
                  </h2>
                  <div className="mt-3" ref={btnref.ref}>
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img" ref={imgref.ref}>
                  <img src={props.imgsrc} className="img-fluid animated" alt="Home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Common;
