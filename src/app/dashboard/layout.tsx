import Link from "next/link";
import { IoSchoolSharp } from "react-icons/io5";
import Menu from "@/app/components/Menu";
import Navbar from "@/app/components/Navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-2/12 md:w-3/12 flex flex-col items-center md:items-start md:pl-4 pt-4 overflow-scroll">
        <Link href="/" className="mb-2 flex gap-2 items-center  text-gray-800">
          <IoSchoolSharp className="size-6" />
          <span className="hidden md:block font-bold text-sm lg:text-base">
            MyDashboard
          </span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-10/12 md:w-9/12 bg-[#eeeaea] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
