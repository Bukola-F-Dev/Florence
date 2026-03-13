import { motion } from "framer-motion"
import { FaTiktok, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {

  const socialLinks = [
    {
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@Florence_Dev"
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/2347047421106?text=Hello%20Florence!"
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/florence.terigbade.5"
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/florence_terigbade/"
    }
  ]

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" }
  ]

  return (

    <footer className="bg-gray-100 dark:bg-gray-900 transition-colors duration-500 px-6 md:px-16 py-14">

      <div className="max-w-7xl mx-auto">

        {/* TOP FOOTER */}

        <div className="grid gap-10 md:grid-cols-3 items-center">

      

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Florence <span className="text-blue-500">Dev</span>
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm max-w-sm">
              Full stack developer focused on building modern,
              scalable and user-friendly web applications.
            </p>

          </motion.div>


          {/* NAVIGATION */}

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-6 justify-start md:justify-center text-gray-700 dark:text-gray-300"
          >

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
        <Link to={link.link}
        >
          {link.name}
          
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      )}
    </li>
  ))}
          </motion.ul>


          {/* SOCIAL ICONS */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex gap-4 md:justify-end"
          >

            {socialLinks.map((social, index) => (
  <motion.a
  key={index}                  
  href={social.link}            
  target="_blank"              
  rel="noopener noreferrer"        
  whileHover={{ y: -4 }}          
  className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow hover:text-blue-700 transition"
>
  {social.icon}
</motion.a>

            ))}

          </motion.div>

        </div>


        {/* DIVIDER */}

        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-6 text-center">

          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Florence Dev. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer