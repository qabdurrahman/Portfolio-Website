import React, { useState } from 'react'
import Head from 'next/head'
import FadeInSection from '../components/FadeInSection'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

const experiences: ExperienceItem[] = [
  {
    title: 'Blockchain Developer Intern',
    company: 'Blockchain Solutions Inc.',
    period: 'Summer 2023',
    description: [
      'Developed smart contracts for DeFi protocols using Solidity',
      'Collaborated on frontend integration with Web3.js and React',
      'Participated in code reviews and security audits',
      'Optimized gas costs for smart contract deployments',
    ],
  },
  {
    title: 'Web3 Developer',
    company: 'Decentralized Labs',
    period: '2022 - Present',
    description: [
      'Built NFT marketplace dApp with minting and trading features',
      'Implemented token vesting contracts for multiple clients',
      'Optimized gas costs for smart contract deployments',
      'Led team of 3 developers on DeFi protocol development',
    ],
  },
  {
    title: 'Smart Contract Developer',
    company: 'Crypto Ventures',
    period: '2021 - 2022',
    description: [
      'Developed and audited smart contracts for various blockchain projects',
      'Created automated testing frameworks using Hardhat',
      'Collaborated with security teams on vulnerability assessments',
    ],
  },
]

const projects: Project[] = [
  {
    title: 'DeFi Lending Protocol',
    description: 'A decentralized lending platform built on Ethereum with automated interest rate calculations and collateral management.',
    tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'NFT Marketplace dApp',
    description: 'Full-stack NFT marketplace with minting, trading, and auction features using ERC-721 standard.',
    tech: ['Solidity', 'IPFS', 'Next.js', 'Ethers.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Smart Contract Audit Tool',
    description: 'Automated security analysis tool for Solidity smart contracts with vulnerability detection.',
    tech: ['TypeScript', 'Node.js', 'Solidity'],
    github: 'https://github.com',
  },
  {
    title: 'Token Vesting Contract',
    description: 'Secure token vesting smart contract with customizable release schedules and multi-beneficiary support.',
    tech: ['Solidity', 'Hardhat', 'Ethereum'],
    github: 'https://github.com',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    try {
      const response = await fetch('https://formspree.io/f/<PLACEHOLDER_ID>', {
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
        <title>Blockchain Developer Portfolio</title>
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
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Blockchain Developer
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Building decentralized applications and smart contracts
              </p>
            </div>

            {/* About Section Merged */}
            <FadeInSection className="mt-16 text-left">
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  I'm a passionate blockchain developer specializing in building decentralized applications (dApps) and
                  smart contracts. With expertise in Solidity, Web3.js, and Ethereum development, I create secure and
                  efficient blockchain solutions.
                </p>
                <p>
                  My focus areas include smart contract development, DeFi protocols, NFT marketplaces, and blockchain
                  infrastructure. I'm committed to leveraging blockchain technology to build transparent, trustless, and
                  decentralized systems.
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
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Experience</h1>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-purple-300 dark:border-purple-700 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
                    href="tel:9999999999"
                    className="flex items-center gap-3 px-6 py-3 border-2 border-purple-500 dark:border-purple-400 rounded-lg text-gray-900 dark:text-white hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white dark:hover:text-gray-900 transition-colors"
                  >
                    <HiPhone className="w-5 h-5" />
                    <span>+91 9999999999</span>
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
                    href="https://www.instagram.com/q_abdur.rahman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-6" />
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
