import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section
      style={{
        margin: "1rem auto",
        padding: "2rem 48px 40px",
      }}
      className="box-content footer-section raleway"
    >
      <ul className="footer-list">
        <div className="flex-column">
          <h4 className="footer-title">Call me</h4>
          <Link href="tel:+2348109870865" className="footer-list-item">
            +2348109870865
          </Link>
        </div>
        <div className="flex-column">
          <h4 className="footer-title">Email</h4>
          <Link
            href="mailto:gakpovwovwo@gmail.com"
            className="footer-list-item"
          >
            gakpovwovwo@gmail.com
          </Link>
        </div>
      </ul>
      <div className="flex justify-around items-center text-white w-1/4 mx-auto mt-10 text-xl lg:text-2xl">
        <div className="mr-4 lg:mr-1">
          <Link href="https://github.com/sansteelo17">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
        <div className="mr-4 lg:mr-1">
          <Link href="https://www.linkedin.com/in/george-akpovwovwo-8b1435109">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
        <div>
          <Link href="https://twitter.com/__georgeriley">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
