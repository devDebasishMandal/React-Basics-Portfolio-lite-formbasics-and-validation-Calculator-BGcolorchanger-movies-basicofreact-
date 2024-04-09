import React, { Component } from "react";
import Navbar from "./Nav";
import Section from "./About";
import "./portfolio.css";
const Portfolio =()=>{



    return (
      <div>
        <Navbar />
        <Section head="About" />
        <Section head="Skills" />
        <Section head="Projects" />
      </div>
    );
}

export default Portfolio;



