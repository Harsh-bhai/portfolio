import React,{useState} from 'react'
import Link from 'next/link'
const Skills = ({data}) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  console.log(data)
  return (
    <div className="m-4">
      <h1 className='text-center  sm:text-5xl text-2xl font-medium title-font mb-4 text-cyan-500'>Skills</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 mx-4">
    {data.map((item)=>{
        return (
          <div key={item} className="flex flex-wrap justify-center items-center">
              <div
                className="relative flex flex-col items-center justify-center mx-4 my-4 w-64 h-64 rounded-lg overflow-hidden "
                onMouseEnter={() => setHoveredItem(item[0])}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {hoveredItem !== item[0] && (
                  <img src={item[1].img} alt={item[0]} className=" object-cover object-center w-60" />
                )}
                {hoveredItem === item[0] && (
                  <div className="cursor-pointer absolute rounded-lg flex flex-col items-center justify-center text-center p-4 bg-gray-700 bg-opacity-80 text-white transform transition-all">
                    <p className="text-lg font-bold mb-2">{item[0]}</p>
                    <p>{item[1].desc}</p>
                  </div>
                )}
              </div>
          </div>
        );
    })}
    </div>
    </div>
  );

}

export default Skills

export async function getServerSideProps(context) {
  let a = await fetch(`${process.env.NEXT_PUBLIC_BASE}/api/getskills`, {
    headers: {
      "Content-Type": "applicaton/json",
    },
  });
  let dat = await a.json();
  let data = Object.entries(dat)
  return {
    props: { data }, // will be passed to the page component as props
  };
}