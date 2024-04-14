import CertificationCard from "./certificationCard";
import React, { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import PointwiseStatement from "./PointwiseStatement";
gsap.registerPlugin(ScrollTrigger);

export default function CertificationGrid() {
  const certifications = [
    {
      title: "Level 3 GenAl: Prompt Engineering",
      image: "/google.png",
      link: "https://www.cloudskillsboost.google/public_profiles/758238f5-acde-42c7-96b8-597230e376ca/badges/5757593?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Python for Data Science",
      image: "/nptel.png",
      link: "https://drive.google.com/file/d/1huQFcqwGKw-xvEhgwavclOkNvnlAoYc7/view?usp=sharing",
    },
    {
      title: "Programming in Java",
      image: "/nptel.png",
      link: "https://drive.google.com/file/d/1FcLfwulewKTCXdnIdg9YWw5eUKQ4_Fsw/view?usp=sharing",
    },
    {
      title: "Programming in Modern C++",
      image: "/nptel.png",
      link: "https://drive.google.com/file/d/1WnvTV6PPAPfatVsq35BjqVsTeZJuklBp/view?usp=sharing",
    },
    // Add more certifications as needed
  ];

  useEffect(() => {
    gsap.from(".certficationstitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".pointwise",
        start: "bottom 80%",
        end: "bottom 30%",
      },
    });
    gsap.from(".extrastitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".extrastitle",
        start: "top 90%",
        end: "top 30%",
      },
    });

    // Scroll-triggered animation for the content
    gsap.from(".certficationscontent", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        // markers: true,
        trigger: ".certficationstitle",
        start: "bottom 80%",
        end: "bottom 20%",
      },
    });
    // Scroll-triggered animation for the content
    gsap.from(".pointwise", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#certifications",
        start: "top 90%",
        end: "top 20%",
      },
    });
  }, []);

  const extras =["I have been a part of the Google Developer Students Club (GDSC) at BIT Durg as a web developer.",
"I helped the team in organizing certain tech events in college.",
"Solved 100+ problems on Leetcode.",]

  return (
    <section id="certifications" className="md:mx-40">
      <h1 className="extrastitle text-center sm:text-5xl text-3xl font-medium title-font mb-10 text-white">
        Extras
      </h1>
      <div className="pointwise">
      <PointwiseStatement points={extras} />
      </div>
      <h2 className="certficationstitle text-center sm:text-3xl text-3xl font-medium title-font mt-20 text-white">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:mb-20 ">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
}
