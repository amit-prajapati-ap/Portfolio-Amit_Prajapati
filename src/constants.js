// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import hmsss from './assets/education_logo/hmsss.webp';
import ku from './assets/education_logo/ku.png';

// Project Section Logo's
import mernAuthLogo from './assets/work_logo/mern-auth-ui.png';
import eduturnsLogo from './assets/work_logo/eduturns.png';
import notessnippetLogo from './assets/work_logo/notessnippet.png';
import gaddibazaarLogo from './assets/work_logo/gaddibazaar.png';
import TravelEaseLogo from './assets/work_logo/travelease.png';
import VibeoSonicLogo from './assets/work_logo/vibeosonic.png';

import { AiFillOpenAI, AiOutlineApi } from 'react-icons/ai'
import { FaFigma, FaLaravel } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { BiLogoJquery, BiLogoTypescript } from 'react-icons/bi'
import { SiAppwrite, SiAuthentik, SiAxios, SiChakraui, SiClerk, SiJsonwebtokens, SiNextdotjs, SiNextui, SiPrettier, SiReactrouter, SiShadcnui, SiSocketdotio, SiStripe, SiTypescript } from 'react-icons/si'
import { TbBoltFilled, TbBrandFramerMotion } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { RxVercelLogo } from 'react-icons/rx';
import { RiClaudeFill, RiNextjsFill } from 'react-icons/ri';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: SiTypescript }, // NEW
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Framer Motion', logo: TbBrandFramerMotion }, // NEW
      { name: 'React Router', logo: SiReactrouter },
      { name: 'Shadcn UI', logo: SiShadcnui }, // NEW
      { name: 'Aceternity UI', logo: SiChakraui }, // NEW
      { name: 'Stripe', logo: SiStripe },
      { name: 'Clerk', logo: SiClerk },
      { name: 'Prettier', logo: SiPrettier },
      { name: 'JQuery', logo: BiLogoJquery },
    ],

  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Appwrite', logo: SiAppwrite },
      { name: 'JWT', logo: SiJsonwebtokens },
      { name: 'REST APIs', logo: AiOutlineApi },
      { name: 'Axios', logo: SiAxios },
      { name: 'Socket.io', logo: SiSocketdotio },
      { name: 'OAuth', logo: SiAuthentik },
      { name: 'NextAuth', logo: RiNextjsFill },
      { name: 'Next.js', logo: SiNextdotjs },  
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: BiLogoTypescript },
      { name: 'SQL', logo: GrMysql },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: FiGithub },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: RxVercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: FaFigma },
      { name: 'OpenAI', logo: AiFillOpenAI },
      { name: 'Bolt.ai', logo: TbBoltFilled },
      { name: 'Lovable.ai', logo: FaLaravel },
      { name: 'ClaudeAI', logo: RiClaudeFill },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: ku,
    school: "Kurukshetra University, Haryana",
    date: "July 2023 - May 2026",
    GPA: "9.0",
    desc: "I am doing my Bachelor's degree in Computer Application (BCA) from Kurukshetra University, Kurukshetra.",
    degree: "Bachelor in Computer Application - BCA",
  },
  {
    id: 1,
    img: hmsss,
    school: "Haryana Model Senior Secondary School, Panchkula",
    date: "Apr 2022 - March 2023",
    grade: "87%",
    desc: "I completed my class 12 education from Haryana Model Senior Secondary School, Panchkula, under the CBSE board.",
    degree: "CBSE Class 12th",
  },
  {
    id: 2,
    img: hmsss,
    school: "Haryana Model Senior Secondary School, Panchkula",
    date: "Apr 2020 - March 2021",
    grade: "75%",
    desc: "I completed my class 10 education from Haryana Model Senior Secondary School, Panchkula, under the CBSE board.",
    degree: "CBSE Class 10th",
  },
];

