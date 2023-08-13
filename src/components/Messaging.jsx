import React from "react";
import img from "../assets/Icon placeholder.png";
import img1 from "../assets/Icon placeholder (1).png";
import img2 from "../assets/Icon placeholder (2).png";
import img3 from "../assets/Icon placeholder (3).png";
import img4 from "../assets/Icon placeholder (4).png";
import img5 from "../assets/Icon placeholder (5).png";
import arrow from "../assets/right.png";

const messaging = () => {
  return (
    <div className="m-10 ">
      <center>
        <h1 className="font-bold text-2xl">Messaging for all</h1>
      </center>
      <center>
        <p className="text-gray-600 p-5">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </center>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 m-5">
        <div>
          <img src={img} alt="" />
          <p>Easier Work Organization</p>
          <p>
            Efficiently unleash cross-media information without cross-media
            value. Quickly timely deliverables for real-time schemas.{" "}
          </p>
          <p className="flex text-blue-600">
            Learn more
            <img src={arrow} alt="" />
          </p>
        </div>
        <div>
          <img src={img1} alt="" />
          <p>Fast Connection</p>
          <p>
            Completely pursue scalable customer cross- media through
            potentialities. Holistically quickly installed portals.{" "}
          </p>
          <p className="flex text-blue-600">
            Learn more
            <img src={arrow} alt="" />
          </p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p>Streamlined Processes</p>
          <p>
            Objectively innovate empowered scalable manufactured products
            whereas parallel platforms predominate extensible.
          </p>
          <p className="flex text-blue-600">
            Learn more
            <img src={arrow} alt="" />
          </p>
        </div>

        <div>
          <img src={img3} alt="" />
          <p>Easier Integrations</p>
          <p>
            Completely pursue scalable customer try through potentialities.
            Pontificate portals installed. Efficiently unleash information.{" "}
          </p>
          <p className="flex text-blue-600">
            Learn more
            <img src={arrow} alt="" />
          </p>
        </div>
        <div>
          <img src={img4} alt="" />
          <p>Marketing Analytics</p>
          <p>
            Phosfluorescently engage worldwide methodologies with web-enabled
            Interactively coordinate.{" "}
          </p>
          <p className="flex text-blue-600">
            Learn more
            <img src={arrow} alt="" />
          </p>
        </div>
        <div>
          <img src={img5} alt="" />
          <p>Workflow Builder</p>
          <p>
            Collaboratively administrate turnkey service channels whereas
            virtual e-tailers. This is objectively scalable metrics whereas.
          </p>
          <p className="flex text-blue-600">
            Learn more
            <img src={arrow} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default messaging;
