/* eslint-disable @next/next/no-img-element */
import React,{useEffect} from "react";
import PointwiseStatement from "./PointwiseStatement";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";

gsap.registerPlugin(ScrollTrigger);


const About = () => {

  useEffect(() => {
    gsap.from(".abouttitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: 'top 80%',
        end: 'top 30%',
      },
    });

        // Scroll-triggered animation for the content
        gsap.from(".aboutcontent", {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: "#about",
            start: 'top 50%',
            end: 'top 20%',
          },
        });
  }, [])
  
  const info = [
    "Hi, I'm Harsh Dewangan. I am a Computer Science and Engineering student at Bhilai Institute of Technology Durg, driven by a passion for creating exceptional and user-friendly web experiences.",
    "As a full-stack developer, I bring a unique blend of creativity and technical expertise to my projects. Also I have a great knowledge of Data Structures and Algorithms(DSA).",
    "My enthusiasm for learning and detail-oriented approach make me a quick learner, always eager to take on new challenges.",
    "With a positive attitude and a proactive problem-solving approach, I am confident that my work ethic and dedication make me a valuable addition to any team.",
    "My journey in tech is not just about writing lines of code; it's about weaving a story of innovation, collaboration, and continuous growth.",
    "With every line of code, I embrace the art of problem-solving. I am not just a developer; I am a creator of solutions, fueled by curiosity and passion.",
    "I am actively seeking an internship opportunity to apply my skills in a professional setting, contribute to a team, and learn from experienced professionals.",
  ];
  
  
  return (
    <div>
      <section id="about" className="relative text-gray-600 body-font">
      <img
          src="halfwave.png"
          className="absolute w-[70%] md:w-[35rem] top-20 md:top-0  right-0 rotate-180   opacity-50 -z-20 wave"
          alt=""
        />
        <div className=" flex px-5 py-24 md:py-16 justify-center flex-col md:mx-40">
        <h1 className='abouttitle text-center sm:text-5xl text-3xl font-medium title-font mb-10 text-white'>About</h1>
        <PointwiseStatement points={info}/>

        </div>
      </section>
    </div>
  );
};

export default About;

{/* <h1 className='text-center sm:text-5xl text-2xl font-medium title-font mb-4 text-white'>About</h1> */}


