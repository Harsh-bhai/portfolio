/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MainSection from "../components/mainSection";
import Rings from "../components/rings";
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Project from "../components/project";
import Socials from "../components/socials";
import Email from "../components/email";
import CertificationGrid from "../components/certificationGrid";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <div className="">
      <section className="text-gray-600 body-2font relative ">
        <Email/>
        <MainSection />
        <Socials/>
        <Rings />
        <About />
        <Timeline />
        <Skills />
        <Project />
        <CertificationGrid/>
        <Contact />
      </section>
    </div>
  );
}
