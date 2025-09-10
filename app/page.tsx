import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contract from "@/components/Contract";
import Timeline from "@/components/Timeline";

export default function App() {
  return (
    <>
   
    <div className="flex-col  ">
      <Hero /> 
      <About />
      <Work />
      <Timeline />
      <Contract />

     
    </div>
    </>
   
    );
}