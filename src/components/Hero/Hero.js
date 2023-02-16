import Link from "next/link";
import { motion } from "framer-motion";

const Hero = ({ dropdownIsActive }) => {
  const className = dropdownIsActive
    ? "w-full flex-column text-center text-white raleway mt-20 lg:mt-20 py-2"
    : "w-full flex-column text-center text-white raleway mt-12 lg:mt-20 py-2";

  return (
    <motion.div
      initial={{ translateY: "10rem", opacity: 0 }}
      animate={{ translateY: "0", opacity: 1 }}
      transition={{ type: "spring", duration: 3, bounce: 0.6, delay: 1 }}
      className={className}
    >
      <div className="mb-1.5 sm:mb-3">
        <h1 className="kanit text-2xl sm:text-3xl lg:text-6xl">
          Welcome To My Portfolio
        </h1>
      </div>
      <div className="w-3/4 lg:w-2/4 mx-auto mb-3 lg:mb-5">
        <p className="text-xs sm:text-lg lg:text-2xl ">
          A fullstack web developer with a passion for creating beautiful
          webpages and learning new technologies.{" "}
        </p>
      </div>
      <div>
        <button className="py-2 px-4 rounded-lg text-sm sm:text-lg lg:text-2xl bg-red-800 hover:bg-red-900">
          <Link href="mailto:gakpovwovwo@gmail.com">Learn More</Link>
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
