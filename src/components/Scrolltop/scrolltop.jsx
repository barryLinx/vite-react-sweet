/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from "react";
import "./scrolltop.css";

const Scrolltop = () => {
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 260) {
        document.querySelector("#scroll-top").classList.add("active");
      } else {
        document.querySelector("#scroll-top").classList.remove("active");
      }
    };
  });
  return (
    <>
      <a href="#home" className="fas fa-angle-up" id="scroll-top"></a>
    </>
  );
};

export default Scrolltop;
