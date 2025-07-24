"use client"

import { useEffect, useState, useRef } from "react"

export default function LandingHero({ isVisible }) {
  const [showContent, setShowContent] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const handleMouseMove = (e) => {
    const el = textRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.backgroundPosition = `${x}px ${y}px`
  }

  return (
    <section className={`landing-hero ${isVisible ? "visible" : ""}`}>
      <div className="landing-content">
        <div className={`hero-main-title ${showContent ? "animate-in" : ""}`}>
          <h1
            className="masked-text"
            ref={textRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              if (textRef.current) {
                textRef.current.style.backgroundPosition = "center"
              }
            }}
          >
            <span className="title-word">VIRAT</span>
            <span className="title-word">KOHLI</span>
          </h1>
        </div>

        <div className={`hero-subtitle-text ${showContent ? "animate-in" : ""}`}>
          <p>CRICKET LEGEND • FITNESS ICON • GLOBAL INSPIRATION</p>
        </div>

        <div className={`hero-description ${showContent ? "animate-in" : ""}`}>
          <p className="green-quote"><em>
            {"“"}From a passionate young cricketer to a global icon, Virat Kohli represents the pinnacle of dedication,
            fitness, and mental strength. His journey inspires millions worldwide.{"”"}</em>
          </p>
        </div>
      </div>
    </section>
  )
}
