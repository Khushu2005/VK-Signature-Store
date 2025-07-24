"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-description">
            Get exclusive updates, training tips, and behind-the-scenes content directly from Virat Kohli's journey.
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn cursor-hover">
                {isSubmitted ? "Subscribed!" : "Subscribe"}
              </button>
            </div>
          </form>

          <p className="newsletter-note">Join 100K+ fans who never miss an update. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
