import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { AiFillGithub } from 'react-icons/ai';


const Contact = () => {
  const [state, handlesubmit] = useForm("mqkoajkd");
  const clicked= (  ) => {
    toast.success('Message Sent SuccessFully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <section className="text-cyan-600 body-font relative">
<ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <form
        onSubmit={handlesubmit}
        action="https://formspree.io/f/mqkoajkd"
        method="POST"
        className="container px-5 py-24 mx-auto"
      >
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-cyan-400">
            Connect
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-cyan-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 bg-opacity-50 rounded border border-cyan-600 focus:border-cyan-400 focus:bg-gray-800 focus:ring-1 focus:ring-cyan-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-cyan-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 bg-opacity-50 rounded border border-cyan-600 focus:border-cyan-400 focus:bg-gray-800 focus:ring-1 focus:ring-cyan-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-cyan-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 bg-opacity-50 rounded border border-cyan-600 focus:border-cyan-400 focus:bg-gray-800 focus:ring-1  focus:ring-cyan-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit" onClick={clicked}
                disabled={state.submitting}
                className="flex mx-auto text-white  transition-transform bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700  text-lg rounded-full"
              >
                Submit
              </button>
            </div>

            <div className="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row">

        <span className="flex  space-x-20  sm:mx-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <Link href={'https://github.com/Harsh-bhai '} className="text-cyan-500 ">
          <AiFillGithub className='text-cyan-600 text-4xl cursor-pointer'/>
          </Link>
          <Link href={'https://www.facebook.com/profile.php?id=100014142857134  '} className="text-cyan-500 ">
            <svg  fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 cursor-pointer " viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>
    
          <Link href={'https://www.instagram.com/harshdew.12/'} className="ml-3 text-cyan-500 ">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 cursor-pointer " viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
          <Link href={'https://www.linkedin.com/in/harsh-dewangan-3a44b5232/'} className="ml-3 text-cyan-500 ">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-8 cursor-pointer " viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>





           
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
