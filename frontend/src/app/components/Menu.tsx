import React from "react";
import { IconType } from "react-icons";
import { IoMdHome } from "react-icons/io";
import { FaChalkboardTeacher, FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { PiStudentBold, PiExam } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import {
  HiOutlineBookOpen,
  HiOutlineEmojiHappy,
  HiCursorClick,
  HiCheck,
} from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import {
  MdOutlineAssignmentTurnedIn,
  MdMessage,
  MdAnnouncement,
} from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

// Define icons object with a valid type
const icons: Record<string, IconType> = {
  IoMdHome,
  FaChalkboardTeacher,
  PiStudentBold,
  RiParentFill,
  HiOutlineBookOpen,
  SiGoogleclassroom,
  HiCursorClick,
  PiExam,
  MdOutlineAssignmentTurnedIn,
  HiOutlineEmojiHappy,
  HiCheck,
  FaCalendarAlt,
  MdMessage,
  MdAnnouncement,
  FaUserAlt,
  IoSettingsSharp,
  FiLogOut,
};

// Define the type for menu items
interface MenuItem {
  icon: keyof typeof icons;
  label: string;
  href: string;
  visible: string[];
}

// Define the type for sections in the menu
interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuItems: MenuSection[] = [
  {
    title: "MENU",
    items: [
      {
        icon: "IoMdHome",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "FaChalkboardTeacher",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "PiStudentBold",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "RiParentFill",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "HiOutlineBookOpen",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "SiGoogleclassroom",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "HiCursorClick",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "PiExam",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "MdOutlineAssignmentTurnedIn",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "HiOutlineEmojiHappy",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "HiCheck",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "FaCalendarAlt",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "MdMessage",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "MdAnnouncement",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "FaUserAlt",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "IoSettingsSharp",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "FiLogOut",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

// Updated Menu component with className prop
const Menu: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`text-base text-gray-800 ${className}`}>
      {menuItems.map((mI) => (
        <div key={mI.title}>
          <span className="my-3 font-light hidden lg:block text-gray-500 ">
            {mI.title}
          </span>
          {mI.items.map((i) => {
            const IconComponent = icons[i.icon];
            return (
              <Link
                href={i.href}
                className="flex gap-4 items-center py-2 text-gray-800"
                key={i.label}
              >
                {IconComponent && <IconComponent className="size-6" />}
                <span className="hidden md:block text-md">{i.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
