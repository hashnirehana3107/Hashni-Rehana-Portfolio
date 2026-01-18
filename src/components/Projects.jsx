import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight, Play } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "StreetToSweet",
    description: "Centralized platform for street dog rescue, medical care, shelter management, and adoption in Sri Lanka. Enables public reporting and team coordination.",
    image: "/projects/street-to-sweet.mp4",
    github: "https://github.com/hashnirehana3107/StreetToSweet",
    languages: ["React", "Node.js", "Express.js", "MongoDB"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 2,
    title: "LaundryHaven",
    description: "Online laundry service with pickup scheduling, real-time tracking, and secure payments. Simplifies laundry management for busy lifestyles.",
    image: "/projects/laundry-haven.mp4",
    github: "https://github.com/hashnirehana3107/LaundryHaven-",
    languages: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "ElegantWeddings",
    description: "Modern event planning platform for weddings, birthdays, and anniversaries. Organizes vendors, timelines, and services seamlessly.",
    image: "/projects/elegant-weddings.mp4",
    github: "https://github.com/hashnirehana3107/ElegantWeddings",
    languages: ["HTML", "CSS", "JavaScript", "JSP/Servlet", "MySQL", "Java"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "StayEase",
    description: "Modern hotel booking app for travelers. Compare prices, find perfect stays, and confirm bookings effortlessly.",
    image: "/projects/stayease.jpg",
    github: "https://github.com/hashnirehana3107/StayEase",
    languages: ["Figma", "UI/UX Design", "Interaction Design", "Prototyping", "Wireframing", "Mobile User Interface Design"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 5,
    title: "PawPal",
    description: "Mobile app for pet owners to manage essentials, track orders, and maintain care notes. Simplifies pet parenting.",
    image: "/projects/pawpal.jpg",
    github: "https://github.com/hashnirehana3107/PawPal",
    languages: ["Kotlin", "Android Studio"],
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 6,
    title: "HabitEase",
    description: "Android habit tracker with reminders, progress analytics, mood journal, and hydration tracking. Built with Kotlin.",
    image: "/projects/habitease.jpg",
    github: "https://github.com/hashnirehana3107/HabitEase",
    languages: ["Kotlin", "Android Studio"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 7,
    title: "Pizzify",
    description: "3D interactive pizza swapping UI prototype in Figma. Features rotation, swapping, and engaging animations.",
    image: "/projects/pizzify.mp4",
    github: "https://github.com/hashnirehana3107/Pizzify",
    languages: ["Figma", "UI/UX Design", "3D Animation", "Motion Graphics", "Prototyping"],
    color: "from-rose-500 to-pink-500"
  },

  {
    id: 8,
    title: "Crumbella",
    description: "A modern, visually appealing Figma design for Crumbella Cafe & Bakery. ",
    image: "/projects/Crumbella.jpg",
    github: "https://github.com/hashnirehana3107/Crumbella.git",
    languages: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    color: "from-rose-500 to-pink-500"
  },

  {
    id: 9,
    title: "My Personal Portfolio",
    description: "Personal portfolio layout emphasizing responsive sections, smooth scrolling, and recruiter-friendly project cards.",
    image: "/projects/MyPortfolio.jpg",
    github: "https://github.com/hashnirehana3107/Hashni-Rehana-Portfolio.git",
    languages: ["React", "UI/UX Design", "Tailwind CSS"],
    color: "from-rose-500 to-pink-500"
  },






  //TO ADD NEW PROJECT:
  // 1. Copy entire object above
  // 2. Paste as NEW item in array
  // 3. Update: id, title, description (<100 chars), github
  // 4. IMAGE: image: "/projects/your-image.jpg"
  // 5. VIDEO: image: "/projects/your-video.mp4" Auto-plays!
  // 6. Put files in "public/projects/" folder
]

const Projects = () => {
  //Detect if file is video by extension
  const isVideo = (src) => /\.(mp4|webm|ogg)$/i.test(src)

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/70 dark:to-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-amber-600 to-slate-600 dark:from-white dark:via-amber-400 dark:to-slate-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl group cursor-pointer hover:-translate-y-4 transition-all duration-500 h-full flex flex-col border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Media - Image or Video */}
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-slate-100/80 dark:from-slate-800/80 to-transparent rounded-t-3xl">
                {isVideo(project.image) ? (
                  // VIDEO - Auto play, muted, loop
                  <video
                    src={project.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  >
                    <source src={project.image} type="video/mp4" />
                    <img 
                      src={project.image.replace('.mp4', '.jpg')} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </video>
                ) : (
                  //IMAGE
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                
                {/* Overlay + Play indicator for videos */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  {isVideo(project.image) && (
                    <motion.div
                      className="glass p-4 rounded-2xl backdrop-blur-xl border border-white/30 flex items-center gap-2 shadow-2xl"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-5 h-5 text-white drop-shadow-lg ml-0.5" />
                      <span className="text-white font-semibold text-sm hidden md:inline">Playing</span>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col">
                <motion.h3 
                  className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-300 leading-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 line-clamp-3 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.languages.map((lang, i) => (
                    <motion.span
                      key={lang}
                      className="px-4 py-1.5 bg-gradient-to-r from-slate-100/80 to-slate-200/80 dark:from-slate-800/70 dark:to-slate-700/70 text-sm font-semibold rounded-full text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                      whileHover={{ scale: 1.05, y: -1 }}
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>

                {/* Action btns */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2.5 glass px-6 py-3.5 md:py-4 rounded-xl font-bold text-base hover:shadow-xl hover:bg-white/50 dark:hover:bg-slate-800/70 transition-all backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 group/link hover:-translate-y-0.5"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Github size={20} className="group-hover:translate-x-0.5 transition-transform" />
                    <span>View Code</span>
                  </a>
                  
                  {/* Demo Link btn */}
                  <motion.button
                    className="glass p-3.5 rounded-xl hover:shadow-xl hover:bg-white/50 dark:hover:bg-slate-800/70 transition-all backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
