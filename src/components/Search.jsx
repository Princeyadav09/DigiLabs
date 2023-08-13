import React from "react";
import img from "../assets/new/Checkbox Base.png";
import img1 from "../assets/new/Company Logo (10).png";
import img2 from "../assets/new/Company Logo (9).png";
import img3 from "../assets/new/Company Logo (8).png";
import img4 from "../assets/new/Company Logo (7).png";
import img5 from "../assets/new/Company Logo (6).png";
import img6 from "../assets/new/Press Logo.png";

const Search = () => {
  return (
    <div className="">
      <center>
        <h1 className="font-bold text-2xl">Proud to Be Used By</h1>
      </center>
      <center>
        <p className="text-gray-600 p-5">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </center>
      <div className="md:grid lg:grid-cols-6 md:grid-cols-4 p-5">
        <div className="flex justify-center my-5 ">
          <img src={img6} alt="" />
        </div>
        <div className="flex justify-center mb-5">
          <img src={img5} alt="" />
        </div>
        <div className="flex justify-center mb-5">
          <img src={img4} alt="" />
        </div>
        <div className="flex justify-center mb-5">
          <img src={img3} alt="" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-center mb-5 md:h-[50px]">
          <img src={img2} alt="" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-center mb-5">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="bg-gray-100 p-5">
        <center>
          <p className="text-blue-600 text-sm">1% OF THE INDUSTRY</p>
          <p className="font-bold ">
            Welcome to your new digital reality that will rock your world truly
            at all throughout.
          </p>

          <div className="mt-5 md:flex justify-center block">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300 p-1 lg:w-[25%]"
            />
            <button className="bg-blue-600 text-white rounded-r p-1">
              submit
            </button>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 mt-5 ">
            <div className="flex justify-center">
              <img src={img} alt="" />
              <p>Fully Secure</p>
            </div>
            <div className="flex justify-center">
              <img src={img} alt="" />
              <p>24/7 Support</p>
            </div>
            <div className="flex justify-center mt-3 md:mt-0">
              <img src={img} alt="" />
              <p>Done Deal</p>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Search;
