import React, { useEffect, useRef, useState } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function FadeInSection({ children, className = '', id }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  // If reduced motion, show immediately without animation
  const shouldAnimate = !prefersReducedMotion && isVisible

  return (
    <section
      ref={ref}
      id={id}
      className={`${className} ${shouldAnimate ? 'animate-fade-in opacity-100' : prefersReducedMotion ? 'opacity-100' : isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-600`}
    >
      {children}
    </section>
  )
}

