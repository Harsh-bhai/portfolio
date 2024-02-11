import React,{useEffect} from 'react'
import Link from 'next/link'
import dat from "../data/allprojects.json";
import Card from './card';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";

gsap.registerPlugin(ScrollTrigger);
const Project = () => {

  let data = Object.entries(dat)
  useEffect(() => {
        gsap.from(".projecttitle", {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: "#project",
            start: 'top 80%',
            end: 'top 30%',
          },
        });
    
            // Scroll-triggered animation for the content
            // gsap.from(".projectcontent", {
            //   opacity: 0,
            //   y: 50,
            //   duration: 1,
            //   scrollTrigger: {
            //     trigger: "#project",
            //     start: 'top 50%',
            //     end: 'top 20%',
            //   },
            // });
            
           

      }, [])
    
  return (
    <div className="min-h-screen">
      <section id='project' className="text-gray-600 body-font ">
        <div className=" px-5 py-24 mx-auto">
      <h1 className='projecttitle text-center sm:text-5xl text-3xl font-medium title-font my-20 text-white'>Projects</h1>
          
            <Card/>
        </div>
      </section>
    </div>
  )
}

export default Project