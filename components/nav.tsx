import React from "react";
import "./nav.css";
import links from "../data/links.json";
import logo from "../public/yogalogo-t.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="px-10">
      <Image
        src={logo}
        key={logo}
        className="hover:animate-spin "
        alt="logo"
        height={60}
      ></Image>
      <ul className="list-group ">
        {links.links.map((link) => (
          <li className="list-group-item" key={link.name}>
            <a href={link.url} className=" hidden lg:block">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <Image
        src="/menu.svg"
        alt="menu"
        height={40}
        width={40}
        className="lg:hidden"
      ></Image>
    </nav>
  );
}
