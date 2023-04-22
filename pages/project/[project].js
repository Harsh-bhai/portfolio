import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TbArrowBigRight } from "react-icons/tb";
import data from "../../data/allprojects.json"

const Project = ({}) => {
  // console.log(JSON.stringify(data))
    const router=useRouter()
    const {project}=router.query
    let dataitem=data[project]
    console.log(dataitem,"here")

    return (
      <div className="min-h-screen">
        <h1 className="mx-4 md:mx-14 my-6 flex text-3xl font-semibold text-cyan-500">
           <p className="mx-4 ">{dataitem.name}</p>{" "}
        </h1>
        <div className="img mx-8 md:mx-20  flex justify ">
          <img src={`/${dataitem.img}`} className=" md:h-96  rounded-xl brightness-75" alt="" />
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