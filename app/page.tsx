import React from "react";
import "./globals.css";
import NavBar from "../components/nav";
import Camp from "../components/Camp";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
function page() {
  return (
    <div className="page hero-bg">
      <NavBar />
      <Hero />
      <Camp />
      <Footer />
    </div>
  );
}

export default page;
