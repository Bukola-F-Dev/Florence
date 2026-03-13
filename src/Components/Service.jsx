import { motion } from "framer-motion"
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaTools
} from "react-icons/fa"

const Services = () => {

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
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  return (

    <section
      id="services"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-500"
    >

      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}

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
            I provide end-to-end web development services to help transform ideas
            into scalable digital products.
          </p>

        </motion.div>


        {/* SERVICES GRID */}

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
              className="group p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition duration-300"
            >

              {/* ICON */}

              <div className="text-4xl text-blue-500 mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* TITLE */}

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default Services