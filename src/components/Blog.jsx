import React from "react";
import img from "../assets/Front-end Development - Assessment (1st Round) • DiGiLABS (3)/Rectangle 1.png";
import img1 from "../assets/Front-end Development - Assessment (1st Round) • DiGiLABS (3)/Rectangle 1 (1).png";
import img2 from "../assets/Front-end Development - Assessment (1st Round) • DiGiLABS (3)/Rectangle 1 (2).png";
import img3 from "../assets/Front-end Development - Assessment (1st Round) • DiGiLABS (3)/Avatar (2).png";
import img4 from "../assets/Front-end Development - Assessment (1st Round) • DiGiLABS (3)/Avatar (1).png";
import img5 from "../assets/Front-end Development - Assessment (1st Round) • DiGiLABS (3)/Avatar.png";

const Blog = () => {
  return (
    <div className="">
      <center>
        <h1 className="font-bold text-2xl">Latest Blog Posts</h1>
      </center>
      <center>
        <p className="text-gray-600 p-5">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>
      </center>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-5">
        <div>
          <img src={img} alt="" />
          <p className="font-bold">
            Organize your digital assets with a new methodology here.
          </p>
          <p className="my-5">
            Podcasting operational management inside of workflows to establish a
            framework seamless. Convergence collaboratively.
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <img src={img5} alt="" />
              <p>
                Andrew Miller <br />
                UX
              </p>
            </div>
            <div>
              <p>25 Apr</p>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} alt="" />
          <p className="font-bold">
            Organize your digital assets with a new methodology here.
          </p>
          <p className="my-5">
            {" "}
            Keeping your eye while performing a deep dive on the start-up
            mentality to derive convergence collaboratively derive convergence
            collaboratively.
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <img src={img4} alt="" />
              <p>
                Andrew Miller <br />
                UX
              </p>
            </div>
            <div>
              <p>25 Apr</p>
            </div>
          </div>
        </div>
        <div className="md:hidden lg:block ">
          <img src={img2} alt="" />
          <p className="font-bold">
            Organize your digital assets with a new methodology here.
          </p>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C B2C . derive convergence
            collaboratively..
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <img src={img3} alt="" />
              <p>
                Andrew Miller <br />
                UI
              </p>
            </div>
            <div>
              <p>25 Apr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
