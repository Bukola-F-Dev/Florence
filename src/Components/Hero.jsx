import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa"
import { SiJavascript, SiMongodb } from "react-icons/si"
const Hero = () => {
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
    <section className="min-h-screen flex items-center px-6 md:px-16 py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.p
            variants={item}
            className="text-blue-500 font-medium"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Florence
       
          </motion.h1>
          <motion.h2
            variants={item}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-600 dark:text-gray-400 max-w-lg"
          >
            I design and build modern, scalable web applications using
            modern technologies. I focus on creating high-performance
            user experiences and clean backend architectures.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </motion.div>
          <motion.div
            variants={item}
            className="flex gap-5 text-2xl pt-6 text-gray-700 dark:text-gray-300"
          >
            <FaReact className="hover:text-blue-500 transition" />
            <SiJavascript className="hover:text-yellow-400 transition" />
            <FaNodeJs className="hover:text-green-500 transition" />
            <SiMongodb className="hover:text-green-600 transition" />
            <FaGithub className="hover:text-black dark:hover:text-white transition" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full"></div>
            <img
              src="https://via.placeholder.com/350"
              alt="Developer"
              className="relative w-64 md:w-80 rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero