// yarn add react-icons --save
// yarn add hamburger-react
"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
// import { FaRegLightbulb } from "react-icons/fa";
// import { IoBagHandle } from "react-icons/io5";
// import { MdInfoOutline } from "react-icons/md";
// import { FaHandshakeSimple } from "react-icons/fa6";


import Link from "next/link";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import AudioPlayer from "./audioplayer";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const Navbar = () => {
  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1, // Adjust the duration as needed
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 70, // Optional: Adjust the offset if you have a fixed header or additional spacing
      },
    });
  };

  const toggle = () => {
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".maindiv",
      start: "top 20%",
      end: "+=999999px", // Set to a large value to make it effectively infinite
      toggleClass: {
        targets: ".mainnav",
        className: "bg-gray-800",
      },
    });

  }, []);

  const TogglehiddenOverflow = () => {
    if(document.body.classList.contains("overflow-hidden"))
      document.body.classList.remove("overflow-hidden")
  };

  const ToggleFixedProperty = () => {
    fixedref.current.classList.contains("fixed")
      ? fixedref.current.classList.remove("fixed")
      : fixedref.current.classList.add("fixed");
  };
  const ref = useRef();
  const fixedref = useRef();
  return (
    <div ref={fixedref} className="fixed z-40 w-full mainnav top-0">
      <div className="navbar flex flex-col md:flex-row items-center  md:py-3  py-2 ">
        <div className=" top-0 left-0 absolute m-7 md:m-10 text-3xl font-thin md:hidden">
          {" "}
          <GiHamburgerMenu
            onClick={() => {
              toggle();
              TogglehiddenOverflow();
            }}
            className="text-white"
          />
        </div>
        <Link onClick={() => scrollToSection("hero")} href={"/"}>
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-cyan-900 md:z-10 my-4 md:my-0 mx-10 cursor-pointer">
            {/* <img src="/logo.png" className='h-12 ' alt="" /> */}
            <span className="ml-3 text-cyan-400 text-2xl ">Portfolio</span>
          </div>
        </Link>
        <div
          ref={ref}
          className="navitems flex flex-col md:flex-row md:items-center md:bg-inherit bg-slate-800 px-10 py-4 md:py-0 absolute top-0 left-0 transform transition-transform -translate-x-full h-screen md:h-auto md:w-full w-2/3 md:static md:translate-x-0  md:transition-none ease-in-out z-20"
        >
          <span
            className="absolute top-8 left-8
          "
            onClick={() => {
              toggle();
              TogglehiddenOverflow();
            }}
          >
            <AiFillCloseCircle className="text-4xl  font-extralight md:hidden" />
          </span>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8  mainitems my-24 md:my-4 space-y-6 md:space-y-0 ">
            {[
              { text: "About", section: "about" },
              { text: "Journey", section: "journey" },
              { text: "Skills", section: "skills" },
              { text: "Projects", section: "project" },
              { text: "Certifications", section: "certifications" },
              { text: "Connect", section: "contact" },
              { text: "Resume", href: "https://drive.google.com/file/d/1FwuC1w5y8ubWgUs9Q7l2SNHmZH6U00fg/view?usp=sharing" },
            ].map((item) => (
              <div
                key={item.text}
                onClick={() => {
                  toggle();
                  TogglehiddenOverflow();
                  scrollToSection(item.section || "");
                }}
                className="hover:text-cyan-100 font-semibold  text-cyan-400 cursor-pointer"
              >
                {item.section && item.text}
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.text}
                  </a>
                ) : null}
              </div>
            ))}
            <AudioPlayer src="music.mp3" className={"absolute top-2 right-5 hidden md:block animate-pulse"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
