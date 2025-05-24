import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="px-[7vw] md:py-24 pb-24 max-w-[1900px] mx-auto font-sans relative bg-skills-gradient text-white clip-path-custom-2"
    >
      {/* Section Title  */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 mx-auto mt-2 bg-[#8245ec]"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          My ducation has been a journey ofl earning and development. here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline  */}
      <div className="relative">
        {/* Verticle Line  */}
        <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 md:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries  */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* TimeLine Circle  */}
            <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 bg-gray-300 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section  */}
            <div
              className={`w-full mx-6 lg:mx-auto lg:w-[calc(50%-36px)] sm:p-8 p-4 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] border border-gray-500 bg-gray-900 backdrop-blur-md transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "lg:ml-auto lg:mr-[10px]"
                  : "lg:mr-auto lg:ml-[10px]"
              }`}
            >
              {/* Flex container for image and text  */}
              <div className="flex items-center space-x-6">
                {/* School Logo  */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, education name and date  */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="sm:text-lg text-gray-200">{edu.school}</h4>
                  </div>

                  {/* Date  */}
                  <p className="text-sm text-gray-400 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-300">{edu.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white bg-purple-600 w-[130px] rounded-md text-center py-2 px-4">
                  {edu.grade
                    ? `Grade: ${edu.grade}`
                    : edu.GPA && `GPA: ${edu.GPA}`}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
