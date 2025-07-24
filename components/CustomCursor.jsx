"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 })
  const [shadowOffset, setShadowOffset] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e) => {
  const { clientX, clientY } = e
  const dx = clientX - prevPos.x
  const dy = clientY - prevPos.y

  // Direction vector opposite to motion
  const magnitude = Math.sqrt(dx * dx + dy * dy) || 1
  const scale = 8 // how far the shadow should move

  const offsetX = Math.max(Math.min((-dx / magnitude) * scale, 18), -18)
  const offsetY = Math.max(Math.min((-dy / magnitude) * scale, 18), -18)

  setPosition({ x: clientX, y: clientY })
  setPrevPos({ x: clientX, y: clientY })
  setShadowOffset({ x: offsetX, y: offsetY })
}

    document.addEventListener("mousemove", updateCursorPosition)
    return () => document.removeEventListener("mousemove", updateCursorPosition)
  }, [prevPos])

  return (
    <>
      <div
        className={`cricket-cursor ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className="shadow-trail"
          style={{
            transform: `translate(${shadowOffset.x}px, ${shadowOffset.y}px)`,
          }}
        />
        <div className="cricket-ball">
          <div className="ball-seam"></div>
        </div>
      </div>
    </>
  )
}
