import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import Link from "next/link";
const Socials = () => {
  return (
    <div className="flex absolute justify-center space-x-8  my-16 md:my-10 bottom-0">
      <Link href={"https://github.com/Harsh-bhai"} className="text-gray-500">
        <a target="_blank">
          <AiFillGithub className="text-cyan-600 md:-my-1 md:text-3xl text-2xl  cursor-pointer" />
        </a>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/harsh-dewangan-3a44b5232/"}
        className="ml-3 text-gray-500"
      >
        <a target="_blank">
          <FaLinkedinIn className="text-cyan-600 text-2xl cursor-pointer" />
        </a>
      </Link>
      <Link
        href={"https://discord.com/users/898776433638400041"}
        className="text-gray-500"
      >
        <a target="_blank">
          <SiDiscord className="text-cyan-600 text-2xl cursor-pointer" />
        </a>
      </Link>

      <Link
        href={"https://www.instagram.com/harshdew.12/"}
        className="ml-3 text-gray-500"
      >
        <a target="_blank">
          <BsInstagram className="text-cyan-600 text-2xl cursor-pointer" />
        </a>
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=100014142857134  "}
        className="text-gray-500"
      >
        <a target="_blank">
          <ImFacebook className="text-cyan-600 text-2xl cursor-pointer" />
        </a>
      </Link>
    </div>
  );
};

export default Socials;
