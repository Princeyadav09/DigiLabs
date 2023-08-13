import React, { useState } from "react";
import logo from "../assets/Company Logo (4).png";
import dots from "../assets/footer/Button.png";
import Sidebar from "./Sidebar";
import Dropdown from "./Dropdown.jsx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [dropdown, setDropdown] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    if (dropdown == 0) {
      setDropdown(1);
    } else {
      setDropdown(0);
    }
  };

  console.log(dropdown);
  return (
    <div className="grid grid-cols-12  h-[80px] bg-blue-600 p-3 w-full fixed top-0 left-0 z-10">
      <div className="col-span-2  flex justify-start items-center">
        <div>
          <img className="m-auto" src={logo} alt="" />
        </div>
      </div>
      <div className="col-span-7 hidden lg:flex justify-start items-center gap-5 ">
        <div>
          <a className="text-white text-sm font-bold m-auto" href="">
            Home
          </a>
        </div>
        <div>
          <a className="text-white text-sm font-bold m-auto" href="">
            Our products
          </a>
        </div>
        <div onClick={handleClick} className="">
          <a
            className="text-white text-sm font-bold m-auto flex items-center "
            href=""
          >
            resouces
            <RiArrowDropDownLine className="" size={20} />
          </a>
          {dropdown === 1 ? <Dropdown /> : null}
        </div>
        <div>
          <a className="text-white text-sm font-bold m-auto" href="">
            contacts
          </a>
        </div>
      </div>
      <div className="col-span-3 hidden lg:flex  items-center justify-end gap-5 ">
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto">
            Login
          </button>
        </div>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto">
            Sign up
          </button>
        </div>
      </div>
      <div className="col-span-9 lg:hidden flex justify-end items-center">
        <img
          className="h-[40px]"
          src={dots}
          alt=""
          onClick={() => {
            setActive(1);
          }}
        />
      </div>

      {active === 1 ? <Sidebar setActive={setActive} /> : null}
    </div>
  );
};

export default Navbar;
