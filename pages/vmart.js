import Link from "next/link";
import React from "react";

const Vmart = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center my-6 flex-col mx-4">
        <img src="/vmartfull.jpg" className="md:w-1/2 rounded-lg inset-0" alt="" />
        <div>
        <div className="md:-ml-96 mx-4 md:text-2xl font-semibold my-10 text-black flex flex-col space-y-10">
        <p>V-Mart is an Online E-commerece website used to sell groceriers ,fruits and many more ...</p>
        <p><p className="font-bold">Technologies Used : </p> Next.js ,Tailwind Css ,Strapi ,JavaScript ,Html ,PostgreSQL  </p>
        <Link href={'https://vmartfrontend.onrender.com/'} ><a target="_blank" className="text-green-700 hover:text-cyan-800 cursor-pointer">Link to the Project</a></Link >
        </div>
        </div>
      </div>
    </div>
  );
};

export default Vmart;
