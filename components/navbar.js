import React from 'react'
import { useRef } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import Link from 'next/link';
import Hamburger from 'hamburger-react'
const Navbar = () => {
  const toggle = () => {
    if ((ref.current.classList.contains("-translate-x-full"))) {
      ref.current.classList.remove("-translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else if ((ref.current.classList.contains("translate-x-0"))) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("-translate-x-full")
    }
  }

 
  const ref = useRef()
  return (
    <div>
      <div className="navbar flex flex-col md:flex-row items-center bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-100  md:p-2">
     <div  className='z-30 top-0 left-0 absolute m-7 md:m-10 text-3xl font-thin md:hidden'> <Hamburger  onToggle={toggle} /></div>
        <Link href={"/"}><div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 md:z-10 my-4 md:my-0 mx-10 cursor-pointer">
          {/* <img src="/logo.png" alt="" /> */}
          <span className="ml-3 text-xl mt-6 md:mt-0">Portfolio</span>
        </div></Link>
        <div ref={ref} className="navitems flex flex-col md:flex-row md:items-center md:bg-inherit bg-cyan-300 px-10 py-4 md:py-0 absolute top-0 left-0 transform transition-transform -translate-x-full h-full md:h-auto md:w-full w-2/3 md:static md:translate-x-0  md:transition-none ease-in-out" >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8  mainitems my-24 md:my-4 space-y-6 md:space-y-0">
            <Link  href={"/about"}><div onClick={toggle} className='hover:text-cyan-600 text-gray-700 cursor-pointer'>About</div></Link>
            <Link  href={"/skills"}><div onClick={toggle} className='hover:text-cyan-600 text-gray-700 cursor-pointer'>Skills</div></Link>
            <Link  href={"/projects"}><div onClick={toggle} className= 'hover:text-cyan-600 text-gray-700 cursor-pointer'>Projects</div></Link>
            <Link  href={"/contact"}><div onClick={toggle} className='hover:text-cyan-600 text-gray-700 cursor-pointer'>Contact Us</div></Link>
          </div>
        </div>
        <div className=" account absolute top-2 md:top-0 right-0 text-4xl p-6 cursor-pointer ">
          <MdAccountCircle />
        </div>
      </div>
    </div>

  )
}

export default Navbar