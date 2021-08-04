import useWebAnimations, {
  fadeInUp,
} from "@wellyshen/use-web-animations";
import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  // const serviceref = useWebAnimations({
  //   ...fadeInUp,
  // })
  const headingref = useWebAnimations({
    ...fadeInUp
  })

  return (
    <>
      <div className="my-5" ref={headingref.ref}>
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="contaner-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    desc={val.desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
