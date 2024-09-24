import React from "react";
import "./secondary.css";
const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center pt-4 md:pb-[0px] sm:pb-4">
        <hr className="break-line" />
      </div>
      <div className="flex align-middle justify-center text-center">
        <p className="text-gray-light p-[3px] text-justify text-sm mx-[7vw] mb-[2px] md:mx-[9.5vw] xl:mx-[2vw]">
          This website doesn't try to infringe any Copyright in any way, nor is
          intended to infringe any Copyright. This is just for Educational
          Purposes, if anyone uses this React Website Template (Open Source),
          the Developer is not responsible for it.
        </p>
      </div>
    </div>
  );
};
export default Footer;
