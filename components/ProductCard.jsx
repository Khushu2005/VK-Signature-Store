"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ProductCard({ product, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, index * 100)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div className="product-card" ref={cardRef}>
      <Link href={`/products/${product.id}`} className="product-link cursor-hover">
        <div className="product-image">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="product-img"
          />
          <div className="product-overlay">
            <span className="view-details">View Details</span>
          </div>
        </div>

        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-price">{product.price}</div>
        </div>
      </Link>
    </div>
  )
}
