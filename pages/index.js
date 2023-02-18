import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:py-4 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-32 md:-translate-y-10">
      <h1 className="text-cyan-500 title-font sm:text-5xl text-3xl mb-4 font-medium  animate-fadein">Hi! I am Harsh Dewangan
        <p className='text-base text-white my-2'>Web Developer, Programmer, Student</p>
      </h1>
      <p className="mb-8 text-cyan-500 leading-relaxed">Pursuing B.Tech from Bhilai Institute Of Technology ,Durg .<br/>Know more about me -<Link href={'/about'}><a className=' font-bold'> Here</a></Link> </p>
      <div className="flex justify-center">
        <Link href={"/contact"}><button className="flex text-white bg-cyan-500 border-0 py-1 px-6 items-center focus:outline-none hover:bg-white hover:text-cyan-500 rounded-full text-xs space-x-1 md:text-lg"><span>Hire</span> <span>Me</span></button></Link>
        <Link href={'https://drive.google.com/file/d/1KZddrMGlFGyEh7KcukP_6QrsAFDG3RgC/view?usp=sharing'}><a target={'_blank'}><button className="ml-4  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 hover:text-white rounded-full text-xs md:text-lg">Resume</button></a></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded animate-fadein5sec -translate-y-20 hidden md:block md:h-[50rem] brightness-75" alt="hero" src='white2.png'/>
      <img src="oval.png" alt="" className='absolute h-48 -translate-y-64 -rotate-12 -z-10 translate-x-0 animate-translateyoval hidden md:block brightness-75'/>
    </div>
  </div>
</section>
    </div>
  )
}
