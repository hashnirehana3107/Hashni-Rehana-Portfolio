import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-primary-600 to-slate-600 bg-clip-text text-transparent mb-6">
            About Me
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 pr-0 md:pr-12"
          >
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              I'm a passionate IT undergraduate at <span className="font-semibold text-primary-600 dark:text-primary-400">SLIIT</span>, currently in my 3rd year, 1st semester. 
              I specialize in creating intuitive <strong>UI/UX designs</strong> and building responsive <strong>frontend web applications</strong>.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              I have hands-on experience designing and building interactive web applications. I love turning complex ideas into beautiful, functional digital experiences. 
              I'm eager to contribute to real-world projects and grow as a developer through meaningful internship opportunities.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <motion.div 
                className="glass p-6 rounded-2xl text-center hover:shadow-xl transition-all group"
                whileHover={{ y: -10 }}
              >
                <GraduationCap className="w-12 h-12 text-primary-500 mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="font-semibold text-xl mb-2">SLIIT IT</h3>
                <p className="text-slate-600 dark:text-slate-400">3rd Year Undergraduate</p>
              </motion.div>
              
              <motion.div 
                className="glass p-6 rounded-2xl text-center hover:shadow-xl transition-all group"
                whileHover={{ y: -10 }}
              >
                <MapPin className="w-12 h-12 text-emerald-500 mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="font-semibold text-xl mb-2">Sri Lanka</h3>
                <p className="text-slate-600 dark:text-slate-400">Kandy, Central Province</p>
              </motion.div>
              
              <motion.div 
                className="glass p-6 rounded-2xl text-center hover:shadow-xl transition-all group"
                whileHover={{ y: -10 }}
              >
                <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="font-semibold text-xl mb-2">Available</h3>
                <p className="text-slate-600 dark:text-slate-400">Internship Ready</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 lg:gap-8"
          >
            <div className="glass p-8 rounded-3xl text-center shadow-xl">
              <motion.div 
                className="text-4xl lg:text-5xl font-black text-primary-600 mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                7+
              </motion.div>
              <h3 className="font-semibold text-xl mb-2">Projects</h3>
              <p className="text-slate-600 dark:text-slate-400">Completed</p>
            </div>
            
            <div className="glass p-8 rounded-3xl text-center shadow-xl">
              <motion.div 
                className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              >
                10+
              </motion.div>
              <h3 className="font-semibold text-xl mb-2">Skills</h3>
              <p className="text-slate-600 dark:text-slate-400">Mastered</p>
            </div>
            
            <div className="glass p-8 rounded-3xl text-center shadow-xl md:col-span-2">
              <motion.div 
                className="text-3xl lg:text-4xl font-black text-purple-600 mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              >
                Ready to
              </motion.div>
              <h3 className="font-semibold text-xl mb-2">Intern!</h3>
              <p className="text-slate-600 dark:text-slate-400">Join Your Team</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
