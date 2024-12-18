"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  name: string;
  url: string;
  text: string;
  img: string;
}

const Card = ({ name, url, text, img }: CardProps) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default navigation to allow animation
    if (!isClicked) {
      setIsClicked(true);

      setTimeout(() => {
        window.location.href = url; // Replace with Next.js router.push(url) if needed
      }, 0);
    }
  };

  const [isNotHovered, setIsNotHovered] = React.useState(true);

  const handleHover = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isNotHovered) {
      setIsNotHovered(true);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 1440) {
      setIsNotHovered(false);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleResize = () => {
    if (window.innerWidth > 1440) {
      if (isNotHovered) {
        setIsNotHovered(false);
      }
    } else {
      setIsNotHovered(true);
    }
  };

  return (
    <>
      <div className="card">
        <div
          className="grid grid-cols-3 md:grid-cols-1 min-h-full"
          onMouseEnter={handleHover}
          onMouseLeave={() => handleResize()}
        >
          <div className="flexCenter col-span-1">
            <motion.div
              animate={isClicked ? { scale: 0.8 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={img}
                alt={img}
                id="img"
                width={100}
                height={100}
                className="size-75 md:size-max"
              />
            </motion.div>
          </div>
          <div className="text-style col-span-2">
            <h1 className="flexCenter md:text-xl text-2xl">{name}</h1>
            <motion.div
              animate={
                isNotHovered
                  ? { y: 0, type: "spring", opacity: 1 }
                  : { y: 15, type: "spring", opacity: 0 }
              }
            >
              <p className="text-center">{text}</p>
            </motion.div>
            <Link
              href={url}
              className="btn_green text-center block"
              onClick={handleClick}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
