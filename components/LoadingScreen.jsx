"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [showImages, setShowImages] = useState(false)
  const [startExit, setStartExit] = useState(false)

  useEffect(() => {
    // Show images immediately after 800ms
    const imageTimer = setTimeout(() => {
      setShowImages(true)
    }, 800)

    // Start timer after images appear
    const startTimer = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)

            // Start exit sequence when timer completes
            setTimeout(() => {
              setStartExit(true)
            }, 300)

            // Complete loading after exit animation
            setTimeout(() => {
              onComplete()
            }, 1200)

            return 100
          }
          return prev + 1.2 // Proper speed
        })
      }, 50)

      return () => clearInterval(progressInterval)
    }, 1200)

    return () => {
      clearTimeout(imageTimer)
      clearTimeout(startTimer)
    }
  }, [onComplete])

  return (
    <div className={`loading-screen ${startExit ? "exit" : ""}`}>
      <div className="loading-content">
        {/* 4 Images that appear with timer */}
        <div className={`loading-images ${showImages ? "animate-in" : ""} ${startExit ? "animate-out" : ""}`}>
          {[1, 2, 3, 4,5].map((i) => (
            <div key={i} className="loading-image" style={{ animationDelay: `${i * 0.10}s` }}>
              <img
                src={`/assets/virat${i}.jpg`}
                alt={`Virat Kohli ${i}`}
                className="image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Timer */}
      <div className={`loading-progress ${startExit ? "fade-out" : ""}`}>
        <span className="progress-text">{Math.floor(progress)}%</span>
      </div>
    </div>
  )
}
