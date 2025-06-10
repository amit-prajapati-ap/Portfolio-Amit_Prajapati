import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.webp";

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageContent = (
    <img
      src={profileImage}
      alt="Amit Prajapati"
      className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
      loading="lazy"
    />
  );

  return (
    <section
      id="about"
      className="py-8 sm:py-24 pb-24 px-[7vw] max-w-[1900px] mx-auto font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side  */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greetigs  */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h2>

          {/* Name  */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Amit Prajapati
          </h2>

          {/* Skills heading with typing effect  */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed">
            I’m a MERN stack developer skilled in React, Node.js, Express,
            MongoDB, and modern tools like Tailwind CSS, Firebase, Stripe,
            Clerk, and JWT. I’ve built full-stack apps like Eduturns,
            NotesSnippet, OnceMore Shop, and OnceTube—covering everything from
            authentication to real-time collaboration. I enjoy crafting
            scalable, secure, and responsive web experiences that solve real
            problems and enhance user engagement.
          </p>

          {/* Resume Button  */}
          <a
            href="https://drive.google.com/file/d/1gP8SbeK6wxdJJnvz1urIrw9dHRJ2uJzk/view?usp=sharing"
            target="_black"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855ec)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 4px #8245ec",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side  */}
        <div className="md:w-1/2 flex justify-center md:pl-8 md:justify-end">
          {width >= 765 ? (
            <Tilt
              className="w-48 cursor-grab h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] bottom-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              {imageContent}
            </Tilt>
          ) : (
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] bottom-4 border-purple-700 rounded-full">
              {imageContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
