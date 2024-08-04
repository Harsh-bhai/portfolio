import React, { useEffect } from 'react'
import TimeLineCard from './timelineCard'
import experience from "../data/professionalExperience.json"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {

  useEffect(() => {
    gsap.from(".experiencetitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#experience",
        start: 'top 80%',
        end: 'top 30%',
      },
    });

        // Scroll-triggered animation for the content
        gsap.from(".experiencecontent", {
          opacity: 0,
          ease : "elastic",
          y: 50,
          duration: 1,
          stagger: 0.7,
          scrollTrigger: {
            trigger: "#experience",
            start: 'top 50%',
            end: 'top 20%',
          },
        });
  }, [])

  let data = Object.values(experience)
  return (
    <section id="experience" className="mt-16 relative">
      <h1 className="experiencetitle text-center sm:text-5xl text-3xl font-medium title-font mb-10 text-white">
        Professional Experience
      </h1>
      <div className="md:mx-36 bg-inherit py-6 flex flex-col justify-center sm:py-12">
    <div className="py-3 sm:mx-auto w-full px-2 sm:px-0">
      <div className="relative text-gray-700 antialiased text-sm font-semibold">
        {/* Vertical bar running through middle */}
        <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2" />
        {
          data.map((exp, index) => (
            <TimeLineCard
              className="experiencecontent"
              key={index}
              leftCard={index % 2 === 0}
              ImgSrc={exp.img}
              role={exp.role}
              title={exp.company}
              duration={exp.duration}
              desriptionArray={exp.points}
            />
          ))
        }
      </div>
    </div>
  </div>
    </section>
  )
}

export default Timeline