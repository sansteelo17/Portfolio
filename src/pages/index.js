import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "@/components/Profile/Profile";
import Technologies from "@/components/Technologies/Technologies";
import { Fragment, useState } from "react";

const HomePage = () => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  const toggleDropHandler = () => {
    setDropdownIsActive((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Navbar
        onToggleDrop={toggleDropHandler}
        dropdownIsActive={dropdownIsActive}
      />
      <Hero dropdownIsActive={dropdownIsActive} />
      <Profile />
      <Technologies />
      <About />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
