import React from "react";
import Image1 from "../assets/image1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-start justify-center h-full px-4 py-10 pb-0">
        {/* Content */}
        <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white mt-28 mb-4">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 text-lg py-4 max-w-md">
            I'm a software Developer with a passion for crafting elegant solutions to complex problems. Whether it's developing scalable applications, optimizing code for peak performance, or diving into the latest tech trends, I thrive on turning ideas into robust software that powers the future.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={800}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Check out my Work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-4 md:mt-20 md:w-1/2 ">
          <img
            src={Image1}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 mt-10 mr-8 md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
