import React from "react";
import Appbar from "./appbar/Appbar";
import Sidebar from "./sidebar/Sidebar";

const User = () => {
  return (
    <div className="bg-[#E5E5E5]">
      <Appbar />
      <div className="flex">
        <Sidebar />
        <div className=" w-[200px] h-[50px]">
          <h1>user can you go up?</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
