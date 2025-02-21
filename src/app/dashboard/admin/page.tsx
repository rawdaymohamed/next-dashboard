import UserCard from "@/app/components/UserCard";
import React from "react";

const Page = () => {
  return (
    <div className="flex p-4  gap-3 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3">
        {/* User Cards */}
        <div className="flex flex-wrap gap-4 justify-between">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default Page;
