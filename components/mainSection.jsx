/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import dynamic from "next/dynamic";
import Socials from "./socials";

const MainSection = () => {
  const DynamicTypewriter = dynamic(() => import("typewriter-effect"), {
    ssr: false,
  });
  const [showTypewriter, setShowTypewriter] = useState(false);
  useEffect(() => {
    setShowTypewriter(true);
  }, []);
  return (
    <div className="container relative mx-auto flex px-5 py-24 md:py-4 md:flex-row flex-col items-center justify-between">
      <div className="">
        <div className=" lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-32 md:-translate-y-10">
          <h1 className="text-cyan-500 title-font sm:text-5xl text-3xl mb-4 font-medium  animate-fadein">
            <span className="md:text-3xl text-xl text-white mx-1">Hi! I am</span> <br/> Harsh Dewangan
            <p className="text-base md:text-2xl text-white my-2">
              {showTypewriter && (
                <DynamicTypewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Programmer",
                      "Student",
                      "Data Scientist Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              )}
            </p>
          </h1>
          <p className="mb-8 text-cyan-500 leading-relaxed">
            Pursuing B.Tech from Bhilai Institute Of Technology ,Durg .<br />
            Know more about me -
            <Link href={"/about"}>
              <a className="text-white  font-bold"> Here</a>
            </Link>{" "}
          </p>
          <div className="flex justify-center">
            <Link href={"/contact"}>
              <button className="flex text-white bg-cyan-500 border-0 py-1 px-6 items-center focus:outlin6-no6 animate-pulsee hover: hover:text-cyan-500 hover:bg-white rounded-full text-xs space-x-1 md:text-lg">
                <span>Hire</span> <span>Me</span>
              </button>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1L9cNLxiTJwcHMAH8H7J60dSglMVQOyyd/view?usp=sharing"
              }
            >
              <a target={"_blank"}>
                <button className="ml-4  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 hover:text-white rounded-full text-xs md:text-lg">
                  Resume
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <div className="relative w-full max-w-lg">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div></div> */}
        <img
          src="wave.png"
          className="absolute w-[20rem] md:w-[50rem] -z-20 -translate-y-[35rem] md:translate-y-0 -translate-x-3 md:-translate-x-32 opacity-30 md:opacity-70"
          alt=""
        />
        <img
          className="object-cover object-center rounded animate-fadein5sec -translate-y-20 hidden md:block md:h-[50rem] brightness-75  hover:brightness-100 transition-transform"
          alt="hero"
          src="white2-min.png"
        />
        <img
          src="oval.png"
          alt=""
          className="absolute h-48 -translate-y-64 -rotate-12 -z-10 translate-x-0 animate-translateyoval hidden md:block brightness-75"
        />
      </div>
      {/* <Socials/> */}
    </div>
  );
};

export default MainSection;
