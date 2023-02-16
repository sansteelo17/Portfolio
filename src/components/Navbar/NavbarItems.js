import Link from "next/link";
import React from "react";

const NavbarItems = () => {
  return (
    <div className="raleway">
      <ul className="flex">
        <li className="mr-2 hover:text-red-500">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="mr-2 hover:text-red-500">
          <Link href="#technologies">Technologies</Link>
        </li>
        <li className="hover:text-red-500">
          <Link href="#about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarItems;
