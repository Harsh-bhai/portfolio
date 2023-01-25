import React from 'react'
import Link from 'next/link'
const Skills = () => {
  return (
    <div><section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">Skills</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative justify-center items-center">
              <img alt="gallery" className="absolute   h-40 object-cover object-center " src="nextjs.png" />
              <div className="px-8 py-10 relative z-10 w-full shadow-lg rounded-lg bg-cyan-300 opacity-0 hover:opacity-100 transition ">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Next.js</h1>
                <p className="leading-relaxed font-semibold my-2">Next.js is a flexible React framework that gives you building blocks to create fast web applications..</p>
               <Link href={'https://vmartfrontend.onrender.com/'}><a target={'_blank'} className="tracking-widest text-sm title-font font-medium text-green-600 py-4 mb-1 cursor-pointer underline">Link to the project</a></Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative justify-center items-center">
              <img alt="gallery" className="absolute   h-40 object-cover object-center " src="/tailwind.png" />
              <div className="px-8 py-10 relative z-10 w-full shadow-lg rounded-lg bg-cyan-300 opacity-0 hover:opacity-100 transition ">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Tailwind CSS</h1>
                <p className="leading-relaxed font-semibold my-2">Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces..</p>
               <Link href={'https://vmartfrontend.onrender.com/'}><a target={'_blank'} className="tracking-widest text-sm title-font font-medium text-green-600 py-4 mb-1 cursor-pointer underline">Link to the project</a></Link>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative justify-center items-center">
              <img alt="gallery" className="absolute   h-40 object-cover object-center " src="js.png" />
              <div className="px-8 py-10 relative z-10 w-full shadow-lg rounded-lg bg-cyan-300 opacity-0 hover:opacity-100 transition ">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">JavaScript</h1>
                <p className="leading-relaxed font-semibold my-2">JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions..</p>
               <Link href={'https://vmartfrontend.onrender.com/'}><a target={'_blank'} className="tracking-widest text-sm title-font font-medium text-green-600 py-4 mb-1 cursor-pointer underline">Link to the project</a></Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative justify-center items-center">
              <img alt="gallery" className="absolute   h-20 object-cover object-center " src="strapi.png" />
              <div className="px-8 py-10 relative z-10 w-full shadow-lg rounded-lg bg-cyan-300 opacity-0 hover:opacity-100 transition ">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Strapi</h1>
                <p className="leading-relaxed font-semibold my-2"> Strapi is an open-source, Node. js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks..</p>
               <Link href={'https://vmartfrontend.onrender.com/'}><a target={'_blank'} className="tracking-widest text-sm title-font font-medium text-green-600 py-4 mb-1 cursor-pointer underline">Link to the project</a></Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative justify-center items-center">
              <img alt="gallery" className="absolute   h-40 object-cover object-center " src="react.png" />
              <div className="px-8 py-10 relative z-10 w-full shadow-lg rounded-lg bg-cyan-300 opacity-0 hover:opacity-100 transition ">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">React</h1>
                <p className="leading-relaxed font-semibold my-2">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. .</p>
               <Link href={'/python'}><h2 className="tracking-widest text-sm title-font font-medium text-green-600 py-4 mb-1 cursor-pointer underline">Link to the project</h2></Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative justify-center items-center">
              <img alt="gallery" className="absolute   h-40 object-cover object-center " src="/python.png" />
              <div className="px-8 py-10 relative z-10 w-full shadow-lg rounded-lg bg-cyan-300 opacity-0 hover:opacity-100 transition ">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Python</h1>
                <p className="leading-relaxed font-semibold my-2">Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.</p>
               <Link href={'/python'}><h2 className="tracking-widest text-sm title-font font-medium text-green-600 py-4 mb-1 cursor-pointer underline">Link to the project</h2></Link>
              </div>
            </div>
          </div>
        
          
        </div>
      </div>
    </section></div>
  )
}

export default Skills