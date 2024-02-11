import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const PointwiseStatement = ({ points }) => {
  return (
    <div className="mb-8 p-4 ">
      <div className="grid gap-4">
        {points.map((point, index) => (
          <div key={index} className="flex aboutcontent items-start space-y-2 space-x-4">
            <span className="mr-2 text-3xl text-white">&#8594;</span>
            <div className="font-secondary text-cyan-500 md:text-xl ">{point}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointwiseStatement;
