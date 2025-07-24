"use client"

import { useState } from "react"

export default function LoginSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="login-section">
      <div className="container">
        <div className="login-content">
          <div className="login-text">
            <h2 className="login-title">JOIN THE CHAMPIONS</h2>
            <p className="login-description">
              Get exclusive access to training tips, behind-the-scenes content, and updates from Virat Kohli's journey.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="login-input cursor-hover"
                required
              />
              <button type="submit" className="login-btn cursor-hover">
                {isSubmitted ? "JOINED!" : "JOIN NOW"}
              </button>
            </div>
          </form>

          <p className="login-note">Join 500K+ fans worldwide. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
