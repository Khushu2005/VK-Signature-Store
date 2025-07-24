"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { number: 70, label: "INTERNATIONAL CENTURIES", suffix: "+" },
  { number: 25000, label: "INTERNATIONAL RUNS", suffix: "+" },
  { number: 500, label: "INTERNATIONAL MATCHES", suffix: "+" },
  { number: 1, label: "WORLD RANKING", suffix: "" },
]

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">BY THE NUMBERS</h2>
          <p className="section-subtitle">Statistics that define greatness</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">
                <AnimatedNumber value={stat.number} isVisible={isVisible} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Removed type annotations from props: { value: number, isVisible: boolean, suffix: string }
function AnimatedNumber({ value, isVisible, suffix }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toString()
  }

  return (
    <span>
      {formatNumber(displayValue)}
      {suffix}
    </span>
  )
}
