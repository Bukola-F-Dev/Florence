import { motion } from "framer-motion"

const Testimonials = () => {

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://i.pravatar.cc/150?img=32",
      feedback:
        "Working with Florence was an amazing experience. The application delivered exceeded expectations with clean code, fast performance, and a beautiful UI."
    },
    {
      name: "David Lee",
      role: "Startup Founder",
      company: "InnovateX",
      image: "https://i.pravatar.cc/150?img=12",
      feedback:
        "Florence built our platform from the ground up. The full-stack expertise and attention to detail helped our startup launch successfully."
    },
     
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
      id="testimonials"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-500"
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
            Testimonials
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feedback from clients and collaborators who have worked with me on
            various development projects.
          </p>

        </motion.div>

        {/* TESTIMONIAL GRID */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid gap-8 sm:grid-cols-2 justify-items-center"
        >

          {testimonials.map((testimonial, index) => (

            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800  hover:shadow-xl transition"
            >

              {/* CLIENT IMAGE */}

              <div className="flex items-center gap-4 mb-4">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>

              </div>

              {/* FEEDBACK */}

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                "{testimonial.feedback}"
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default Testimonials;