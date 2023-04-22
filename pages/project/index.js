import React from "react";
import Link from "next/link";
// import dat from "../../data/allprojects.json"

const index = ({  }) => {
  let dat={
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
  
  
  let data = Object.entries(dat)
  console.log(JSON.stringify(data));
  return (
    <div className="min-h-screen">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 md:mx-10 justify-evenly">
            {" "}
            {/* remove md:mx-10 */}
            {data.map((item) => {
              return(
                <Link key={item[0]} href={`/project/${item[0]}`}>
               {/* { console.log(item,"here")} */}
                <div className="sm:w-2/5 mb-10 px-4  rounded-xl shadow-sm hover:scale-105 transition-transform delay-75 cursor-pointer p-4 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      className=" h-full w-full  delay-100 hover:delay-300 brightness-75 hover:brightness-90   transition-transform"
                      src={`/${item[1].img}`}
                    />
                  </div>
                  <div className="flex flex-col space-y-4 ">
                    <h1 className=" font-bold text-cyan-500 my-2">
                    {item[1].type}
                    </h1>
                    <h2 className="title-font text-2xl font-medium text-white ">
                    {item[1].name}
                    </h2>
                    <p className="leading-relaxed text-base text-cyan-500">
                    {item[1].desc}
                    </p>
                    <div className="text-cyan-800 cursor-pointer font-bold hover:text-cyan-600 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;

// export async function getServerSideProps(context) {
//   let a = await fetch(`${process.env.NEXT_PUBLIC_BASE}/api/getalldata`, {
//     headers: {
//       "Content-Type": "applicaton/json",
//     },
//   });
//   let dat = await a.json();
//   let data = Object.entries(dat)
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
