import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const MyWork = () => {

  const projects = [
    {
      title: "E-Commerce Website",
      image: "https://via.placeholder.com/500",
      description:
        "A full stack ecommerce platform with authentication, cart system and payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      image: "https://via.placeholder.com/500",
      description:
        "Modern responsive developer portfolio with animations and dark/light mode support.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      image: "https://via.placeholder.com/500",
      description:
        "A productivity application allowing users to create, track and manage daily tasks.",
      tech: ["React", "Firebase", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Restaurant Website",
      image: "https://via.placeholder.com/500",
      description:
        "A responsive restaurant website featuring menu pages and booking system.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      title: "Blog Platform",
      image: "https://via.placeholder.com/500",
      description:
        "Full stack blogging platform with authentication, comments and post management.",
      tech: ["React", "Express", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather App",
      image: "https://via.placeholder.com/500",
      description:
        "Weather forecast application using API data with a clean modern UI.",
      tech: ["JavaScript", "API", "CSS"],
      github: "#",
      live: "#"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  return (

    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

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


        {/* PROJECT GRID */}

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
              className="group rounded-xl overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition"
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* HOVER OVERLAY */}

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition">

                  <a
                    href={project.github}
                    className="text-white text-2xl hover:text-blue-400"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    className="text-white text-2xl hover:text-blue-400"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>


              {/* CONTENT */}

              <div className="p-6">

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>


                {/* TECH STACK */}

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
  )
}

export default MyWork