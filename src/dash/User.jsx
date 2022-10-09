import React from "react";
import Appbar from "./appbar/Appbar";
import Sidebar from "./sidebar/Sidebar";

const User = () => {
  return (
    <div className="bg-[#E5E5E5]">
      <Appbar />
      <Sidebar />
      <div className="w-[240px] h-[160px] bg-white rounded-[4px] mt-5">
        <h1>user can you go up?</h1>
      </div>
    </div>
  );
};

export default User;
