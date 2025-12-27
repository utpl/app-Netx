import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Princing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded w-full">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="text-white m-1" />
        <span className="text-white font-bold">Home</span>
      </Link>


      <div className="flex grow justify-end">



        {navItems.map((navItems) => (
          <ActiveLink key={navItems.path} {...navItems}/>
        ))}
      </div>
    </nav>
  );
};
