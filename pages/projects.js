import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='min-h-screen'><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-10 md:mx-10 justify-evenly"> {/* remove md:mx-10 */}
      <Link  href={'/vmart'}>
        <div className="sm:w-2/5 mb-10 px-4  rounded-xl shadow-lg hover:scale-105 transition-transform delay-75 cursor-pointer p-4 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className=" h-full w-full  delay-100 hover:delay-300 brightness-50 hover:brightness-75   transition-transform" src="vmartfull.jpg"/>
          </div>
          <div className="flex flex-col space-y-4 ">
          <h1 className=' font-bold text-cyan-500 my-2'>E-commerece</h1>
          <h2 className="title-font text-2xl font-medium text-white ">V-Mart</h2>
          <p className="leading-relaxed text-base text-cyan-500">V-Mart is an Online E-commerece website used to sell groceriers ,fruits and many more ...</p>
          <div className="text-cyan-800 cursor-pointer font-bold hover:text-cyan-600 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
          </div>
          
        </div></Link>
      <Link  href={'/dental'}>
        <div className="sm:w-2/5 mb-10 px-4  rounded-xl shadow-lg hover:scale-105 transition-transform delay-75 cursor-pointer p-4 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className=" h-full w-full  delay-100 hover:delay-300 brightness-50 hover:brightness-75   transition-transform" src="dental.jpg"/>
          </div>
          <div className="flex flex-col space-y-4 ">
          <h1 className=' font-bold text-cyan-500 my-2'>Dental Clinic</h1>
          <h2 className="title-font text-2xl font-medium text-white ">Bhaskar Dental Care</h2>
          <p className="leading-relaxed text-base text-cyan-500">Bhaskar Dental Care is a hospital management website used to manage patients etc.</p>
          <div className="text-cyan-800 cursor-pointer font-bold hover:text-cyan-600 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
          </div>
          
        </div></Link>
        
      </div>
    </div>
  </section></div>
  )
}

export default Projects