"use client"

import { useState } from "react"
import LoadingScreen from "@/components/LoadingScreen"
import LandingHero from "@/components/LandingHero"
import Journey from "@/components/Journey"
import Achievements from "@/components/Achievements"
import Stats from "@/components/Stats"
import LoginSection from "@/components/LoginSection"
import CustomCursor from "@/components/CustomCursor"
import Navigation from "@/components/Navigation"
import gsap from "gsap"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLanding, setShowLanding] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setShowLanding(true)
    }, 100)
  }

  return (
    <>
      <CustomCursor />
      {!isLoading && <Navigation />}

      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <main className={`main-content ${showLanding ? "visible" : ""}`}>
        <LandingHero isVisible={showLanding} />
        <Journey />
        <Achievements />
        <Stats />
        <LoginSection />
      </main>
    </>
  )
}
