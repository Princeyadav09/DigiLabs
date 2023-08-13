import React from "react";

const Dropdown = () => {
  return (
    <div className="pb-4 w-[200px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      <div className="">
        <h3 className="m-3 cursor-pointer select-none">First Choice</h3>
        <h3 className="m-3 cursor-pointer select-none">Second Choice</h3>
        <h3 className="m-3 cursor-pointer select-none">Third Choice</h3>
        <h3 className="m-3 cursor-pointer select-none">Fourth Choice</h3>
      </div>
    </div>
  );
};

export default Dropdown;
