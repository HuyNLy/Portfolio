"use client";

import Image from "next/image";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiMysql, SiMongodb } from "react-icons/si";
import { RiJavaFill, RiNextjsFill } from "react-icons/ri";


export default function About() {
  return (
    <div className="flex flex-col items-center w-full h-full p-8 bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-950 text-white">
      {/* About Me Section */}
      <h1 className="text-left">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 mb-12 px-6 md:px-32">
        <div></div>
        <div>
          <Image
            src="/img/avt.webp"
            alt="Avatar"
            width={200}
            height={200}
         
            className="border-1 border-white rounded-full "
            priority
          />
        </div>
        <div>
          <h3>It's me, Huy Ly. Just a guy who loves to build cool stuff.</h3>
          <p className="max-w-xl ">
            Still learning, still building, still figuring things out. But I care deeply about writing clean code, solving real problems, and making tech that helps people.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-6xl">
          <SiJavascript className="hover:text-yellow-400 transition-transform hover:scale-110 hover:animate-bounce" title="JavaScript" />
          <SiTypescript className="hover:text-blue-400 transition-transform hover:scale-110  hover:animate-bounce" title="TypeScript" />
          <RiNextjsFill className="hover:text-black transition-transform hover:scale-110  hover:animate-bounce" title="Next.js" />
          <SiPython className="hover:text-yellow-300 transition-transform hover:scale-110  hover:animate-bounce" title="Python" />
          <SiReact className="hover:text-cyan-400 transition-transform hover:scale-110  hover:animate-bounce" title="React" />
          <SiNodedotjs className="hover:text-green-400 transition-transform hover:scale-110  hover:animate-bounce" title="Node.js" />
          <RiJavaFill className="hover:text-red-600 transition-transform hover:scale-110  hover:animate-bounce" title="Java" />          
          <SiMysql className="hover:text-blue-600 transition-transform hover:scale-110  hover:animate-bounce" title="MySQL" />
          <SiMongodb className="hover:text-green-500 transition-transform hover:scale-110  hover:animate-bounce" title="MongoDB" />
        </div>
    </div>
  );
}
