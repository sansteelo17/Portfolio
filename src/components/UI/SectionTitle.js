import { motion } from "framer-motion";

const SectionTitle = (props) => {
  return (
    <div>
      {!props.dontAnimate && (
        <motion.h1
          className="text-center kanit text-2xl sm:text-3xl lg:text-5xl mb-2"
          initial={{ translateY: "5rem", opacity: 0 }}
          animate={{ translateY: "0", opacity: 1 }}
          transition={{ type: "spring", duration: 3, bounce: 0.6, delay: 1 }}
        >
          {props.children}
        </motion.h1>
      )}
      {props.dontAnimate && (
        <h1 className="text-center kanit text-2xl sm:text-3xl lg:text-5xl mb-2">
          {props.children}
        </h1>
      )}
    </div>
  );
};

export default SectionTitle;
