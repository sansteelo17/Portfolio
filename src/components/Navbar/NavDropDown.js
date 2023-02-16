import Link from "next/link";

const NavDropDown = () => {
  return (
    <ul className="flex text-white w-2/4 sm:w-1/4 mx-auto text-xs sm:text-sm pl-8 sm:pl-2">
      <li className="mr-2">
        <Link href="#projects">Projects</Link>
      </li>
      <li className="mr-2">
        <Link href="#technologies">Technologies</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
    </ul>
  );
};

export default NavDropDown;
