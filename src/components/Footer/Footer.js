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
    </section>
  );
};

export default Footer;
