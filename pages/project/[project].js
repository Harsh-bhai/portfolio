import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TbArrowBigRight } from "react-icons/tb";
import data from "../../data/allprojects.json"

const Project = ({}) => {
  const router=useRouter()
    const {project}=router.query
    if (!project) {
      return <div>Loading...</div>;
    }
    let dataitem=data[project]
    // console.log(dataitem,"here")

    return (
      <div className="min-h-screen">
        <h1 className="mx-4 md:mx-14 my-6 flex text-3xl font-semibold text-cyan-500">
           <p className="mx-4 ">{dataitem.name}</p>{" "}
        </h1>
        <div className="img mx-8 md:mx-20  flex flex-col md:flex-row justify-between items-center  ">
          <img src={`/${dataitem.img}`} className=" md:h-96  rounded-xl brightness-75" alt="" />
          {dataitem.live && <Link  href={dataitem.live}  >
          <a target="_blank"><button className="flex mx-auto text-white bg-gradient-to-tr from-violet-400 via-cyan-700 to-blue-600 border-0 py-2 px-8 md:px-10 md:py-6 hover:from-violet-500 hover:via-cyan-700 hover:to-blue-600 hover:bg-gradient-to-br  focus:outline-none hover:bg-indigo-500 transition-transform font-semibold rounded-full mt-4 md:mt-0 text-lg md:text-3xl md:mr-36 animate-pulse">Live Preview</button></a>
           </Link>}
        </div>
        <div className="mx-10 flex flex-col space-y-4 my-10 text-cyan-600 ">
          <p className="flex  items-center text-sm md:text-xl  leading-relaxed">
            <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />
            {dataitem.maindesc}
          </p>
          <p className="flex  items-center text-sm md:text-xl  leading-relaxed">
            <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />
            <div className="flex flex-col"><p className="font-semibold mr-2 ">Technology Used : </p>
             {dataitem.tech}</div>
          </p>
          <Link href={dataitem.link}>
            <a
              target={"_blank"}
              className="flex  items-center text-sm md:text-xl underline leading-relaxed text-cyan-400 hover:text-cyan-600 font-semibold"
            >
              <TbArrowBigRight className="text-cyan-800 mx-4 hidden md:block" />
              View on Github
            </a>
          </Link>
        </div>
      </div>
    );
}

export default Project

// export async function getServerSideProps(context) {
//   let a = await fetch(`${process.env.NEXT_PUBLIC_BASE}/api/getalldata`, {
//     headers: {
//       "Content-Type": "applicaton/json",
//     },
//   });
//   let data = await a.json();
//   // let data = Object.entries(dat)
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }