import React from 'react'
import Head from 'next/head'
import FadeInSection from '../components/FadeInSection'

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

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

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Blockchain Developer Portfolio</title>
      </Head>
      <div className="min-h-screen pt-16 pb-12">
        <FadeInSection className="section-container bg-gray-50 dark:bg-gray-800">
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
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
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
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline"
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
      </div>
    </>
  )
}