// yarn add react-icons --save
// yarn add hamburger-react

import React from 'react'
import { useRef } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
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
      <div className="navbar flex flex-col md:flex-row items-center  md:py-3  py-2 ">
     <div className=' top-0 left-0 absolute m-7 md:m-10 text-3xl font-thin md:hidden'> <GiHamburgerMenu onClick={toggle}  /></div>
        <Link href={"/"}><div className="flex title-font font-medium items-center md:justify-start justify-center text-cyan-900 md:z-10 my-4 md:my-0 mx-10 cursor-pointer">
          {/* <img src="/logo.png" className='h-12 ' alt="" /> */}
          <span className="ml-3 text-cyan-400 text-2xl">Portfolio</span>
        </div></Link>
        <div ref={ref} className="navitems flex flex-col md:flex-row md:items-center md:bg-inherit bg-slate-800 px-10 py-4 md:py-0 absolute top-0 left-0 transform transition-transform -translate-x-full h-full md:h-auto md:w-full w-2/3 md:static md:translate-x-0  md:transition-none ease-in-out z-20" >
          <span className='absolute top-8 left-8
          'onClick={toggle} ><AiFillCloseCircle className='text-4xl  font-extralight md:hidden' /></span>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8  mainitems my-24 md:my-4 space-y-6 md:space-y-0 ">
            <Link  href={"/about"}><div onClick={toggle} className='hover:text-cyan-400 text-cyan-600 cursor-pointer'>About</div></Link>
            <Link  href={"/skills"}><div onClick={toggle} className='hover:text-cyan-400 text-cyan-600 cursor-pointer'>Skills</div></Link>
            <Link  href={"/projects"}><div onClick={toggle} className= 'hover:text-cyan-400 text-cyan-600 cursor-pointer'>Projects</div></Link>
            <Link  href={"/contact"}><div onClick={toggle} className='hover:text-cyan-400 text-cyan-600 cursor-pointer'>Connect</div></Link>
          </div>
        </div>
        {/* <button class=" text-white bg-cyan-500  mr-40  py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg">Button</button> */}
        {/* <div className=" z-20 account absolute top-1  md:top-[-5px] right-0 text-4xl p-6 cursor-pointer ">
          <MdAccountCircle />
        </div> */}
      </div>
    </div>

  )
}

export default Navbar