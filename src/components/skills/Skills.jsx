import React, { useEffect, useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillsItems = (category) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:px-2 sm:py-2 text-center"
          >
            {typeof skill.logo === "function" ? (
              <skill.logo size={30} /> // renders AiFillOpenAI correctly
            ) : (
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            )}
            <span className="text-xs sm:text-sm text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="px-[7vw] md:py-24 pb-24 max-w-[1900px] mx-auto font-sans relative bg-skills-gradient text-white clip-path-custom"
    >
      {/* Section Title  */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 mx-auto mt-2 bg-[#8245ec]"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and learnings
        </p>
      </div>

      {/* Skills Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-gray-500 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 text-center mb-4">
              {category.title}
            </h3>

            {/* Skills Items - 3 per row on larger screen  */}
            {width >= 1024 ? (<Tilt
              className="bottom-4 cursor-grab border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              {skillsItems(category)}
            </Tilt>) : (skillsItems(category))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
