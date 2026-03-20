import Link from "next/link";
import React from "react";

const DashbordLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar */}
      <div className=" col-span-3 p-2 rounded-2xl border-r-4 bg-black">
        <h1 className="text-white">Sidebar</h1>
       <div className=" flex flex-col  ">
        <Link className="text-gray-400 underline" href={'/dashbord/add-story'}>add-story</Link>
        <Link className="text-gray-400 underline" href={'/dashbord/my-profile'}>my-profile</Link>
        <Link className="text-gray-400 underline" href={'/dashbord/setting'}>setting</Link>
       </div>
      </div>

      {/* Main Content */}
      <div className="col-span-9 p-4 text-center">{children}</div>
    </div>
  );
};

export default DashbordLayout;
