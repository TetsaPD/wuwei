"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import links from "../data/links.json";
import Link from "next/link";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <Image
        src="/menu.svg"
        alt="menu"
        height={40}
        width={40}
        className="transition duration-200 lg:hidden cursor-pointer hover:scale-125 "
        onClick={handleClick}
      ></Image>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          // className="absolute top-20 right-0 z-10 bg-blue-300 rounded-sm p-5"
          style={{
            position: "absolute",
            top: 80,
            right: 0,
            backgroundColor: "#a8abaf",
            padding: 5,
            zIndex: 10,
          }}
          initial={{ opacity: 0 }}
          animate={
            isOpen
              ? { x: 0, opacity: 1, display: "block" }
              : { x: -40, opacity: 0, display: "none" }
          }
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-center">
            <ul className="gap-5">
              {links.links.map((link) => (
                <li key={link.name} className="text-xl">
                  <Link
                    href={link.url}
                    className="transition duration-200 block text-center py-4 px-48  hover:bg-gray-100 rounded-md"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;
