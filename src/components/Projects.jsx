import React from "react";
import sketch from "../assets/portfolio/sketchpad.png";
import pokedex from "../assets/portfolio/pokedex.png";
import brain from "../assets/portfolio/brain tumour.png";
import covid from "../assets/portfolio/covid.png";
import novelnest from "../assets/portfolio/novelnest.png";
import music from "../assets/portfolio/music.png";
import gsf from "../assets/portfolio/gsf.png";
import ai from "../assets/portfolio/ai summarizer.png"
import carhub from "../assets/portfolio/carhub.png"


const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: novelnest,
      url: "https://github.com/pallavee-2705/novelnest.git"

    },
    {
      id: 2,
      src: gsf,
      url: "https://github.com/pallavee-2705/getsetfit"
    },
    {
      id: 3,
      src: carhub,
      url: "https://github.com/pallavee-2705/car_showcase.git"
    },
    {
      id: 4,
      src: music,
      url: "https://github.com/pallavee-2705/music-app"
    },
    {
      id: 5,
      src: ai,
      url: "https://github.com/pallavee-2705/ai_summarizer.git"
    },
    {
      id: 6,
      src: pokedex,
      url: "https://github.com/pallavee-2705/pokedex"
    },
    {
      id: 7,
      src: sketch,
      url: "https://github.com/pallavee-2705/pokedex"
    },
    {
      id: 8,
      src: brain,
      url: "https://github.com/pallavee-2705/Brain-Tumour-Classification.git"
    },
    {
      id: 9,
      src: covid,
      url: "https://github.com/pallavee-2705/covid-19-trend-prediction"
    }  

  ];

return (
  <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-2 pb-5"
    >
    <div className="max-w-screen-lg pt-5 pb-0 mx-auto flex flex-col justify-center w-full h-full">
     
      <p className="text-4xl font-bold mb-4 ml-4 pb-5">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-10">
        {portfolios.map(({ id, src, url }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105 w-full h-auto"
            />
            <div className="flex items-center justify-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 font-bold pb-1 px-4 sm:px-6 py-2 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Projects;
