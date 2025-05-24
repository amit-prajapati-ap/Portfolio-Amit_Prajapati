import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuItem = (itemID) => {
    setActiveItem(itemID);
    setIsOpen(false);

    const section = document.getElementById(itemID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] max-w-[1900px] left-1/2 transform -translate-x-1/2 ${
        isOpen ? "bg-[#050414]" : (isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}`}
    >
      <div className="text-white py-5 flex gap-3 justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer z-50">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Amit</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Prajapati</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu  */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-gray-200">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItem(item.id)}
                className="group relative hover:text-[#8245ec] transition duration-200"
              >
                {item.label}
                <div className="h-[2px] bg-[#8245ec] absolute bottom-[-1] left-0 w-0 transition-all duration-300 group-hover:w-full"></div>
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media Icons  */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/amit-prajapati-ap"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-[#8245ec] transition duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/Prajapatiamitap"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-[#8245ec] transition duration-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-prajapati-0544882b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-[#8245ec] transition duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icons  */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Items  */}
        <div className={`md:hidden transition-all duration-200 absolute p-4 left-1/2 transform -translate-x-1/2 w-full backdrop-filter z-10 rounded-lg bg-[#050414] bg-opacity-100 backdrop-blur-lg shadow-md ${isOpen ? "top-16" : "-top-80"}`}>
          <ul className="flex flex-col items-center space-y-4 text-gray-200">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItem(item.id)}
                  className="group relative hover:text-[#8245ec] transition duration-200"
                >
                  {item.label}
                  <div className="h-[2px] bg-[#8245ec] absolute bottom-[-1] left-0 w-0 transition-all duration-300 group-hover:w-full"></div>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center my-5 pt-3 gap-6">
            <a
              href="https://github.com/amit-prajapati-ap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#8245ec] transition duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/Prajapatiamitap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#8245ec] transition duration-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-prajapati-0544882b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#8245ec] transition duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
    </nav>
  );
};

export default NavBar;
