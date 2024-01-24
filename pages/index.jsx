/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import MainSection from "../components/mainSection";
import Rings from "../components/rings";
export default function Home() {

  return (
    <div className="">
      <section className="text-gray-600 body-2font ">
        <MainSection/>
          <Rings/>
      </section>
    </div>
  );
}
