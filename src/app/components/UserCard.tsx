import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-xl odd:bg-purple-400 even:bg-yellow-300 p-4 flex-1 gap-2 text-sm text-gray-800 flex flex-col">
      <div className="flex justify-between items-center">
        <span className="text-green-700  text-xs px-3 py-1 bg-white rounded-full">
          2/20/2025
        </span>
        <HiDotsHorizontal className="text-white" />
      </div>

      <span className="text-2xl font-bold">1,234</span>
      <span>{type}</span>
    </div>
  );
};

export default UserCard;
