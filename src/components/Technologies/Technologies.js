import {
  faCss3Alt,
  faNode,
  faNpm,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Paragraph from "../UI/Paragraph";
import SectionDivider from "../UI/SectionDivider";
import SectionTitle from "../UI/SectionTitle";

const Technologies = () => {
  const { ref: techRef, inView: techIsInView } = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (techIsInView) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 2,
          delay: 0.5,
          bounce: 0.5,
        },
      });
    }
  }, [controls, techIsInView]);

  return (
    <motion.div
      id="technologies"
      className="flex-column text-white relative overflow-hidden box-content mx-auto"
      initial={{ opacity: 0 }}
      animate={controls}
      ref={techRef}
    >
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <Paragraph>
        I have worked with a range of technologies in web development from
        Front-End to Back-End Technologies and Testing.
      </Paragraph>
      <div className="flex text-2xl lg:text-3xl items-center justify-around px-4 mt-2 lg:mt-0 mb-4">
        <div>
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div>
          <FontAwesomeIcon icon={faNode} />
        </div>
        <div>
          <FontAwesomeIcon icon={faSquareJs} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>
        <div>
          <FontAwesomeIcon icon={faNpm} />
        </div>
        <div>
          <img
            src="https://www.svgrepo.com/download/354478/typescript-icon.svg"
            className="w-6 h-6 lg:w-8"
            alt="typescript image"
          />
        </div>
        <div>
          <img
            src="https://cdn.auth0.com/blog/logos/nextjs-logo.png"
            className="w-6 h-6 lg:w-8"
            alt="nextjs image"
          />
        </div>
      </div>
      <Paragraph className="text-xs lg:text-base pb-4 md:pb-6 lg:pb-14 text-center px-10 sm:px-20 lg:px-40 xl:px-44 mt-10">
        On the Front-End, I have worked with ReactJS, NextJS, TypeScript, and
        REST APIs. On the Back-End, I have worked with NodeJS, ExpressJS and
        MongoDB. I have also ran tests previously with Jest and the React
        Testing Library.
      </Paragraph>
    </motion.div>
  );
};

export default Technologies;
