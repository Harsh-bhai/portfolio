/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import data from "../data/skills.json";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef([]);
  skillsRef.current = [];

  useEffect(() => {
    gsap.from(".skillstitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        end: "top 30%",
      },
    });

    // Scroll-triggered animation for the content
    gsap.from(".skillscontent", {
      opacity: 0,
      // y: 50,
      duration: 1,
      stagger: 0.3,
      // ease: "elastic",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 50%",
        end: "top 20%",
      },
    });
  }, []);



  const enterHandler = (i) => {
    const cursors = document.querySelectorAll(".skillscontent");
    cursors[i].style.transform = "scale(1.2)";
    cursors[i].style.transition = "all 0.5s ease";
  };

  const exitHandler = (i) => {
    const cursors = document.querySelectorAll(".skillscontent");
    cursors[i].style.transform = "scale(1)";
  };
 

  return (
    <section id="skills" className="mt-16 relative">
      <img
        src="halfwave.png"
        className="absolute w-[70%] md:w-[35rem] md:-left-[10%] left-1 md:top-28 top-0 opacity-50 -z-20 wave"
        alt=""
      />
      <h1 className="skillstitle text-center sm:text-5xl text-3xl font-medium title-font mb-10 text-white">
        Skills
      </h1>
      <div
        ref={skillsRef}
        className="grid md:grid-cols-2  lg:grid-cols-4 gap-8 grid-cols-1 mx-8 place-items-center md:mx-40"
      >
        {Object.entries(data).map(([key, { img, desc }], index) => (
          <img
          // onMouseEnter={() => {enterHandler(index)}}
          // onMouseLeave={() => {exitHandler(index)}}
            key={index}
            src={`/${img}`}
            className="skillscontent w-52 h-52 transition-transform duration-200 hover:shadow-lg hover:scale-110 hover:shadow-cyan-500  ease-in"
            alt={key}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;