import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import c from "../assets/c++.png";
import sql from "../assets/sql.png";
import nodejs from "../assets/node js.png";


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-300",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-yellow-200",
    },
    {
      id: 9,
      src: c,
      title: "C++",
      style: "shadow-white",
    }
  ];

  
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white pt-8 pb-8" 
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col">
     
        <div className="pt-28 pb-6 text-4xl font-bold mb-6">Skills</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-center py-4 px-4 sm:px-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="h-12 w-auto mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
