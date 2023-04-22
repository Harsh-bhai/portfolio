import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TbArrowBigRight } from "react-icons/tb";
// import data from "../../data/allprojects.json"

const Project = ({}) => {
  // console.log(JSON.stringify(data))
  let data ={
    "Vmart": {
      "type": "E-commerece",
      "name": "V-Mart",
      "desc": "V-Mart is an Online E-commerece website used to sell groceriers ,fruits and many more ...",
      "img":"vmartfull.jpg",
      "maindesc":"V-Mart is an Online E-commerece website used to sell groceriers ,fruits and many more ...",
      "tech":"Next.js ,Tailwind Css ,Strapi ,JavaScript ,Node.js ,PostgreSQL etc.",
      "link":"https://github.com/Harsh-bhai/Ecommerece"
    },
    "PlaylistPilot": {
      "type": "Music Organzier",
      "name": "PlaylistPilot",
      "desc": "PlaylistPilot is a Music Organizer web application. It is based on TAG system, it allow user to create, modify playlist on the basis of TAGS",
      "img":"playlistpilot.jpg",
      "maindesc":"PlaylistPilot is a Music Organizer web application. It is based on TAG system, it allows user to create, modify playlist on the basis of TAGS.This application makes it easy to sort through large music libraries by enabling the use of tags to categorize songs by artist name, band name, genre, moods, and much more.",
      "tech":"Next.js ,Tailwind Css ,JavaScript ,Node.js ,MongoDB etc.",
      "link":"https://github.com/Harsh-bhai/PlaylistPilot"
    },
    "CrimeMapping": {
      "type": "Interactive data visualizer",
      "name": "Crime Mapping",
      "desc": "Created a website for Police to track crime record visually on Map, based on the previous crime.",
      "img":"crimemapping.jpg",
      "maindesc":"Created a website for Police to track crime record visually on Map, based on the previous crime. It maps crime on the basis of previous FIR details",
      "tech":"Next.js ,Tailwind Css ,Strapi ,JavaScript ,Node.js ,PostgreSQL etc.",
      "link":"https://github.com/Harsh-bhai/crime-mapping"
    }, 
  
    "Snakegame": {
      "type": "Game",
      "name": "Snake game",
      "desc": "This is a 2D snake game created using python",
      "img":"snake.jpg",
      "maindesc":"This is a 2D snake game created using python",
      "tech":"Python ,pygame library",
      "link":"https://github.com/Harsh-bhai/Snake-game"
    },
  
     "BhaskarDentalCare": {
      "type": "Dental Clinic",
      "name": "Bhaskar Dental Care",
      "desc": "Bhaskar Dental Care is a hospital management website used to manage patients etc.",
      "img":"dental.jpg",
      "maindesc":"Bhaskar Dental Care is a Portfolio website and a hospital management website used to manage patients etc.",
      "tech":"Next.js ,Tailwind Css ,Strapi ,JavaScript ,Node.js ,PostgreSQL etc.",
      "link":"https://github.com/Harsh-bhai/Dental-clinic"
    }
    
  }
  
  
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