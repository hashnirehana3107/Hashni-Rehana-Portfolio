import { motion } from 'framer-motion'
import { Palette, Code2, Smartphone, Database, GitBranch } from 'lucide-react'

const skillsData = [
  {
    title: "Design & UX",
    icon: Palette,
    skills: ["Figma", "Canva", "Wireframing", "Prototyping", "Responsive Design", "Design Thinking"],
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "MERN Basics"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Backend & Tools",
    icon: Smartphone,
    skills: ["Node.js", "Express.js", "JSP/Servlet", "MySQL", "MongoDB", "Git/GitHub"],
    color: "from-emerald-500 to-teal-500"
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900/30 dark:via-slate-800 dark:to-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-emerald-600 to-slate-600 bg-clip-text text-transparent mb-6">
            Skills
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-3xl hover:shadow-2xl transition-all group hover:-translate-y-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className={`p-4 rounded-2xl bg-gradient-to-r ${skillGroup.color} shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <skillGroup.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{skillGroup.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skill}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all cursor-default"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full group-hover:scale-125 transition-transform" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills