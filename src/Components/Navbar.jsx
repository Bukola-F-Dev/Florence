import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiMoon, FiSun } from "react-icons/fi"
import { Link } from "react-router-dom";


const Navbar = () => {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ]
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-semibold tracking-wide text-gray-900 dark:text-white cursor-pointer"
        >
          Florence <span className="text-blue-500">Dev</span>
        </motion.h1>

<ul className="hidden md:flex gap-10 text-gray-800 dark:text-gray-200 font-medium">
  {navLinks.map((link, index) => (
    <li key={index} className="relative group cursor-pointer">
      {link.link.startsWith("#") ? (
        // Anchor links scroll on the same page
        <a href={link.link}>
          {link.name}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ) : (
        // React Router links navigate pages
        <Link to={link.link}>
          {link.name}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      )}
    </li>
  ))}
</ul>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl text-gray-800 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </motion.button>
      </div>
    </motion.nav>
  )
}
export default Navbar