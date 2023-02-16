import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ProfileItem = ({ id, title, desc, image, tech, link }) => {
  const { ref: projectRef, inView: projectIsInView } = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (projectIsInView) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: 0.5,
        },
      });
    }
  }, [controls, projectIsInView]);

  return (
    <motion.div
      className="rounded-lg text-center w-full md:w-96 mb-8 sm:mb-12 lg:mb-0"
      style={{ boxShadow: "3px 3px 20px rgba(80, 78, 78, 0.7)" }}
      key={id}
      initial={{ opacity: 0 }}
      animate={controls}
      ref={projectRef}
    >
      <img src={image} className="w-full h-full object-cover overflow-hidden" />
      <div className="w-full text-center z-20">
        <h3 className="text-xl sm:text-2xl lg:text-3xl p-1.5 text-red-600 tracking-wide kanit">
          {title}
        </h3>
        <hr className="w-12 h-1 mx-auto my-5 bg-red-600 border-none" />
      </div>
      <div className="w-full pb-4 px-12 raleway">{desc}</div>
      <div>
        <h3 className="text-lg sm:text-xl lg:text-2xl text-red-600 tracking-wide kanit">
          Stack
        </h3>
        <ul className="flex justify-around p-4">
          {tech.map((tech, i) => (
            <li className="text-white text-xl lg:text-2xl" key={i}>
              <FontAwesomeIcon icon={tech} />
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-6 pt-2">
        <Link
          href={link}
          className="bg-red-700 text-white hover:bg-red-800 rounded text-base lg:text-lg raleway p-2"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

export default ProfileItem;
