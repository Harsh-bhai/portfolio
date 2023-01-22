import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded -translate-y-20"
              alt="hero"
              src="/white1.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hi! I am Harsh Dewangan
            </h1>
            <p className="mb-8 leading-relaxed font-semibold">
              I am a Web Developer ,Programer ,Data Scientist. Currently
              pursuing B.Tech from Bhilai Institute Of Technology ,Durg. I am Currently at 2nd year ,4th Semester.<br/> I have these <Link  href={'/skills'}><a className="font-bold text-cyan-700 hover:text-cyan-800">Skills.</a></Link>
             <p className="text-xl my-4">Web Development</p>
             I can create frontend and backend as well.
              <br />I can create frontend using : Next.js ,Tailwind Css, HTML ,etc.
              <br />I can create Backend using : Next.js ,Strapi, Node.js ,Django ,etc.
             <p className="text-xl my-4">Programming Languages</p>
              I can program in C ,C++ ,Python ,JavaScript .
             <p className="text-xl my-4">Data Science</p>
              I can deal with Big Data ,can filter data ,can create/train models using Python language .
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
