import Link from "next/link";
import React from "react";
import { TbArrowBigRight } from "react-icons/tb";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  md:-translate-y-12">
            <img
              className="object-cover object-center rounded -translate-y-20 animate-fadein brightness-75 z-10 relative "
              alt="hero"
              src="white1-min.png"
            />
            <img src="oval.png" className="brightness-75 -translate-y-[10.25rem] md:-translate-y-[14.50rem] skew-x-12 animate-translateyoval2" alt="" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate-fadein md:-translate-y-0 -translate-y-32">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-500">
              Hi! I am Harsh Dewangan
            </h1>
            <p className="mb-8 leading-relaxed font-semibold text-cyan-600">
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />I am a student at Bhilai Institute of Technology Durg, pursuing my Bachelor&apos;
s degree in Computer
                Science and Engineering.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 text-2xl hidden md:block" />I am a
                full-stack developer and a programmer with skills in Next.js,
                Tailwind CSS, Strapi, JavaScript, and Python, as well as
                experience with programming languages such as C, C++, and Java.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />I have
                experience in creating both frontend and backend for web
                applications, as well as knowledge in data science.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />
                My passion is to create clean, efficient, and user-friendly
                websites and web applications. Check My skills<Link href={"/skills"}>
                <a className="font-bold text-white ml-1 hover:text-cyan-800 translate-y-6 -translate-x-10 md:translate-x-0 md:translate-y-0">
                  Here.
                </a>
              </Link>
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />I am skilled
                in Next.js, I am able to build performant and scalable web
                applications.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />I use Tailwind
                CSS to create beautiful and consistent designs.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />
                My experience with Strapi gives me the ability to create a
                headless Content Management System(CMS) backend.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />I am
                well-versed in various databases, such as MySQL, PostgreSQL,
                MongoDB, and SQLplus.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />I am a quick
                learner, detail-oriented, and always eager to take on new
                challenges.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />I am always
                seeking to improve my skills and keep up to date with the latest
                technologies and trends.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 text-2xl hidden md:block" />I am ready
                  and available for an internship opportunity to gain hands-on
                  experience in a professional setting. I am excited to work in
                  a team and learn from experienced professionals.
              </div>
              <br />
              <div className="flex mx-2 items-center">
                <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />I am
                  confident that my skills, attitude, and work ethic make me a
                  valuable asset to any team.
              </div>
              <br />
              Please feel free to contact me if you have any questions or
                would like to discuss a potential internship opportunity.
              <br /> Check my all{" "}
             
              <br />
              Check out my
              <Link href={"https://www.linkedin.com/in/harsh-dewangan-3a44b5232/"}>
                <a target={"_blank"} className="font-bold text-cyan-700 hover:text-cyan-800 underline">
                  {" "}
                  Linkedin
                </a>
              </Link>{" "}
              profile
              {/* <p className="text-xl my-4">Web Development</p>
              I can create frontend and backend as well.
              <br />I can create frontend using : Next.js ,Tailwind Css, HTML
              ,etc.
              <br />I can create Backend using : Next.js ,Strapi, Node.js
              ,Django ,etc.
              <p className="text-xl my-4">Programming Languages</p>I can program
              in C ,C++ ,Python ,JavaScript .
              <p className="text-xl my-4">Data Science</p>I can deal with Big
              Data ,can filter data ,can create/train models using Python
              language . */}
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
