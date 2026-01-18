import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = ({ darkMode }) => {
  return (
    <footer className="bg-gradient-to-r from-slate-900/95 to-slate-800/95 dark:from-slate-900 dark:to-slate-950 border-t border-slate-800/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center text-center md:text-left">
          
          {/* Left: Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <p className="text-slate-400 dark:text-slate-500 text-sm md:text-base font-medium">
              © 2026 Hashni Rehana. All rights reserved.
            </p>
          </motion.div>

          {/* Center: Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Hashni<span className="text-primary-500">.</span>Rehana
            </h3>
            <p className="text-slate-400 text-sm">
              UI/UX Designer | Frontend Developer
            </p>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-3 flex justify-center md:justify-end gap-4 pt-4 md:pt-0"
          >
            <motion.a
              href="https://github.com/hashnirehana3107"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-2xl bg-slate-800/50 hover:bg-primary-500/90 backdrop-blur-sm border border-slate-700/50 hover:border-primary-400/50 transition-all shadow-lg hover:shadow-xl hover:scale-110"
              whileHover={{ y: -4, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/hashni-rehana-578854379"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-2xl bg-slate-800/50 hover:bg-blue-500/90 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all shadow-lg hover:shadow-xl hover:scale-110"
              whileHover={{ y: -4, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            </motion.a>
            
            <motion.a
              href="mailto:hashnirehana3107@gmail.com"
              className="group p-3 rounded-2xl bg-slate-800/50 hover:bg-emerald-500/90 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-400/50 transition-all shadow-lg hover:shadow-xl hover:scale-110"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
