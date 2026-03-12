import { motion } from "framer-motion"
import { FaTiktok, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa"

const Footer = () => {

  const socialLinks = [
    {
      icon: <FaTiktok />,
      link: "#"
    },
    {
      icon: <FaWhatsapp />,
      link: "#"
    },
    {
      icon: <FaFacebookF />,
      link: "#"
    },
    {
      icon: <FaInstagram />,
      link: "#"
    }
  ]

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ]

  return (

    <footer className="bg-gray-100 dark:bg-gray-900 transition-colors duration-500 px-6 md:px-16 py-14">

      <div className="max-w-7xl mx-auto">

        {/* TOP FOOTER */}

        <div className="grid gap-10 md:grid-cols-3 items-center">

          {/* BRAND */}

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
              <li key={index}>
                <a
                  href={link.link}
                  className="relative group text-sm"
                >
                  {link.name}

                  {/* Hover underline */}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

                </a>
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
                whileHover={{ y: -4 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow hover:text-blue-500 transition"
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