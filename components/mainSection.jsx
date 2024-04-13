/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


const MainSection = () => {
  const timeline = gsap.timeline();

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1, // Adjust the duration as needed
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 70, // Optional: Adjust the offset if you have a fixed header or additional spacing
      },
    });
  };

  
  const DynamicTypewriter = dynamic(() => import("typewriter-effect"), {
    ssr: false,
  });
  const [showTypewriter, setShowTypewriter] = useState(false);
  useEffect(() => {
    setShowTypewriter(true);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if(!isMobile){
          // Set the initial position of the mask (fully covering the boy image)
          gsap.set(".whiteimg", { clipPath: 'inset(0% 0% 0% 0%)' })
          timeline.from(".wave",{opacity:0,duration:1,ease:"power4"})
          timeline.from(".main",{opacity:0,ease:"power1",duration:1.5})
          timeline.from(".oval", {y:"-1000%", opacity:0, duration: 3, ease: "power1"}, "-=3.5")
          // Reveal the boy image using a clipping mask
          timeline.from(".whiteimg", { clipPath: 'inset(0% 0% 100% 0%)',duration:3},"-=2.6")
          timeline.from(".scrolldown",{opacity:0,duration:1},"-=1.5")
    }
       
      }, [])

    

  

  return (
    <section id="hero" className="h-screen lg:h-fit relative w-screen mx-auto flex px-5 py-24 md:py-16 md:flex-row flex-col items-center justify-evenly">
      
      <div className="">
        <div className="maindiv lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center md:mx-32 lg:-translate-y-10 main lg:mt-0 mt-20">
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
            <span onClick={() => scrollToSection("about")} >
              <a className="text-white cursor-pointer font-bold"> Here</a>
            </span>{" "}
          </p>
          <div className="flex justify-center">
              <button onClick={() => scrollToSection("contact")} className="flex text-white bg-cyan-500 border-0 py-1 px-6 items-center focus:outlin6-no6 animate-pulsee hover: hover:text-cyan-500 hover:bg-white rounded-full text-xs space-x-1 md:text-lg">
                <span>Hire</span> <span>Me</span>
              </button>
            <Link
              href={
                "https://drive.google.com/file/d/1xwMtdY5wB-s-vdsSGO1MyVfspw-IvKce/view?usp=sharing"
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
      <div className="lg:max-w-lg lg:block hidden w-5/6 photodiv">
        <img
          src="halfwave.png"
          className="absolute w-[70%] md:w-[35rem] md:-left-[10%] left-1 md:-top-10 top-0  opacity-50 -z-20 wave"
          alt=""
        />
        <img
          className="object-cover object-center rounded  -translate-y-[6.4rem] hidden lg:block md:h-[50rem] brightness-90 transition-transform whiteimg"
          alt="hero"
          src="white3min.png"
        />
        <img
          src="oval 2.png"
          alt=""
          className="absolute h-48 md:-translate-y-64 -rotate-12 -z-10 translate-x-0  hidden lg:block brightness-75 oval "
          // animate-translateyoval
        />
      </div>
      {/* <Socials/> */}
      <div onClick={() => scrollToSection("about")} className="absolute cursor-pointer lg:bottom-48 bottom-0 lg:right-1/2 flex flex-col lg:translate-x-10 justify-center items-center space-y-2 scrolldown">
        <span className="text-2xl text-white">Scroll Down</span>
      <IoIosArrowDown className=" text-white text-3xl animate-bounce "/>
      </div>
    </section>
  );
};

export default MainSection;
