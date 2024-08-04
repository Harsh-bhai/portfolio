/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const TimeLineCard = ({ leftCard, ImgSrc, title, role, duration, desriptionArray, className }) => {
  return (
    <div className={`mt-6 sm:mt-0 sm:mb-12 ${className}`}>
      <div className="flex flex-col sm:flex-row items-center">
        {/* <!-- Card Content --> */}
        <div className={`flex ${leftCard ? "justify-start" : "justify-end"} w-full mx-auto items-center`}>
          <div className={`w-full sm:w-1/2 ${leftCard ? "sm:pr-8" : "sm:pl-8"}`}>
            <div className="p-4 bg-gradient-to-bl from-slate-700 via-slate-700 to-gray-800 text-white rounded-lg shadow-lg ">
              {/* <!-- Time Range --> */}
              <div className="flex items-center mb-4">
                {/* <!-- Circle Avatar with Placeholder Image --> */}
                <div className="relative flex-shrink-0">
                  <div className="rounded-full overflow-hidden border-white border-4 size-10 md:size-20">
                    <img 
                      src={ImgSrc}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* <!-- Time Section --> */}
               <div className="flex flex-col">
               <div className="ml-4">
                  <p className="text-gray-300 font-bold text-2xl">{title}</p>
                </div>
               <div className="ml-4">
                  <p className="text-gray-300 font-bold ">{role}</p>
                </div>
               <div className="ml-4">
                  <p className="text-xs text-gray-300">{duration}</p>
                </div>
               </div>
              </div>
              {/* <!-- Description in Points --> */}
              <ul className="list-disc pl-5 text-white">
                {
                  (desriptionArray ?? []).map((point, index) => (
                    <li key={index} className="text-sm text-gray-300">{point}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
      </div>
    </div>
  
  );
};

export default TimeLineCard;
