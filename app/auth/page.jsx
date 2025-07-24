"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import CustomCursor from "@/components/CustomCursor"

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <CustomCursor />
      <Navigation />
      <div className="auth-page">
        <div className="container">
          <div className="auth-container">
            <div className="page-header">
              <h1 className="page-title">{isLogin ? "LOGIN" : "REGISTER"}</h1>
              <p className="page-subtitle">Join the champions</p>
            </div>

            <form className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <input type="text" placeholder="FULL NAME" className="form-input" />
                </div>
              )}
              <div className="form-group">
                <input type="email" placeholder="EMAIL" className="form-input" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="PASSWORD" className="form-input" />
              </div>
              <button type="submit" className="btn-primary cursor-hover">
                {isLogin ? "LOGIN" : "REGISTER"}
              </button>
            </form>

            <button className="auth-switch cursor-hover" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "CREATE ACCOUNT" : "ALREADY HAVE ACCOUNT?"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
