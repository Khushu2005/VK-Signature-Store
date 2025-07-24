"use client"

import { useEffect, useRef } from "react"
import Navigation from "@/components/Navigation"
import CustomCursor from "@/components/CustomCursor"

export default function About() {
  const fieldRef = useRef(null)

  useEffect(() => {
    const createFloatingElement = (type, delay) => {
      const element = document.createElement("div")
      element.className = `floating-element floating-${type}`
      element.style.animationDelay = `${delay}s`

      // Random position
      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`

      if (fieldRef.current) {
        fieldRef.current.appendChild(element)
      }

      // Remove element after animation
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element)
        }
      }, 8000)
    }

    // Create floating elements periodically
    const interval = setInterval(() => {
      const elements = ["bat", "ball", "stumps", "star"]
      const randomElement = elements[Math.floor(Math.random() * elements.length)]
      createFloatingElement(randomElement, 0)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <CustomCursor />
      <Navigation />
      <div className="about-page">
        {/* Cricket Field Background */}
        <div className="cricket-field-bg" ref={fieldRef}>
          <div className="field-lines"></div>
          <div className="pitch-area"></div>
          <div className="wickets wickets-left"></div>
          <div className="wickets wickets-right"></div>
          <div className="shimmer-overlay"></div>
        </div>

        <div className="container">
          <div className="page-header">
            <h1 className="page-title">ABOUT VIRAT</h1>
            <p className="page-subtitle">The man behind the legend</p>
          </div>

          <div className="about-content">
            <div className="about-card">
              <div className="about-text">
                <h2>The Journey of Excellence</h2>
                <p>
                  Born on November 5, 1988, in Delhi, Virat Kohli showed exceptional talent from a young age. His
                  father, Prem Kohli, enrolled him in the West Delhi Cricket Academy when he was just nine years old.
                </p>
                <p>
                  What sets Virat apart is not just his batting prowess, but his leadership qualities and unwavering
                  commitment to fitness. He revolutionized the fitness standards in Indian cricket and inspired a
                  generation of athletes.
                </p>
                <p>
                  Beyond cricket, Virat is a successful entrepreneur, philanthropist, and a role model for millions. His
                  journey from a passionate young cricketer to a global icon is truly inspiring.
                </p>
              </div>

              <div className="stats-highlight">
                <div className="stat-item">
                  <div className="stat-number">70+</div>
                  <div className="stat-label">International Centuries</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25K+</div>
                  <div className="stat-label">International Runs</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Matches Played</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
