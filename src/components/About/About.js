import React, { useEffect } from "react";
import Paragraph from "../UI/Paragraph";
import SectionDivider from "../UI/SectionDivider";
import SectionTitle from "../UI/SectionTitle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: aboutRef, inView: aboutIsInView } = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (aboutIsInView) {
      controls.start({
        translateY: "0rem",
        opacity: 1,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.6,
          delay: 0.5,
        },
      });
    }
  }, [controls, aboutIsInView]);

  return (
    <motion.div
      className="text-white kanit"
      id="about"
      ref={aboutRef}
      initial={{ opacity: 0, translateY: "7rem" }}
      animate={controls}
    >
      <SectionDivider />
      <SectionTitle dontAnimate>About</SectionTitle>
      <Paragraph className="about-paragraph">2019-Present</Paragraph>
      <Paragraph className="text-xs lg:text-base pb-4 md:pb-6 lg:pb-14 text-center px-10 sm:px-20 lg:px-40 xl:px-44 raleway">
        My progressive web development journey began back in 2019 when I was an
        intern at the Nigerian Naval Engineering College. Since then, my drive
        and passion for coding have pushed me to learn new technologies and
        practice always!
      </Paragraph>
    </motion.div>
  );
};

export default About;
