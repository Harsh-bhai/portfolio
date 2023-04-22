import React,{useState} from 'react'
import Link from 'next/link'
// import dat from "../data/skills.json"
const Skills = ({}) => {
  let dat={
    "Next.js":{
        "img":"next.png",
        "desc":"Next.js is a flexible React framework that gives you building blocks to create fast web .."
    },
    "Tailwind CSS":{
        "img":"tailwind.png",
        "desc":"Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces.."
    },
    "Python":{
        "img":"python.png",
        "desc":"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
    },
    "JavaScript":{
        "img":"js.png",
        "desc":"JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.."
    },
    "Strapi":{
        "img":"strapi.png",
        "desc":"Strapi is an open-source, Node. js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks.."
    },
    "React.js":{
        "img":"react.png",
        "desc":"React.js is a free and open-source front-end JavaScript library for building user interfaces based on UI components. ."
    },
    
    "MongoDB":{
        "img":"MongoDB.png",
        "desc":"MongoDB is a non-relational document database that provides support for JSON-like storage."
    },
    "Java":{
        "img":"java.png",
        "desc":"Java is a high-level, class-based, object-oriented programming language"
    },
    "MySQL":{
        "img":"mysql.png",
        "desc":"MySQL is a programming language for storing and processing information in a relational database"
    },
    "C":{
        "img":"c.png",
        "desc":"What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems."
    }
    
    
}
  let data = Object.entries(dat)
  const [hoveredItem, setHoveredItem] = useState(null);
  console.log(data)
  return (
    <div className="m-4">
      <h1 className='text-center  sm:text-5xl text-2xl font-medium title-font mb-4 text-cyan-500'>Skills</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 mx-4">
    {data.map((item)=>{
        return (
          <div key={item} className="flex flex-wrap justify-center items-center">
              <div
                className="relative flex flex-col items-center justify-center mx-4 my-4 w-64 h-64 rounded-lg overflow-hidden "
                onMouseEnter={() => setHoveredItem(item[0])}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {hoveredItem !== item[0] && (
                  <img src={item[1].img} alt={item[0]} className=" object-cover object-center w-60" />
                )}
                {hoveredItem === item[0] && (
                  <div className="cursor-pointer absolute rounded-lg flex flex-col items-center justify-center text-center p-4 bg-gray-700 bg-opacity-80 text-white transform transition-all">
                    <p className="text-lg font-bold mb-2">{item[0]}</p>
                    <p>{item[1].desc}</p>
                  </div>
                )}
              </div>
          </div>
        );
    })}
    </div>
    </div>
  );

}

export default Skills

// export async function getServerSideProps(context) {
//   let a = await fetch(`${process.env.NEXT_PUBLIC_BASE}/api/getskills`, {
//     headers: {
//       "Content-Type": "applicaton/json",
//     },
//   });
//   let dat = await a.json();
//   let data = Object.entries(dat)
//   return {
//     props: { data:JSON.parse(JSON.stringify(data)) }, // will be passed to the page component as props
//   };
// }