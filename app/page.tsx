import React from "react";
import "./globals.css";
import NavBar from "../components/nav";
import Camp from "../components/Camp";

function page() {
  return (
    <div className="page hero-bg">
      <NavBar />
      <Camp />
    </div>
  );
}

export default page;
