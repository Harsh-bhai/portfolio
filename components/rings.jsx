/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Rings = () => {
  return (
    <div >
      {" "}

      <img
        src="ring.png"
        className="md:h-6 md:w-6 w-3 h-3 fixed animate-pulse   top-[5rem] right-[27rem] rotate-45   "
      ></img>
      {/* <div className="md:h-6 md:w-6 w-3 h-3 fixed animate-pulse   top-[5rem] right-[65rem] -rotate-12  "></div> */}
      <img
        src="ring.png"
        className="md:h-6 md:w-6 w-3 h-3 fixed animate-pulse   top-[42rem] right-[34rem] rotate-90   "
      ></img>
      <img
        src="ring.png"
        className="md:h-6 md:w-6 w-3 h-3 fixed animate-pulse   top-[22rem] right-[3rem] -rotate-45   "
      ></img>

    </div>
  );
};

export default Rings;
