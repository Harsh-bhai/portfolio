import Link from "next/link";
import React from "react";
import { TbArrowBigRight } from "react-icons/tb";

const Vmart = () => {
  return (
    <div className="min-h-screen">
      <h1 className="mx-14 my-6 flex text-2xl font-semibold ">
        Project : <p className="mx-4">V-Mart</p>{" "}
      </h1>
      <div className="img mx-4 md:mx-40 flex justify-center ">
        <img src="/vmartfull.jpg " className=" md:h-96  rounded-xl" alt="" />
      </div>
      <div className="mx-10 flex flex-col space-y-4 my-10 ">
        <p className="flex  items-center text-sm md:text-xl  leading-relaxed">
          <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />
          V-Mart is an Online E-commerece website used to sell groceriers
          ,fruits and many more ...
        </p>
        <p className="flex  items-center text-sm md:text-xl  leading-relaxed">
          <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />
          <div className="flex flex-col"><p className="font-semibold mr-2 ">Technology Used : </p>
           Next.js ,Tailwind Css ,Strapi ,JavaScript ,Node.js ,PostgreSQL
          etc.</div>
        </p>
        <Link href={"https://vmartfrontend.onrender.com"}>
          <a
            target={"_blank"}
            className="flex  items-center text-sm md:text-xl underline leading-relaxed text-cyan-800 hover:text-green-700 font-semibold"
          >
            <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />
            Link to the project.
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Vmart;
