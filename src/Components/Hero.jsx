import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa"
import { SiJavascript, SiMongodb } from "react-icons/si"
import HeroImage from "../Components/Assets/HeroImage.png"
import { Link } from "react-router-dom";

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
  className="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-400 font-semibold"
>
  Hello, I'm
</motion.p>

<motion.h1
  variants={item}
  className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
>
  Florence
</motion.h1>

<motion.h2
  variants={item}
  className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300 tracking-wide"
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
              <Link
    to="/projects"
    className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
  >
    View Projects
  </Link>

  <Link
    to="/contact"
    className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    Contact Me
  </Link>
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
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full"></div>
            <img
              src={HeroImage}
              alt="Developer"
              className="relative w-56 h-56 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500"
            />
            <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold px-5 py-2 rounded-full shadow-xl border-2 border-white"
    >
      4 Years of Experience
    </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero