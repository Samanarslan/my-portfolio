import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
export const About = () => {
  return (
    <div id="About">
        
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
        <Image
          className="object-cover object-center rounded mx-auto w-300px] h-[400px]"
          alt="hero"
          src={require('../../../public/profile-im.jpg')}
          width={300}
          height={500}
        /> 
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          About Me
          
        </h1>
         <p className="mb-5 leading-relaxed">
         
        </p>
        <p className="mb-5 leading-relaxed">
         I am Saman Arslan. I have done Matriculation from AL Syed Eng.Grammar School. I have Medical Diploma which is Midwife from British Nursing College and I am learned Programming Languages HTML, CSS, JavaScript, TypeScript Next.Js React UI/UX from Governor House.
        </p>
        <p className="mb-5 leading-relaxed">
            I have Appriciate Certificate from College. I have Best Performance Award from College.
        </p>
          <div className="flex justify-center">
        <a href={"https://hackathon-milestone-1-2-mfca.vercel.app/"}>
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            View CV
          </button>
          </a>
        </div>
      </div>
    </div>
  </section>
 </div>
  );
};
export default About;