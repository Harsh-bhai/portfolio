import Link from "next/link";

export default function CertificationCard({ title, image, link }) {
  return (
    
      <section
        className="bg-gradient-to-br certficationscontent from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-125" 
      >
        <div className="flex justify-center items-center ">
          <img
            src={image}
            alt={title}
            className="w-40 h-40 object-cover object-contain"
          />
        </div>
        <div className="p-4 text-center">
        <Link href={link} >
        <a target="_blank">
          <h3 className="text-lg font-semibold text-cyan-500 hover:underline hover:text-cyan-400">{title}</h3>
          </a>
    </Link>
          {/* If you decide to add back the description */}
          {/* <p className="text-gray-300 mt-2">{description}</p> */}
        </div>
      </section>
      
  );
}
