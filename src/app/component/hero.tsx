 "use client"
{/* import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
 <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: [
      "Web Developer",
      "UI/UX Designer",
       "Nurse",
       "Teacher"
      ],
    autoStart: true,
    loop: true,
  }}
/>
 eslint-disable-next-line react/no-unescaped-entities 
      </h1>
      <div className="w-[100px] h-[2px] bg-blue-700"></div>
      <p className="mb-8 leading-relaxed">
         I am a nurse, but i am passionate about web development. I build websites and applications. I think the combination of technology and healthcare can be very powerfull and I want to use my skills to make a difference in people's lives. I am proficient in HTML, CSS, JavaScript, and TypeScript and I enjoy building scalable and secure applications using React and Node.js, Now  i am trying to bring innovation to the healthcare industry using my coding skills.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
        </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
       <Image
        className="object-cover object-center rounded mx-auto w-[15rem] h-[400px] "
        alt="hero"
        width={400}
        height={500}
        src={require('../../../public/profile-im.jpg')}
      /> 
    </div>
  </div>
</section>
  );
};

export default Hero; */}




import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';
import ProfileImage from '../../../public/profile-im.jpg'; // Correct import

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer",
                  "Nurse",
                  "Teacher",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed">
            I&apos;m a nurse, but I am passionate about web development. I build
            websites and applications. I think the combination of technology and
            healthcare can be very powerful, and I want to use my skills to make
            a difference in people&apos;s lives. I am proficient in HTML, CSS,
            JavaScript, and TypeScript, and I enjoy building scalable and secure
            applications using React and Node.js. Now I am trying to bring
            innovation to the healthcare industry using my coding skills.
          </p>
          <div className="flex justify-center">
            <Link href="#Contact">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem] h-[400px]"
            alt="hero"
            width={400}
            height={500}
            src={ProfileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

