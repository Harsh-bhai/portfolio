/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  useEffect(() => {
    gsap.from(".skillstitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        end: "top 30%",
      },
    });

    // Scroll-triggered animation for the content
    gsap.from(".skillscontent", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#skills",
        start: "top 50%",
        end: "top 20%",
      },
    });
  }, []);
  let dat = {
    "Next.js": {
      img: "next.png",
      desc: "Next.js is a flexible React framework that gives you building blocks to create fast web ..",
    },
    "Tailwind CSS": {
      img: "tailwind.png",
      desc: "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces..",
    },
    Python: {
      img: "python.png",
      desc: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.",
    },
    JavaScript: {
      img: "js.png",
      desc: "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions..",
    },
    Strapi: {
      img: "strapi.png",
      desc: "Strapi is an open-source, Node. js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks..",
    },
    "React.js": {
      img: "react.png",
      desc: "React.js is a free and open-source front-end JavaScript library for building user interfaces based on UI components. .",
    },

    MongoDB: {
      img: "MongoDB.png",
      desc: "MongoDB is a non-relational document database that provides support for JSON-like storage.",
    },
    Java: {
      img: "java.png",
      desc: "Java is a high-level, class-based, object-oriented programming language",
    },
    MySQL: {
      img: "mysql.png",
      desc: "MySQL is a programming language for storing and processing information in a relational database",
    },
    C: {
      img: "c.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    "C++": {
      img: "cpp.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    postgresql: {
      img: "postgresql.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    git: {
      img: "git.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    django: {
      img: "django.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    github: {
      img: "github.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    "node.js": {
      img: "nodejs.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    "express.js": {
      img: "express.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    bash: {
      img: "bash.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    rust: {
      img: "rust.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },
    flutter: {
      img: "flutter.png",
      desc: "What is C programming language used for? The C language is a high-level, general-purpose programming language. It provides a straightforward, consistent, powerful interface for programming systems.",
    },

  };
  let data = Object.entries(dat);
  const [hoveredItem, setHoveredItem] = useState(null);
  // console.log(data)
  return (
    <section id="skills" className=" mt-16 relative">
      <img
        src="halfwave.png"
        className="absolute w-[70%] md:w-[35rem] md:-left-[10%] left-1 md:top-28 top-0  opacity-50 -z-20 wave"
        alt=""
      />
      <h1 className="skillstitle text-center sm:text-5xl text-3xl font-medium title-font mb-10 text-white">
        Skills
      </h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 grid-cols-1 mx-8 place-items-center md:mx-40">
        {data.map((item, index) => {
          return (
            <img
              key={index}
              src={`/${item[1].img}`}
              className="skillscontent w-52 h-52 hover:scale-110 transition-transform hover:shadow-lg  hover:shadow-cyan-500 delay-100 duration-300"
              alt={item[0]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

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
