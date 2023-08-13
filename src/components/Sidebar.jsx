import React from "react";
import { RxCross1 } from "react-icons/rx";

const Sidebar = ({ setActive }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
        <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setActive(false)}
                />
              </div>
              <div>
                <div className="">
                  <a className=" font-bold my-5 flex justify-center">Home</a>
                  <a className="font-bold mb-5 flex justify-center">
                    Our products
                  </a>
                  <a className=" font-bold mb-5 flex justify-center">
                    resouces
                  </a>
                  <a className=" font-bold my-5 flex justify-center">
                    contacts
                  </a>
                </div>
                <div className="flex justify-center gap-5 ">
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
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
