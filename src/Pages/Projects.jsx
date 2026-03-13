import React from "react";
import LandingPage from "../Components/Assets/BusinessLandingPage.PNG"
import PhoneTechLandingPage from "../Components/Assets/PhoneTech.PNG"
import Ecommerce from "../Components/Assets/Ecommerce.PNG"
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      image: Ecommerce,
      description:
        "A full stack ecommerce platform with authentication, cart system and payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
      live: "https://bukola-f-dev.github.io/MyFirst-React-Website/"
    },
   
    {
      title: "Business Landing Page",
      image: PhoneTechLandingPage,
      description:
        "A sleek and modern landing page designed to showcase business services and attract potential clients.",
      tech: ["React", "Firebase", "Tailwind"],
      live: "https://landing-page-chi-nine-37.vercel.app/"
    },
    {
      title: "Booking Website",
      image: LandingPage,
      description:
        "A fully responsive booking website featuring a seamless booking system designed to attract potential clients.",
      tech: ["React", "Tailwind", "JavaScript"],
      live: "https://afri-click.vercel.app/"
    },
  ];

  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using modern technologies like React, TailwindCSS and JavaScript."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Developing secure server-side applications, APIs, and authentication systems using Node.js and Express."
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description:
        "Designing and managing scalable databases using MongoDB and modern database architecture."
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Web Design",
      description:
        "Creating websites that adapt seamlessly to desktops, tablets, and all mobile devices."
    },
    {
      icon: <FaCloud />,
      title: "Deployment & Hosting",
      description:
        "Deploying applications to modern cloud platforms such as Vercel, Netlify, and cloud servers."
    },
    {
      icon: <FaTools />,
      title: "Website Maintenance",
      description:
        "Maintaining, optimizing, and upgrading existing web applications for better performance and security."
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              My Recent Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing my experience building modern,
              scalable and user-focused web applications.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                className="group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition">

<a
  href={project.live}
  target="_blank"          
rel="noopener noreferrer" 
  className="text-white text-2xl hover:text-blue-400"
>
  <FaExternalLinkAlt />
</a>

</div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
             My Services
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I provide end-to-end web development services to help transform
              ideas into scalable digital products.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group p-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl text-blue-500 mb-6 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;