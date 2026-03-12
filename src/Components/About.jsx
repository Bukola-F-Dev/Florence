import { motion } from "framer-motion"
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa"

const About = () => {

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

  const highlights = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      text: "Building responsive and interactive user interfaces using modern frameworks and tools."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      text: "Designing secure APIs and server-side logic for scalable web applications."
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      text: "Working with databases to structure and manage application data efficiently."
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      text: "Creating websites that perform seamlessly across desktops, tablets and mobile devices."
    }
  ]

  return (

    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >

      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm a passionate full-stack developer focused on building scalable
            web applications and delivering modern digital experiences.
          </p>

        </motion.div>


        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE SECTION */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* glow background */}

              <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-2xl"></div>

              <img
                src="https://via.placeholder.com/400"
                alt="Developer"
                className="relative w-72 md:w-96 rounded-2xl shadow-lg"
              />

            </div>

          </motion.div>


          {/* TEXT CONTENT */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="space-y-6"
          >

            <motion.h3
              variants={item}
              className="text-2xl font-semibold text-gray-900 dark:text-white"
            >
              Who I Am
            </motion.h3>

            <motion.p
              variants={item}
              className="text-gray-600 dark:text-gray-400"
            >
              I am a full-stack developer who enjoys transforming ideas into
              powerful digital solutions. I specialize in building responsive
              user interfaces, developing secure backend services, and creating
              efficient data-driven systems.
            </motion.p>

            <motion.p
              variants={item}
              className="text-gray-600 dark:text-gray-400"
            >
              My goal is to craft web applications that are not only visually
              appealing but also performant, scalable, and user-friendly.
            </motion.p>

            {/* SKILLS */}

            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 pt-2"
            >

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "TailwindCSS"
              ].map((skill, index) => (

                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                >
                  {skill}
                </span>

              ))}

            </motion.div>

          </motion.div>

        </div>


        {/* HIGHLIGHT CARDS */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >

          {highlights.map((itemData, index) => (

            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 hover:shadow-xl transition"
            >

              <div className="text-3xl text-blue-500 mb-4">
                {itemData.icon}
              </div>

              <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                {itemData.title}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {itemData.text}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  )
}

export default About;