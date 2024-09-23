/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, useRef } from "react";
import dat from "../data/allprojects.json";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
gsap.registerPlugin(ScrollTrigger);
import { AiFillCloseCircle } from "react-icons/ai";
const Card = () => {
  const ref = useRef();
  const regex = /md:(?:-)?translate-x-\[\d+%]/g;

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-orange-500",
    "text-pink-500",
    "text-indigo-500",
    "text-teal-500",
    "text-cyan-500",
  ];

  // useEffect(() => {
  //   const isMobile = window.innerWidth < 768;
  //   if (!isMobile) {
  //       gsap.from(`.mainprojdiv`, {
  //         opacity: 0,
  //         y: 50,
  //         duration: 1,
  //         stagger: 0.5,
  //         scrollTrigger: {
  //           trigger: `.projsection`,
  //           start: "top 50%",
  //           end: "top 20%",
  //         },
  //       });
  //   }
  // }, []);
  const handleMainDivClick = (index) => {
    setSelectedItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  let data = Object.entries(dat);

  return (
    <section className="projsection  flex flex-wrap -mx-4 -mb-10 lg:mx-10 justify-evenly">
      {data.map((item, index) => {
        const isItemSelected = selectedItemIndex === index;
        const isEvenIndex = index % 2 === 0;

        return (
          <div
            key={index}
            className={`relative mainprojdiv sm:w-2/5 mb-10 px-4 rounded-xl shadow-sm transition-transform delay-75 cursor-pointer p-4 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 ${item[0]}datadiv`}
            onClick={() => handleMainDivClick(index)}
          >
            <div
              ref={ref}
              className={` infodiv absolute inset-0 z-20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 ${
                item[0]
              }data rounded-lg  ${
                isItemSelected
                  ? isEvenIndex
                    ? "md:translate-x-[117%]"
                    : "md:-translate-x-[117%]"
                  : "hidden"
              }`}
            >
              <div className="relative z-0 flex flex-col space-y-8 m-8">
                <AiFillCloseCircle
                  className="text-2xl absolute top-0 right-0  text-white font-extralight "
                  onClick={() => {
                    const infodivElements =
                      document.getElementsByClassName("infodiv");
                    console.log(infodivElements);

                    for (const infodivElement of infodivElements) {
                      const classNames = infodivElement.className;

                      if (regex.test(classNames)) {
                        // If the regex matches, add the "hidden" class
                        infodivElement.classList.add("hidden");
                        try {
                          infodivElement.classList.remove(
                            "md:translate-x-[117%]"
                          );
                          infodivElement.classList.remove(
                            "md:-translate-x-[117%]"
                          );
                        } catch (error) {
                          console.log(error);
                        }
                      }
                    }
                  }}
                />
                <h2 className="title-font  text-2xl font-medium text-center text-white ">
                  {item[1].name}
                </h2>
                <div className="flex flex-wrap justify-evenly">
                  {item[1].meta.tech.split(",").map((tech, index) => {
                    return (
                      <p
                        key={index}
                        className={`${colors[index % colors.length]}`}
                      >
                        #{tech}
                      </p>
                    );
                  })}
                </div>
                <p className="leading-relaxed text-base text-white">
                  {item[1].meta.maindesc}
                </p>
                <div className="flex justify-center items-center md:space-x-10 space-x-4 ">
                  <a
                    href={item[1].Links.link}
                    target="_blank"
                    className="flex justify-center"
                    rel="noreferrer"
                  >
                    <span className="bg-white  hover:bg-black text-purple-900 hover:text-white font-semibold text-xl py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-4">
                      <BsGithub />
                    </span>
                  </a>
                  {item[1].Links.live && (
                    <a
                      href={item[1].Links.live}
                      target="_blank"
                      className="flex justify-center"
                      rel="noreferrer"
                    >
                      <span className="bg-cyan-600 text-white  hover:bg-green-500  hover:text-white font-semibold text-xl py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-4">
                        <BsLink45Deg />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="rounded-lg h-64 overflow-hidden pointer-events-none">
              <img
                alt="content"
                className=" h-full w-full  delay-100 hover:delay-300  hover:scale-125  transition-transform"
                src={`/${item[1].img}`}
              />
            </div>
            <div className="flex flex-col space-y-4 pointer-events-none">
              <h1 className=" font-bold text-cyan-500 my-2">{item[1].type}</h1>
              <h2 className="title-font text-2xl font-medium text-white ">
                {item[1].name}
              </h2>
              <p className="leading-relaxed font-bold text-cyan-500">
                {item[1].desc}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
