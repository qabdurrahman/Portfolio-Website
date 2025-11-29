import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import FadeInSection from '../components/FadeInSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockchain Developer Portfolio</title>
      </Head>
      {/* Hero Section with merged About */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
        {/* Rotating Background Element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 md:w-96 md:h-96 opacity-10">
            <svg
              className="w-full h-full animate-spin-slow"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" className="text-gray-900 dark:text-gray-100" />
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" className="text-gray-700 dark:text-gray-200" />
              <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" className="text-gray-500 dark:text-gray-300" />
            </svg>
          </div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Hero Content */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Blockchain Developer
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Building decentralized applications and smart contracts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  View Projects
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-colors text-center"
                >
                  View Resume
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-colors text-center"
                >
                  Contact
                </Link>
              </div>
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
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
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
    </>
  )
}
