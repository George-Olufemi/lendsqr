import React from "react";

const Appbar = () => {
  return (
    <div className="bg-white h-[100px] w-screen">
      <div className="pt-5 ">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center text-center pl-[30px]">
            <img className="h-[30px] pr-[8.61px]" src="/Union.png" alt="" />
            <h1 className="not-italic font-bold font-[700px] text-[40px] leading-[55px] text-[#213F7D] cursor-pointer">
              lendsqr
            </h1>
          </div>

          {/* SEARCH BAR */}
          <div className="flex">
            <div class="relative w-[400px]">
              <input
                type="search"
                id=""
                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border  rounded-l-[8px] rounded-r-lg"
                placeholder="Search anything"
                required
              ></input>
              <button
                type="submit"
                class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#39CDCC] rounded-r-lg border"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <div className="pr-[50px]">
              <h1 className="not-italic font-[400px] text-[16px] leading-[18.75px] text-[#213F7D] underline cursor-pointer">
                DOCS
              </h1>
            </div>

            <div>
              <img
                className="pr-[33.16px] cursor-pointer"
                src="/Vector.png"
                alt=""
              />
            </div>

            <div className="flex gap-[10px] pr-[43.67px]">
              <div>
                <img
                  className="mr-2 cursor-pointer rounded-3xl"
                  src="/image 4.png"
                  alt=""
                />
              </div>
              {/*  */}
              <div className="flex items-center">
                <h1 className="pr-[10.33px]">Adedeji</h1>
                <img
                  className="w-[7.34px] h-[4.15px] cursor-pointer"
                  src="/down.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
