import { motion } from 'framer-motion'
import { Code, Palette, LayoutDashboard, ArrowRight } from 'lucide-react'

const Hero = () => {
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  return (
    <section 
      className="section-padding min-h-[100vh] flex items-center justify-center relative overflow-hidden"
      style={{ minHeight: `${vh}px` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-blue-100/50 dark:from-slate-900/70 dark:to-slate-800/70" />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center z-10 relative">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-hero text-5xl md:text-7xl lg:text-8xl font-black gradient-text leading-tight tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            >
            Hi, I'm <br /> 
            <span className="block">Hashni</span>
            <span className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-primary-500 drop-shadow-lg">R</span>
            <span className="text-4xl md:text-6xl lg:text-7xl tracking-tight">ehana</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-2xl md:text-2xl lg:text-2xl font-extrabold text-primary-500 drop-shadow-lg">UI/UX Designer | Frontend Developer</span> creating intuitive and engaging digital experiences. SLIIT IT Undergraduate passionate about turning ideas into beautiful, functional web applications.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="group glass px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:shadow-2xl transition-all duration-300 max-w-max"
            >
              View My Work 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#skills" 
              className="group border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              My Skills
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div 
            className="glass w-72 h-72 md:w-96 md:h-96 rounded-3xl p-6 md:p-8 flex items-center justify-center mx-auto shadow-2xl"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.02, 1.02, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/profile.jpg" 
              alt="Hashni Rehana" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl animate-float"
            />
          </motion.div>
          
          {/* Floating Icons */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Code className="w-8 h-8 text-primary-500 animate-spin-slow" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Palette className="w-8 h-8 text-purple-500" />
          </div>
          <div className="absolute top-1/2 -left-8 w-16 h-16 bg-emerald-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform -translate-y-1/2">
            <LayoutDashboard className="w-8 h-8 text-emerald-500" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
