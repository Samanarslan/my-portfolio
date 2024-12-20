import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-blue-50">
       <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image 
    src={require('../../../public/picture/Logo.png')} alt="Profile Photo" width={100} height={100}
      className="w-[50px]" />

      <span className="ml-3 text-xl">Its My Portfolio</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Its My Portfolio
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target="_blank"
       href={"https:www.facebook.com/share/1BaJDpUKEG"} className="text-gray-500">
      <BsFacebook className="text-2xl" />
      </Link>
      <Link
      target="_blank" 
      href={"https://www.linkedin.com/in/saman-arslan"} className="text-gray-500">
      <TiSocialLinkedinCircular className="text-3xl ml-2" /> 
      </Link>
      <Link 
      target="_blank"
       href="https://github.com/Samanarslan" className="text-gray-500">
      <FaGithub className="text-2xl ml-2 hover:text-[#eff0000]" />
      </Link>
    </span>
  </div>
 </footer>
 </div>
  );
};

export default Footer