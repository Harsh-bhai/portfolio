import React from 'react'
import Link from 'next/link'
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';


const Footer = () => {
  return (
    <div><footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
        <Link href={'/'}><span className="cursor-pointer ml-3 text-cyan-500 text-2xl">Portfolio</span></Link>
      </a>






      <p className="text-sm text-cyan-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© All Rights Reserved</p>
      <span className="flex space-x-4 sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start md:mt-3">
      <Link href={'https://github.com/Harsh-bhai'} className="text-gray-500">
      <AiFillGithub className='text-cyan-600 text-xl cursor-pointer'/>
          </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100014142857134  '} className="text-gray-500">
      <ImFacebook className='text-cyan-600 cursor-pointer'/>
          </Link>
     
        <Link href={'https://www.instagram.com/harshdew.12/'} className="ml-3 text-gray-500">
            <BsInstagram className='text-cyan-600 cursor-pointer'/>
          </Link>
          <Link href={'https://www.linkedin.com/in/harsh-dewangan-3a44b5232/'} className="ml-3 text-gray-500">
            <FaLinkedinIn className='text-cyan-600 cursor-pointer'/>
          </Link>
      </span>
    </div>
  </footer></div>
  )
}

export default Footer