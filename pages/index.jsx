/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import MainSection from "../components/mainSection";
import Rings from "../components/rings";
import About from "../components/about";
import Skills from "../components/skills";
// import Projects from "../components/project";
import Contact from "../components/contact";
import Project from "../components/project";

export default function Home() {
  return (
    <div className="">
      <section className="text-gray-600 body-2font ">
        <MainSection />
        <Rings />
        <About />
        <Skills />
        <Project />
        <Contact />
      </section>
    </div>
  );
}
