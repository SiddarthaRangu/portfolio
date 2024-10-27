'use client';

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, User, Code, Briefcase, Phone, Home, FileCode, FileJson, Database, Globe, Server } from 'lucide-react'

const projects = [
  {
    title: 'Comments App',
    description: 'A dynamic React app for adding, deleting, and liking comments.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    liveLink: 'https://siddcommenstapp.ccbp.tech',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-26%20at%2010.48.42%20PM-paov8MrCIBn0HSaMNLykgOhGlKow9H.jpeg',
  },
  {
    title: 'App Store',
    description: 'An app store website with categories and real-time search functionality.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    liveLink: 'https://siddappstore.ccbp.tech/',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-26%20at%2010.48.37%20PM-K7Ht5j5C8oAjmHPxxFEbfHFHlHiCX8.jpeg',
  },
  {
    title: 'Wikipedia Search Application',
    description: 'A custom search application for Wikipedia with curated results.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveLink: 'https://siddwikipedia.ccbp.tech/',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-26%20at%2010.48.46%20PM-TrGnK4vcosXDJxthYcaZzyHP5IcFHn.jpeg',
  },
  {
    title: 'Food Munch',
    description: 'A responsive Food Store website showcasing food items and offers.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    liveLink: 'https://siddfoodmunch.ccbp.tech/',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-26%20at%2010.49.30%20PM-m1tak1Gleh9gSN9cLy3MnBYI2MUc8A.jpeg',
  },
]

const skills = [
  { name: 'Python', level: 90, icon: FileCode },
  { name: 'JavaScript', level: 85, icon: FileJson },
  { name: 'React', level: 80, icon: Code },
  { name: 'Node.js', level: 75, icon: Server },
  { name: 'HTML/CSS', level: 90, icon: Globe },
  { name: 'SQL', level: 70, icon: Database },
  { name: 'MongoDB', level: 75, icon: Database },
]

const rotatingSkills = ['Python', 'React', 'Node.js', 'JavaScript', 'HTML/CSS', 'SQL', 'Express.js', 'MongoDB']

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Skills', icon: Code, href: '#skills' },
  { name: 'Projects', icon: Briefcase, href: '#projects' },
  { name: 'Contact', icon: Phone, href: '#contact' },
]

const emailAddress = 'siddartharangu@gmail.com';

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % rotatingSkills.length)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#1F1B24] text-white' : 'bg-white text-[#1F1B24]'} transition-colors duration-300`}>
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          y: backgroundY,
        }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-800">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-[#08FDD8]">SR</h1>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-[#08FDD8]' : 'bg-[#1F1B24]'}`}
        >
          {isDarkMode ? <Sun className="text-[#1F1B24] w-5 h-5" /> : <Moon className="text-[#08FDD8] w-5 h-5" />}
        </motion.button>
      </nav>

      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.button
                whileHover={{ scale: 1.1, color: '#08FDD8' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(item.href)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-[#08FDD8] text-[#1F1B24]' : 'bg-[#1F1B24] text-[#08FDD8]'} transition-colors duration-300`}
                title={item.name}
              >
                <item.icon size={20} />
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="min-h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-center relative z-10"
        >
          Hi, I&apos;m Siddartha.
          <br />
          <span className="text-[#08FDD8]">Full-Stack Developer.</span>
        </motion.h1>
        <motion.h2
          key={currentSkillIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl mb-8 text-[#F72585] h-10 font-semibold"
        >
          {rotatingSkills[currentSkillIndex]}
        </motion.h2>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-[#08FDD8] text-[#1F1B24] px-10 py-4 rounded-full font-bold text-xl hover:bg-[#F72585] hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Explore My Work
        </motion.a>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#08FDD8]"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 5}s infinite linear`
              }}
            />
          ))}
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex flex-col justify-center items-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full"
        >
          <h2 className="text-4xl font-bold mb-6 text-[#F72585]">About Me</h2>
          <p className="text-lg mb-6 leading-relaxed">
            I&apos;m a passionate full-stack developer with a keen interest in building innovative web solutions. My journey in tech started with a curiosity for how things work on the internet, and it has evolved into a career where I create robust and user-friendly applications.
          </p>
          <p className="text-lg leading-relaxed">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software architecture.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Server className="text-[#08FDD8]" size={20} />
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-[#08FDD8]" size={20} />
              <span>Web Applications</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="text-[#08FDD8]" size={20} />
              <span>Database Design</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCode className="text-[#08FDD8]" size={20} />
              <span>Clean Code</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="min-h-screen flex flex-col justify-center items-center p-4">
        <h2 className="text-4xl font-bold mb-12 text-[#F72585]">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-[#08FDD8] flex items-center justify-center mb-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <skill.icon size={28} className="text-[#1F1B24]" />
              </motion.div>
              <span className="text-lg font-semibold mb-2">{skill.name}</span>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 relative overflow-hidden">
                <motion.div
                  className="bg-[#F72585] h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <span className="text-sm text-[#888C8F]   mt-2">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col justify-center items-center p-4">
        <h2 className="text-4xl font-bold mb-12 text-[#F72585]">Projects</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-[#888C8F] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-[#08FDD8] text-[#1F1B24] px-3 py-1 rounded-full text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#08FDD8] hover:text-[#F72585] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} className="mr-2" /> Live Demo
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-4">
        <h2 className="text-4xl font-bold mb-12 text-[#F72585]">Get In Touch</h2>
        <div className="flex gap-12">
          <motion.a
            href="https://github.com/SiddarthaRangu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#08FDD8] hover:text-[#F72585] transition-colors"
          >
            <Github size={36} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/siddartharangu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#08FDD8] hover:text-[#F72585] transition-colors"
          >
            <Linkedin size={36} />
          </motion.a>
          <motion.a
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#08FDD8] hover:text-[#F72585] transition-colors"
          >
            <Mail size={36} />
          </motion.a>
        </div>
      </section>

      <footer className="text-center p-8 text-[#888C8F]">
        <p>&copy; 2024 Siddartha Rangu. All rights reserved.</p>
      </footer>
    </div>
  )
}