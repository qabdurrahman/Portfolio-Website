import React, { useState } from 'react'
import Head from 'next/head'
import FadeInSection from '../components/FadeInSection'
import { FaGithub, FaLinkedin, FaDiscord, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { projects } from '../data/projects'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    title: 'Blockchain Intern — MultiversX Foundation',
    company: 'xAlliance Program (MultiversX Foundation)',
    period: 'Apr \'25 – Jun \'25',
    description: 'Served as Project Manager and core contributor for xGrowth, a Web3-native platform aggregating Earn, Grant and Job opportunities across the MultiversX ecosystem. Led sprint planning, feature scoping, and frontend delivery. Coordinated cross-functional teams, authored onboarding documentation, and published the "Intern Intel" blog series documenting practical technical and operational learnings.',
  },
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Filter out optional projects initially, show first 4
  const mainProjects = projects.filter(p => !p.optional)
  const optionalProjects = projects.filter(p => p.optional)
  const displayedProjects = showAllProjects ? mainProjects : mainProjects.slice(0, 4)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setStatusMessage('Please fill in all fields.')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setStatusMessage('Please enter a valid email address.')
      return
    }

    try {
      const response = await fetch('https://formspree.io/f/xwpgpnzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setStatusMessage('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Sorry, there was an error sending your message. Please try again or email me directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Head>
        <title>Abdur Rahman - Blockchain Developer Portfolio</title>
      </Head>

      {/* Home Section - Hero + About */}
      <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
        {/* Rotating Background Element - Left */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 md:w-96 md:h-96 opacity-10">
            <svg
              className="w-full h-full animate-spin-slow"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" className="text-purple-600 dark:text-purple-400" />
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" className="text-blue-500 dark:text-blue-400" />
              <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" className="text-purple-500 dark:text-purple-300" />
            </svg>
          </div>
        </div>

        {/* Rotating Ring SVG - Right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
          <div className="w-64 h-64 md:w-96 md:h-96">
            <svg
              className="w-full h-full animate-spin-slow"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" className="text-purple-600 dark:text-purple-400" />
              <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" className="text-blue-500 dark:text-blue-400" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl mx-auto">
            {/* Hero Content */}
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Blockchain Developer
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Building decentralized applications and smart contracts
              </p>
            </div>

            {/* About Section Merged */}
            <FadeInSection className="mt-8 text-left">
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                I'm Abdur Rahman, a blockchain developer from IIT Bombay with a strong focus 
                on smart contract security, DeFi mechanics, and resilient protocol design. 
                I spend my time breaking down vulnerabilities, tracing transaction flows, and understanding 
                how decentralized systems behave in adversarial conditions.
                </p>
                <p>
                Alongside my technical work, I’m deeply interested in entrepreneurship and enjoy 
                building products from scratch turning ideas into functional, user-centric solutions.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Solidity', 'Web3.js', 'Ethereum', 'React', 'TypeScript', 'Node.js', 'Hardhat', 'Truffle', 'IPFS'].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex flex-col justify-center py-16">
        <FadeInSection className="px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Professional Experience</h1>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-purple-300 dark:border-purple-700 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center py-16">
        <FadeInSection className="px-6 sm:px-10 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Technical Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {displayedProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      {project.subtitle && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.short}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 underline inline-flex items-center gap-1"
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {!showAllProjects && mainProjects.length > 4 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllProjects(true)}
                  className="px-6 py-3 border-2 border-purple-500 dark:border-purple-400 rounded-lg text-gray-900 dark:text-white hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white dark:hover:text-gray-900 transition-colors"
                  aria-label="Show more projects"
                >
                  Show More
                </button>
              </div>
            )}

            {/* Optional Projects (Summer of Science) */}
            {optionalProjects.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Additional Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {optionalProjects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                          {project.subtitle && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.subtitle}</p>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.short}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 underline inline-flex items-center gap-1"
                        >
                          <FaGithub className="w-4 h-4" />
                          View Report
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FadeInSection>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center py-16">
        <FadeInSection className="px-6 sm:px-10 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Contact Cards */}
              <div className="max-w-md">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Let's work together on your next project
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:abdurrahman.iitb@gmail.com"
                    className="flex items-center gap-3 px-6 py-3 border-2 border-purple-500 dark:border-purple-400 rounded-lg text-gray-900 dark:text-white hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white dark:hover:text-gray-900 transition-colors"
                  >
                    <HiMail className="w-5 h-5" />
                    <span>abdurrahman.iitb@gmail.com</span>
                  </a>
                  <a
                    // href="tel:9999999999"
                    href="https://t.me/Q_Abdur_Rahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 border-2 border-purple-500 dark:border-purple-400 rounded-lg text-gray-900 dark:text-white hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white dark:hover:text-gray-900 transition-colors"
                  >
                    {/* <HiPhone className="w-5 h-5" />
                    <span>+91 9999999999</span> */}
                    <FaTelegram className="w-5 h-5" />
                    <span>Quraishi Abdur Rahman</span>
                  </a>
                  <div className="flex items-center gap-3 px-6 py-3 border-2 border-purple-500 dark:border-purple-400 rounded-lg text-gray-900 dark:text-white">
                    <HiLocationMarker className="w-5 h-5" />
                    <span>Mumbai, India</span>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                  <a
                    href="https://github.com/qabdurrahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/q-abdur-rahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://discord.gg/q_abdur.rahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Discord"
                    title="q_abdur.rahman"
                  >
                    <FaDiscord className="w-6 h-6" />
                  </a>
                  <a
                    href="http://x.com/Q_Abdur_Rahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <FaXTwitter className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-purple-500 dark:border-purple-400 focus:outline-none focus:border-purple-600 dark:focus:border-purple-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 py-1"
                      placeholder="Enter your name"
                      aria-label="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-purple-500 dark:border-purple-400 focus:outline-none focus:border-purple-600 dark:focus:border-purple-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 py-1"
                      placeholder="Enter your email"
                      aria-label="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-transparent border-b-2 border-purple-500 dark:border-purple-400 focus:outline-none focus:border-purple-600 dark:focus:border-purple-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 py-1 resize-none"
                      placeholder="Enter your message"
                      aria-label="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 border-2 border-purple-500 dark:border-purple-400 rounded-lg text-gray-900 dark:text-white hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white dark:hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Submitting...' : 'Submit'}
                  </button>
                  {statusMessage && (
                    <div
                      className={`p-4 rounded-md ${
                        status === 'success'
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                      }`}
                      role="alert"
                    >
                      {statusMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  )
}
