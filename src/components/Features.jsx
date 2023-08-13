import React from "react";
import photo from "../assets/Left/Photo.png";
import arrow from "../assets/right.png";
import img1 from "../assets/Left/Icon placeholder (6).png";
import img2 from "../assets/Left/Icon placeholder (7).png";
import img3 from "../assets/Left/Icon placeholder (8).png";

const Features = () => {
  return (
    <div className="my-10 bg-gray-900">
      <div className="grid lg:grid-cols-2 ">
        <div className="my-20 mx-20">
          <img src={photo} alt="" />
        </div>
        <div className="m-auto p-5">
          <div>
            <img src={img1} alt="" />
            <p className="text-white font-bold text-2xl">
              Explore ideas together
            </p>
            <p className="text-gray-400">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.{" "}
            </p>
            <p className="flex text-blue-600">
              Learn more
              <img src={arrow} alt="" />
            </p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p className="text-white font-bold text-2xl">
              Bring those ideas to life
            </p>
            <p className="text-gray-400">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.{" "}
            </p>
            <p className="flex text-blue-600">
              Learn more
              <img src={arrow} alt="" />
            </p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p className="text-white font-bold text-2xl">
              Ship better outcomes
            </p>
            <p className="text-gray-400">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.{" "}
            </p>
            <p className="flex text-blue-600">
              Learn more
              <img src={arrow} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