export const projects = [
  {
    id: 0,
    title: "Gaddi Bazaar - Car Rental Marketplace",
    description:
      "Gaddi Bazaar is a full-stack, location-based car rental platform where owners can list vehicles and users can book by city and date. Featuring a mobile-first design, real-time availability validation, and dynamic booking flows, it's built to revolutionize car rental with clean UX, JWT authentication, and dual dashboards.",
    image: gaddibazaarLogo,
    tags: [
      "React.js", "Tailwind CSS", "Framer Motion", "React Router",
      "Node.js", "Express.js", "MongoDB", "JWT", "JavaScript"
    ],
    github: "https://github.com/amit-prajapati-ap/Gaddi-Bazaar",
    webapp: "https://gaddi-bazaar.vercel.app/",
  },
  {
    id: 1,
    title: "EduTurns - Modern Education",
    description:
      "EduTurns is a modern, full-stack education platform built with React.js, designed to simplify and enhance digital learning. It features secure authentication, seamless payment integration, and an intuitive UI for both students and educators. With real-time data handling and a responsive design, EduTurns empowers users to explore, enroll, and engage with educational content effortlessly.",
    image: eduturnsLogo,
    tags: [
      "HTML", "Clerk", "Stripe", "Express", "MongoDB",
      "Node JS", "React JS", "JavaScript", "Tailwind CSS"
    ],
    github: "https://github.com/amit-prajapati-ap/EduTurns",
    webapp: "https://eduturns.vercel.app/",
  },
  {
    id: 2,
    title: "VibeoSonic - Music Learning Platform",
    description:
      "VibeoSonic is an immersive music learning web app, offering structured courses in a visually rich, responsive UI. Built with cutting-edge Next.js + Tailwind stack, it focuses on delivering a seamless user experience with animations, accessibility-first design, and minimal distraction.",
    image: VibeoSonicLogo,
    tags: [
      "Next.js", "TypeScript", "React.js", "Tailwind CSS",
      "JavaScript", "Motion", "Shadcn", "Acernity", "HTML5"
    ],
    github: "https://github.com/amit-prajapati-ap/VibeoSonic",
    webapp: "https://vibeo-sonic.vercel.app/",
  },
  {
    id: 3,
    title: "TravelEase - Smart Travel UI",
    description:
      "TravelEase is a sleek, full-stack travel assistant app built with the MERN stack. It features beautiful motion animations, dynamic loading skeletons, and an intuitive user interface designed to simplify trip planning and enhance travel booking workflows.",
    image: TravelEaseLogo,
    tags: [
      "MongoDB", "Express", "React.js", "Node.js",
      "Motion", "Tailwind CSS", "JavaScript"
    ],
    github: "https://github.com/amit-prajapati-ap/TravelEase",
    webapp: "https://travelease-ruby.vercel.app/",
  },
  {
    id: 4,
    title: "NotesSnippet - Notes Saver App",
    description:
      "NotesSnippet is a sleek and efficient full-stack application for saving and organizing personal notes. Built for students and professionals alike, it allows users to create, edit, and manage notes in a clean, distraction-free interface. With real-time updates and Firebase integration, your notes stay synced and accessible across devices.",
    image: notessnippetLogo,
    tags: ["HTML", "React JS", "Firebase", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/amit-prajapati-ap/NotesSnippet",
    webapp: "https://notes-snippet.netlify.app/",
  },
  {
    id: 5,
    title: "Universal Auth System - Secure Authentication",
    description:
      "One Auth to Rule Them All — Scalable, Secure & Developer-First: The Universal Secure Auth System is a robust, plug-and-play authentication backend designed for full-stack applications seeking scalable, zero-friction user auth. It seamlessly integrates modern authentication standards with developer usability, cutting down auth setup time from hours to minutes.",
    image: mernAuthLogo,
    tags: [
      "HTML", "Express", "MongoDB", "Node JS",
      "React JS", "JavaScript", "Tailwind CSS"
    ],
    github: "https://github.com/amit-prajapati-ap/MERN-Authentication",
    webapp: "https://mern-auth-ui-weld.vercel.app",
  }
];
