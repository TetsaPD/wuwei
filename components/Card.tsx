"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      }, 100);
    }
  };

  return (
    <>
      <div className="card">
        <div className="flex flex-col justify-between min-h-full">
          <div className="flexCenter">
            <motion.div
              animate={isClicked ? { scale: 5, rotate: 360 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Image src={img} alt={img} id="img" width={100} height={100} />
            </motion.div>
          </div>
          <div className="text-style">
            <h1 className="flexCenter text-2xl">{name}</h1>
            <p>{text}</p>
            <a
              href={url}
              className="btn_green text-center block"
              onClick={handleClick}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
