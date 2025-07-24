"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="navigation">
        <div className="nav-trigger cursor-hover" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`nav-overlay ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-menu">
          <div className="nav-header">
            <h2>VIRAT KOHLI</h2>
            <button className="nav-close cursor-hover" onClick={toggleMenu}>
              
            </button>
          </div>

          <div className="nav-links">
            <Link
              href="/"
              className="nav-link cursor-hover"
              onClick={() => {
                sessionStorage.setItem("hasLoaded", "true")
                toggleMenu()
              }}
            >
              <span className="link-number">01</span>
              <span className="link-text">HOME</span>
            </Link>
            <Link href="/about" className="nav-link cursor-hover" onClick={toggleMenu}>
              <span className="link-number">02</span>
              <span className="link-text">ABOUT</span>
            </Link>
            <Link href="/products" className="nav-link cursor-hover" onClick={toggleMenu}>
              <span className="link-number">03</span>
              <span className="link-text">PRODUCTS</span>
            </Link>
            <Link href="/auth" className="nav-link cursor-hover" onClick={toggleMenu}>
              <span className="link-number">04</span>
              <span className="link-text">LOGIN</span>
            </Link>
          </div>

          <div className="nav-footer">
            <div className="nav-social">
              <a href="https://www.instagram.com/virat.kohli/" className="social-link cursor-hover">
               <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
              </a>
              <a href="https://x.com/imVkohli" className="social-link cursor-hover">
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="twitterx--v1"/>
                
              </a>
              <a href="https://www.facebook.com/virat.kohli/" className="social-link cursor-hover 
              ">
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/>
           
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
