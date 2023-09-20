import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 sm:p-8 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl sm:text-4xl sm:pt-4 mt-12 font-bold">About</p>
        </div>

        {/* Content */}
        <div className="text-justify">
          <p className="text-xl sm:text-1xl mt-4 sm:mt-8">
            Software development isn't just a job for me; it's a passion that drives me to innovate with every line of code. I view each project as a canvas, an opportunity to create digital artistry. It's not just about writing code; it's about crafting elegant solutions that transform ideas into reality. I believe that technology is the bridge to the future, and I'm committed to building sturdy, beautifully designed bridges that connect today's possibilities to tomorrow's innovations.
          </p>
          <br />
          <p className="text-xl sm:text-xl mt-4 sm:mt-8">
            What excites me most about software engineering is the thrill of problem-solving. Every project presents a unique puzzle, a challenge waiting to be conquered. Whether it's optimizing code for peak performance or diving into the latest tech trends, I thrive on cracking these puzzles. My journey as an engineer has taught me that there's no obstacle too daunting, no challenge too complex when you approach it with determination and a knack for finding creative solutions.
          </p>
        </div>

        <div className="mb-4"></div> {/* Add margin to reduce the gap */}
      </div>
    </div>
  );
};

export default About;
