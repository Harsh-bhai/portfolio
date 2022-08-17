import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:py-4 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-32">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 animate-fadein">Hi! I am Harsh Dewangan
        <p className='text-sm text-cyan-800'>Web Developer, Programmer, Student</p>
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className=" text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded-full text-xs md:text-lg">Hire Me</button>
        <button className="ml-4  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-xs md:text-lg">Resume</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded animate-fadein5sec  hidden md:block" alt="hero" src='/harsh.png'/>
      <img src="/oval.png" alt="" className='absolute h-48 -translate-y-64 -rotate-12 -z-10 translate-x-0 animate-translateyoval hidden md:block'/>
    </div>
  </div>
</section>
    </div>
  )
}
