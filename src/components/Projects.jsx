import React from "react";
import sketch from "../assets/portfolio/sketchpad.png";
import pokedex from "../assets/portfolio/pokedex.png";
import brain from "../assets/portfolio/brain tumour.png";
import covid from "../assets/portfolio/covid.png";
import music from "../assets/portfolio/music.png";
import gsf from "../assets/portfolio/gsf.png";
import military from "../assets/portfolio/military.png";
import crime from "../assets/portfolio/crime.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: sketch,
    },
    {
      id: 2,
      src: gsf,
    },
    {
      id: 3,
      src: brain,
    },
    {
      id: 4,
      src: music,
    },
    {
      id: 5,
      src: covid,
    },
    {
      id: 6,
      src: pokedex,
    }
    // {
    //   id: 7,
    //   src: crime,
    // },
    // {
    //   id: 8,
    //   src: military,
    // }
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen"
    >
      <div className="max-w-screen-lg pt-5 pb-0 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5 pt-5">
          <p className="text-4xl font-bold">
            Projects
          </p>
          {/* <p className="py-6">Check out some of my work right here</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-20 pb-5 sm:px-8">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-auto h-18" 
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <button className="w-1/2 pt-1 font-bold pb-0 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
