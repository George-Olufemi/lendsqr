import React from "react";
import Appbar from "./appbar/Appbar";
import Sidebar from "./sidebar/Sidebar";

const User = () => {
  const cards = ([
    {
      id: 1,
      img: "/user.png",
      title: "user",
      qty: `2,453`
    },
    {
      id: 2,
      img: "/active.png",
      title: "active users",
      qty: `2,453`
    },
    {
      id: 3,
      img: "/loan.png",
      title: "users with loans",
      qty: `12,453`
    },
    {
      id: 4,
      img: "/savings.png",
      title: "users with savings",
      qty: `102,453`
    },
  ])
  return (
    <div className="bg-[#E5E5E5]">
      <Appbar />
      <div className="flex">
        <Sidebar />
        <div className="w-[1200px] h-[50px] px-[60px] bg-red-300">
          <div className="text-[#213F7D] font-[500] text-[24px] leading-[28px] pt-[60px] pb-[40px]">
            <h1>User</h1>
          </div>
          <div className="flex gap-[26px]">
          {
            cards.map((card, idx) => (
              <div key={idx}>
                <div className="bg-[#FFFFFF] w-[240px] h-[160px] border shadow-[3px 5px 20px rgba(0, 0, 0, 0.04)] rounded-[4px]">
                  <div className="pl-[30px] pt-[20px]">
                    <div className="pb-[14px]">
                      <img src={ card.img } alt="User" />
                    </div>
                    <div className="pb-[12px]">
                      <p className="font-[500] text-[#545F7D] text-[14px] leading-[16px] uppercase">{ card.title }</p>
                    </div>
                    <div className="">
                      <p className="font-[600] text-[#213F7D] text-[24px] leading-[28px] uppercase">{ card.qty }</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
