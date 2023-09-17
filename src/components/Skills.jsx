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
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pb-15 pt-15"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="pt-10 text-4xl font-bold">
            Skills
          </p>
          {/* <p className="py-6">These are some of the technologies I have worked with:</p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-5 rounded-lg ${style}`}
            >
              <img src={src} alt="" className=" h-12 w-auto mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
