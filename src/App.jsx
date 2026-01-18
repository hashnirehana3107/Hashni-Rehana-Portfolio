import { useState, useEffect, useRef } from 'react'
import { Moon, Sun, Download, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') setDarkMode(true)
  }, [])

  // close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <div className="min-h-screen">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 shadow-2xl border-b border-slate-200/50 dark:border-slate-800/50' 
          : 'bg-white/80 dark:bg-slate-900/80 shadow-lg'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            
            {/* Logo */}
            <motion.a 
              href="#hero"
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-slate-50 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-all group"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              H<span className="text-primary-500 font-extrabold">a</span>shni&nbsp;
              <span className="tracking-tight -mr-1">R</span>e<span className="text-primary-500 font-extrabold tracking-tight">hana</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative text-base xl:text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-xl transition-all group hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                  <motion.span 
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/20 to-blue-500/20 -z-10"
                    layoutId="navHover"
                    initial={false}
                  />
                </motion.a>
              ))}
            </div>

            {/* right controls */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              
              {/* Theme toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-[0.375rem] sm:p-2 lg:p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 hover:bg-primary-500/30 border border-slate-200/70 dark:border-slate-700/70 shadow-md hover:shadow-lg transition-all backdrop-blur-sm hover:scale-110 active:scale-95 flex-shrink-0"
                whileTap={{ scale: 0.95 }}
                whileHover={{ rotate: darkMode ? 180 : -180 }}
                title={darkMode ? 'Light Mode' : 'Dark Mode'}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-500 drop-shadow-sm" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-800 dark:text-slate-200 drop-shadow-sm" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-[0.375rem] sm:p-2 lg:p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 hover:bg-primary-500/30 border border-slate-200/70 dark:border-slate-700/70 shadow-md hover:shadow-lg transition-all flex-shrink-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                title="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-200" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-200" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden pb-4 border-t border-slate-200/50 dark:border-slate-800/50"
            >
              <div className="flex flex-col space-y-2 px-2 pt-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 py-3 px-4 rounded-2xl hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-all block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 lg:pt-24 xl:pt-28 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Floating cv Button */}
      <motion.a 
        href="/Hashni-Rehana-CV.pdf"
        download
        className="fixed z-40 shadow-2xl hover:shadow-3xl border-4 border-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center transition-all duration-300 group hover:-translate-y-1 active:scale-[0.97] touch-manipulation
          /* MOBILE PERFECT: Tiny + Safe positioning */
          bottom-[20px] right-[20px] sm:bottom-[24px] sm:right-[24px] md:bottom-8 md:right-8
          /* RESPONSIVE SIZE */
          w-[48px] h-[48px] sm:w-14 sm:h-14 md:w-16 md:h-16
          /* GRADIENT */
          bg-gradient-to-br from-primary-500 via-blue-600 to-purple-600 hover:from-primary-600 hover:via-blue-700 hover:to-purple-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.95 }}
        title="Download Resume"
      >
        <Download className="w-[18px] h-[18px] sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/95 drop-shadow-lg group-hover:animate-bounce" />
      </motion.a>

      <Footer />
    </div>
  )
}

export default App
