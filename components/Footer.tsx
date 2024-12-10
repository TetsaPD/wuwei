import React from "react";
import Image from "next/image";
import logo from "../public/yogalogo-t.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-800 p-4 flex-col justify-center items-center w-full py-10 px-10">
      <div className="grid grid-cols-3 ">
        <div className="flex-col flexCenter">
          <Image
            src={logo}
            key={logo}
            className="hover:animate-spin drop-shadow-[0px_0px_20px_rgba(255,255,255,0.5)]"
            alt="logo"
            height={60}
          ></Image>
        </div>
        <div className="flexCenter">
          <p>About</p>
        </div>
        <div></div>
      </div>
      <p className="text-white text-center">
        &copy; 2023 Wu Wei. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
