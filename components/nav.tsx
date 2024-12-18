import React from "react";
import "./nav.css";
import links from "../data/links.json";
import logo from "../public/yogalogo-t.svg";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

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
            <Link href={link.url} className=" hidden lg:block">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Dropdown />
    </nav>
  );
}
