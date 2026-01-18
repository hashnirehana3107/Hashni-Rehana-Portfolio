import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/hashnirehana3107',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/hashni-rehana-578854379',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:hashnirehana3107@gmail.com',
      label: 'Email',
    },
  ]

  // Email form handler - Opens mailto with pre-filled data
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name') || ''
    const email = formData.get('email') || ''
    const subject = formData.get('subject') || ''
    const message = formData.get('message') || ''

    const mailtoLink = `mailto:hashnirehana3107@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=Hi Hashni,%0A%0AI'm ${encodeURIComponent(name)} (${encodeURIComponent(
      email,
    )})%0A%0A${encodeURIComponent(
      message,
    )}%0A%0ABest regards,%0A${encodeURIComponent(name)}`

    window.open(mailtoLink, '_blank')
  }

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-t from-slate-900/95 via-slate-800/90 to-slate-900/95"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20 px-2"
        >
          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-primary-400 to-blue-300 bg-clip-text text-transparent mb-4 md:mb-6">
            Let's Connect
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-400 to-blue-300 mx-auto rounded-full" />
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
        </motion.div>

        {/* 1 column on mobile, 2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-start max-w-full overflow-hidden">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {/* Get in touch card */}
            <div className="glass px-5 py-6 sm:px-6 sm:py-7 md:p-8 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-slate-900/40 border border-white/20 max-w-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                Get In Touch
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Email */}
                <motion.div
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 hover:bg-white/20 dark:hover:bg-slate-800/40 rounded-2xl transition-all group cursor-pointer max-w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass rounded-2xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 bg-primary-500/10 border border-primary-400/30">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 dark:text-slate-200 mb-1 text-sm sm:text-base">
                      Email
                    </p>
                    <a
                      href="mailto:hashnirehana3107@gmail.com"
                      className="text-slate-800 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-semibold text-sm sm:text-base transition-all hover:underline break-words"
                    >
                      hashnirehana3107@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 hover:bg-white/20 dark:hover:bg-slate-800/40 rounded-2xl transition-all group max-w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass rounded-2xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 bg-emerald-500/10 border border-emerald-400/30">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 dark:text-slate-200 mb-1 text-sm sm:text-base">
                      Location
                    </p>
                    <p className="text-slate-800 dark:text-slate-400 text-sm sm:text-base break-words">
                      Kandy, Central Province, Sri Lanka
                    </p>
                  </div>
                </motion.div>

                {/* Availability */}
                <motion.div
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 hover:bg-white/20 dark:hover:bg-slate-800/40 rounded-2xl transition-all group max-w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass rounded-2xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 bg-blue-500/10 border border-blue-400/30">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 dark:text-slate-200 mb-1 text-sm sm:text-base">
                      Availability
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-base sm:text-lg">
                      Available for Internship
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass px-5 py-6 sm:px-6 sm:py-7 md:p-8 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-slate-900/40 border border-white/20 max-w-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                Follow Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-4 py-5 sm:p-6 rounded-2xl hover:shadow-2xl hover:bg-white/30 dark:hover:bg-slate-800/60 transition-all border border-white/20 hover:border-primary-400/50 flex flex-col items-center gap-2 sm:gap-3 group backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <link.icon className="w-7 h-7 sm:w-9 sm:h-9 text-slate-700 dark:text-slate-300 group-hover:text-primary-500 transition-all duration-300" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass px-5 py-6 sm:px-6 sm:py-7 lg:p-10 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-700/60 max-w-full"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
              Send Message
            </h3>
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 sm:p-5 rounded-2xl border-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border-slate-300/60 dark:border-slate-700/70 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/30 shadow-sm transition-all font-medium h-12 sm:h-14"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-4 sm:p-5 rounded-2xl border-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border-slate-300/60 dark:border-slate-700/70 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/30 shadow-sm transition-all font-medium h-12 sm:h-14"
                  required
                />
              </div>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full p-4 sm:p-5 rounded-2xl border-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border-slate-300/60 dark:border-slate-700/70 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/30 shadow-sm transition-all font-medium h-12 sm:h-14"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full p-4 sm:p-5 rounded-2xl border-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border-slate-300/60 dark:border-slate-700/70 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/30 shadow-sm transition-all font-medium resize-vertical min-h-[140px]"
                required
              ></textarea>

              {/* Send message button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 via-blue-600 to-purple-600 hover:from-primary-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 uppercase tracking-wide text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message →
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact