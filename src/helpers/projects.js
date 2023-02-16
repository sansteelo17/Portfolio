import {
  faNode,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

export const projects = [
  {
    title: "E-Commerce",
    desc: "A fully functional E-Commerce webapp deployed on Firebase using React, Redux Toolkit and TailwindCSS",
    image: "/images/Screenshot_20230215_014034.png",
    tech: [faReact],
    link: "https://steelo-commerce.web.app/",
    id: 1,
  },
  {
    title: "Mock-YouTube",
    desc: "A YouTube clone application made with React and Material UI and deployed on Firebase",
    image: "/images/Screenshot_20230215_014310.png",
    tech: [faReact],
    link: "https://mock-ec978.web.app/",
    id: 2,
  },
  {
    title: "Dictionary",
    desc: "A modern dictionary with audio. Made using React and TailwindCSS",
    image: "/images/Screenshot_20230215_014442.png",
    tech: [faReact],
    link: "https://github.com/sansteelo17/Dictionary",
    id: 3,
  },
  {
    title: "Posts",
    desc: "A web application using JavaScript (NODE & EJS), MongoDB and Express and Passport for user authentication where users can add or delete a post, make posts public or private, and review other posts.",
    image: "/images/Screenshot_20230215_014759.png",
    tech: [faSquareJs, faNode],
    link: "https://github.com/sansteelo17/Posts",
    id: 4,
  },
];
