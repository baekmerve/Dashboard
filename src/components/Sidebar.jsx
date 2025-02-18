import React from "react";
import { Link } from "react-router-dom";
import RouteSelect from "./RouteSelect";


const Sidebar = () => {
  return (
    <div className="overflow-y-scroll sticky top-0 h-[calc(100vh-32px-48px)] px-3 border-r-2 border-gray-300 ">
      {/* Logo */}
      <div className="h-[50px] flex items-center mt-5 mb-10 ">
        <Link to="/">
          <span className="text-2xl font-bold text-red-900">THEBOARD</span>
        </Link>
      </div>
      {/* Account */}
      <div className="border-b mb-10 mt-2 pb-4 border-stone-300 ">
        <button className="flex p-0.5 rounded transition-colors relative gap-2 w-full items-center">
          <img
            src="https://api.dicebear.com/9.x/notionists/svg"
            alt="avatar"
            className="size-8 rounded shrink-0 bg-red-900 shadow"
          />
          <div className="text-start">
            <span className="text-sm font-bold block">Merve Baek</span>
            <span className="text-xs block text-stone-500">merve@abc.dev</span>
          </div>
        </button>
      </div>
      {/* Sidebar  routes  */}
      <RouteSelect />
      {/* bottom */}
    </div>
  );
};

export default Sidebar;
