import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="relative my-4 px-10 py-10 border-2 border-black max-container ">
        <div className="absolute top-0">
          <Image
            src={"/heroimg.png"}
            alt="hero"
            width={150}
            height={150}
          ></Image>
        </div>
        <div className="z-40">
          <h1 className="hero-text text-center text-5xl lg:text-6xl xl:text-7xl">
            Discover your Yoga
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
