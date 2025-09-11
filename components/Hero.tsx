"use client"
import Model from "./Model";

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-tl from-blue-900 via-slate-950 to-purple-900 text-white overflow-hidden ">
      
      {/* Responsive layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-4  px-8">
        
        {/* Intro Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-lg mt-20 z-10">
          <h1 className="" >Hi, I&#39;m Huy</h1>
          <h3 className="animate-pulse self-center text-blue-200">Software Engineer</h3>
        </div>

        {/* 3D Model */}
        <div className="w-full lg:w-1/2 h-[70vh] max-w-[500px] self-end">
          <Model />
        </div>

      </div>
    </div>
  )
}
