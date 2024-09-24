import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Untitled-1.png";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoPatreon } from "react-icons/bi";
import { FaPaypal } from "react-icons/fa6";
import "./secondary.css";
const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="max-h-16 bg-purple flex flex-row justify-center pl-1 pr-1 pt-1">
          <div className="basis-1/4 justify-start">
            <Link to="/">
              <img className="max-h-5 pb-[5px]" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="flex basis-1/4 justify-end space-x-4 align-middle">
            <span className="changeColor">
              <Link to="https://github.com/vsatyamesc">
                <IoLogoGithub className="size-4" />
              </Link>
            </span>
            <span className="changeColorPatreon">
              <Link to="https://patreon.com/">
                <BiLogoPatreon className="size-4" />
              </Link>
            </span>
            <span className="changeColorPaypal">
              <Link to="https://paypal.me/">
                <FaPaypal className="size-4" />
              </Link>
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
