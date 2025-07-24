"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <h2 className="section-title">The Champion's Mindset</h2>
            <p className="about-description">
              More than just a cricketer, Virat Kohli represents the pinnacle of dedication, fitness, and mental
              strength. His journey from a young Delhi boy to cricket's modern icon is a testament to unwavering
              commitment and passion.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">70+</div>
                <div className="stat-label">International Centuries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25K+</div>
                <div className="stat-label">International Runs</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">#1</div>
                <div className="stat-label">ICC Rankings</div>
              </div>
            </div>
          </div>

          <div className="about-image animate-on-scroll">
            <div className="image-wrapper">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Virat Kohli Training"
                width={500}
                height={600}
                className="about-img"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
