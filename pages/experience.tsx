import React from 'react'
import Head from 'next/head'
import FadeInSection from '../components/FadeInSection'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
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

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience - Blockchain Developer Portfolio</title>
      </Head>
      <div className="min-h-screen pt-16 pb-12">
        <FadeInSection className="section-container bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Experience</h1>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 dark:bg-gray-100 rounded-full"></div>
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
      </div>
    </>
  )
}

