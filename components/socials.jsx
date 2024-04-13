import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiDiscord,SiLeetcode } from "react-icons/si";
import Link from "next/link";
const Socials = () => {
  return (
    <div className="md:flex flex-col hidden z-50 space-y-14 md:ml-10 fixed left-0 top-40 sm:mx-auto sm:mt-0 mt-2 justify-evenly md:justify-center sm:justify-start">
    <Link
      href={"https://github.com/Harsh-bhai "}
      className="text-cyan-500 "
    >
      <a target="_blank">
        <AiFillGithub className="text-cyan-300 text-xl hover:scale-125 transition-transform md:text-4xl hover:text-black cursor-pointer" />
      </a>
    </Link>
    <Link
      href={"https://discord.com/users/898776433638400041"}
      className="text-gray-500"
    >
      <a target="_blank">
        <SiDiscord className="text-cyan-300 text-xl hover:scale-125 transition-transform md:text-4xl cursor-pointer hover:text-indigo-500" />
      </a>
    </Link>
    <Link
      href={"https://leetcode.com/harshdewangan2019/"}
      className="text-gray-500"
    >
      <a target="_blank">
        <SiLeetcode className="text-cyan-300 text-xl hover:scale-125 transition-transform md:text-4xl cursor-pointer hover:text-yellow-500" />
      </a>
    </Link>
    <Link
      href={"https://www.linkedin.com/in/harsh-dewangan-3a44b5232/"}
      className="ml-3 text-cyan-500 "
    >
      <a target="_blank">
        {" "}
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0"
          className="md:w-8 w-5 text-cyan-300  hover:text-cyan-500 cursor-pointer hover:scale-125 transition-transform "
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </Link>
    <Link
      href={
        "https://www.facebook.com/profile.php?id=100014142857134  "
      }
      className="text-cyan-500 "
    >
      <a target="_blank">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="md:w-8 w-5 text-cyan-300  hover:text-blue-700 cursor-pointer hover:scale-125 transition-transform "
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
    </Link>

    <Link
      href={"https://www.instagram.com/harshdew.12/"}
      className="ml-3 text-cyan-500 "
    >
      <a target="_blank">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="md:w-8 w-5 text-cyan-300  hover:text-pink-500 cursor-pointer hover:scale-125 transition-transform "
          viewBox="0 0 24 24"
        >
          <rect
            width="20"
            height="20"
            x="2"
            y="2"
            rx="5"
            ry="5"
          ></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
    </Link>

  </div>
  );
};

export default Socials;
