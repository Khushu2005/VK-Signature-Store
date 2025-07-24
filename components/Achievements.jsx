"use client"

import { useEffect, useRef, useState } from "react"

const achievements = [
  {
    title: "PADMA SHRI",
    year: "2017",
    description: "India's fourth-highest civilian honor for exceptional service",
    category: "CIVILIAN HONOR",
    angle: 0,
  },
  {
    title: "RAJIV GANDHI KHEL RATNA",
    year: "2018",
    description: "India's highest sporting honor for outstanding achievement",
    category: "SPORTS HONOR",
    angle: 60,
  },
  {
    title: "ICC CRICKETER OF THE YEAR",
    year: "2017, 2018",
    description: "Sir Garfield Sobers Trophy winner for two consecutive years",
    category: "INTERNATIONAL",
    angle: 120,
  },
  {
    title: "WISDEN LEADING CRICKETER",
    year: "2016, 2017, 2018",
    description: "Three consecutive years of excellence recognized globally",
    category: "GLOBAL RECOGNITION",
    angle: 180,
  },
  {
    title: "ARJUNA AWARD",
    year: "2013",
    description: "For outstanding achievement in cricket at national level",
    category: "NATIONAL HONOR",
    angle: 240,
  },
  {
    title: "ICC ODI PLAYER OF THE YEAR",
    year: "2012, 2017, 2018",
    description: "Multiple time winner of the prestigious ODI award",
    category: "INTERNATIONAL",
    angle: 300,
  },
]

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isWheelHovered, setIsWheelHovered] = useState(false)
  const sectionRef = useRef(null)
  const wheelRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const handleWheel = (e) => {
      if (!isWheelHovered) return

      e.preventDefault()
      const delta = e.deltaY > 0 ? 60 : -60
      setRotation((prev) => prev + delta)

      // Calculate which achievement should be selected
      const normalizedRotation = (((rotation + delta) % 360) + 360) % 360
      const index = Math.round(normalizedRotation / 60) % achievements.length
      setSelectedIndex(index)
    }

    const handleMouseMove = (e) => {
      if (!wheelRef.current) return

      const wheelElement = wheelRef.current.querySelector(".achievement-wheel")
      if (!wheelElement) return

      const rect = wheelElement.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const radius = rect.width / 2

      const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2))

      setIsWheelHovered(distance <= radius)
    }

    document.addEventListener("wheel", handleWheel, { passive: false })
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("wheel", handleWheel)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isVisible, rotation, isWheelHovered])

  return (
    <section className="achievements" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <p className="section-subtitle">Recognition of excellence and dedication</p>
        </div>

        <div className="achievements-wheel-container" ref={wheelRef}>
          <div className="wheel-section">
            <div
              className={`achievement-wheel ${isWheelHovered ? "active" : ""}`}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`wheel-item ${index === selectedIndex ? "active" : ""}`}
                  style={{
                    transform: `rotate(${achievement.angle}deg) translateY(-200px) rotate(-${achievement.angle + rotation}deg)`,
                  }}
                >
                  <div className="wheel-dot"></div>
                  <div className="wheel-label">{achievement.year}</div>
                </div>
              ))}
              <div className="wheel-center">
                <div className="center-dot"></div>
              </div>
            </div>
          </div>

          <div className="achievement-details">
            <div className={`achievement-card active ${isVisible ? "animate-in" : ""}`}>
              <div className="achievement-category">{achievements[selectedIndex].category}</div>
              <div className="achievement-year">{achievements[selectedIndex].year}</div>
              <h3 className="achievement-title">{achievements[selectedIndex].title}</h3>
              <p className="achievement-description">{achievements[selectedIndex].description}</p>
            </div>
          </div>
        </div>

        <div className="wheel-instruction">
          <p>{isWheelHovered ? "Scroll to explore achievements" : "Hover over wheel to activate"}</p>
        </div>
      </div>
    </section>
  )
}
