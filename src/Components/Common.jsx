import useWebAnimations, { fadeInLeft} from "@wellyshen/use-web-animations";
import React, {useRef} from "react";
import { NavLink } from "react-router-dom";

// import c1 from '../images/c1.gif';

const Common = (props) => {


  // const {keyframes, animationOptions} = fadeInLeft;
  // const {ref} = useWebAnimations({
    // ...h1ref,
    // ...h2ref,
    // ...btnref,
    // keyframes:[
    //   ...keyframes,
    // ],
    // animationOptions:{
    //   ...animationOptions,
      // duration: animationOptions.duration * 6,
      // easing: 'ease-in-out',
    // },
    // keyframes:[
    //   // {transform: "translateX(500px)"},
    //   {transform: "translate(0,0)"},
    //   {transform: "translate(500px,0)"},
    //   // {transform: "translateX(500px)"},
    // ],
    // animationOptions:{
    //   duration:1000,
    //   // iterations: Infinity,
    //   // direction: "up-down",
    //   // easing: "ease-in-out",
    // }
    // ...bounce
  //   ...fadeInLeft,
  // })
  const h1ref = useWebAnimations({...fadeInLeft})
  const h2ref =  useWebAnimations({
    ...fadeInLeft,
  animationOptions: {
    delay:500,
    duration: 1000,
    fill: "forwards",
    
    
  }    
  })
  const btnref =  useWebAnimations({...fadeInLeft,
    animationOptions: {
      delay:1000,
      duration: 1000,}})

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

                <div className="col-lg-6 order-1 order-lg-2 header-img">
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
