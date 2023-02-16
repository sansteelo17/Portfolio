import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import NavbarItems from "./NavbarItems";
import NavDropDown from "./NavDropDown";
import Socials from "./Socials";

const Navbar = ({ onToggleDrop, dropdownIsActive }) => {
  const toggleDropHandler = () => {
    onToggleDrop();
  };

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "tween", duration: 1.5 }}
      className="relative w-full"
    >
      <section className="flex items-center justify-between w-full py-2 px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-8 text-white">
        <div className="lg:mr-3">
          <span className="kanit text-xl sm:text-2xl lg:text-3xl">STEELO</span>
        </div>
        <div>
          <Socials />
        </div>
        <div className="hidden lg:flex">
          <NavbarItems />
        </div>
        <div className="block lg:hidden text-xl" onClick={toggleDropHandler}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </section>
      {dropdownIsActive && (
        <motion.section
          initial={{ translateY: "-2rem", opacity: 0 }}
          animate={{ translateY: "0", opacity: 1 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
          className="lg:hidden absolute flex w-full bg-gray-600/[0.4] py-3"
        >
          <NavDropDown />
        </motion.section>
      )}
    </motion.div>
  );
};

export default Navbar;
