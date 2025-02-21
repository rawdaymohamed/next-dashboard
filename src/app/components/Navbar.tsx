import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdAnnouncement, MdMessage } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex md:justify-between items-center p-4 justify-end">
      {/* Search bar*/}
      <div className={`relative items-center hidden md:flex`}>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <FiSearch className="absolute left-3 text-gray-500" />
      </div>
      {/* Icons */}
      <div className="flex gap-6">
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer">
          <MdMessage className="text-gray-500 size-4" />
        </div>
        <div className="w-7 h-7 relative rounded-full bg-white flex items-center justify-center cursor-pointer">
          <MdAnnouncement className="text-gray-500 size-4" />
          <div className=" text-xs -top-1.5 -right-1.5 absolute bg-purple-500 flex items-center justify-center size-3 rounded-full">
            <span className="text-white">1</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-4 ">Rawda Yasser</span>
          <span className="text-[10px] text-right text-gray-500">Admin</span>
        </div>
        <div className="cursor-pointer">
          <Image src="/profile.png" alt="" width={28} height={28} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
