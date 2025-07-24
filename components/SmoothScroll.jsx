"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    let currentScroll = 0
    let targetScroll = 0
    const ease = 0.1

    const smoothScroll = () => {
      targetScroll = window.scrollY
      currentScroll += (targetScroll - currentScroll) * ease

      if (Math.abs(targetScroll - currentScroll) < 0.1) {
        currentScroll = targetScroll
      }

      requestAnimationFrame(smoothScroll)
    }

    // Only enable smooth scroll on desktop
    if (window.innerWidth > 768) {
      smoothScroll()
    }
  }, [])

  return null
}
