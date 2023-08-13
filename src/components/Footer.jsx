import React from "react";
import logo from "../assets/Company Logo (4).png";
import img1 from "../assets/footer/Social platforms logo (1).png";
import img2 from "../assets/footer/Social platforms logo (2).png";
import img3 from "../assets/footer/Social platforms logo (3).png";
import img4 from "../assets/footer/Social platforms logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-950 sm:h-[600px] md:h-[500px] lg:h-[300px]">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:h-[500px] md:h-[400px] lg:h-[200px]">
        <div className="col-span-6 md:col-span-2 lg:col-span-2 lg:order-1 md:order-1 sm:order-1 m-auto p-5 ">
          <img src={logo} alt="" />
          <p className="text-gray-300">
            Generate outside the box thinking with the possibility to targtet the low.
          </p>
        </div>

        <div className="col-span-6 lg:col-span-2  lg:order-2 md:order-3 grid grid-cols-2  sm:order-2 sm:my-10 p-5">
          <div className=" text-white  ">
            <p className="font-bold">Resources</p>
            <p className="text-gray-400">Community</p>
            <p className="text-gray-400">Events</p>
            <p className="text-gray-400">Help Center</p>
            <p className="text-gray-400">Partners</p>
          </div>

          <div className=" text-white  ">
            <p className="font-bold">Products</p>
            <p className="text-gray-400">Integration</p>
            <p className="text-gray-400">Solutions</p>
            <p className="text-gray-400">Features</p>
            <p className="text-gray-400">Enterprise</p>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:order-4 md:order-2 sm:order-3  text-white m-auto p-5 ">
          <p className="font-bold">Get Email Notifications</p>
          <p>
            Generate outside the box thinking with the possibility to
            targtet the low
          </p>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Enter email..."
              className=" h-[35.2px] p-3 w-[75%] bg-gray-700"
            />
            <button className="bg-blue-600 text-white rounded-r p-1.5 w-[65px] font-bold">
              submit
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-600 mx-32 mt-5"></div>

      <div className="grid md:grid-cols-2  my-5  w-full ">
        <div className="text-gray-500 flex lg:justify-center md:justify-end justify-center w-full">
          © 2023 Lookscout. All Rights Reserved.
        </div>
        <div className="flex gap-3  justify-center">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
