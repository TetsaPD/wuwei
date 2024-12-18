import React from "react";
import "./globals.css";
import Camp from "@/components/Camp";
import Hero from "@/components/Hero";

function page() {
  return (
    <div className="page hero-bg">
      <Hero />
      <Camp />
    </div>
  );
}

export default page;
