import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];
  const socialIcons = [
    { icon: <FaTwitter/>, link: "https://x.com/Prajapatiamitap" },
    { icon: <FaLinkedin/>, link: "https://www.linkedin.com/in/amit-prajapati-0544882b5/" },
    { icon: <FaGithub/>, link: "https://github.com/amit-prajapati-ap" },
    { icon: <FaInstagram/>, link: "https://www.instagram.com/its_amits_insta/" },
  ];

  const handleScroll = (itemID) => {
    const section = document.getElementById(itemID)

    if (section) {
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <footer className='px-[7vw] py-6 pb-4 max-w-[1900px] mx-auto font-sans relative text-white border-t-2 border-gray-600'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>Amit Prajapati</h2>

        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-1'>
          {menuItems.map((item, index) => (
            <button key={index} onClick={() => handleScroll(item.id)} className='hover:text-purple-500 text-sm sm:text-base my-4 transition-all duration-200'>{item.label}</button>
          ))}
        </nav>

        <div className='flex flex-wrap justify-center space-x-6'>
          {socialIcons.map((item, index) => (
            <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='text-clip hover:text-purple-500 transition-all transform hover:scale-110 text-2xl'>{item.icon}</a>
          ))}
        </div>

        <p className='text-sm text-gray-300 mt-6'>&copy; 2025 Amit Prajapati. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
