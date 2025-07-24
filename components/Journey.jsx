"use client"

import { useEffect, useRef, useState } from "react"

const journeyData = [
  {
    year: "2008",
    title: "INTERNATIONAL DEBUT",
    description: "Made his ODI debut against Sri Lanka at the age of 19, marking the beginning of a legendary career.",
    image: "https://www.sportzcraazy.com/wp-content/uploads/2020/08/Virat-Kohli-made-debut-his-debut-in-the-International-cricket.png",
  },
  {
    year: "2011",
    title: "WORLD CUP CHAMPION",
    description: "Part of the Indian team that won the Cricket World Cup on home soil, fulfilling a childhood dream.",
    image: "https://i.pinimg.com/1200x/43/83/25/438325e614c6049f09bd5f41eb0a2826.jpg",
  },
  {
    year: "2013",
    title: "CAPTAINCY ERA",
    description: "Appointed as captain of the Indian Test team, beginning his transformation of Indian cricket.",
    image: "https://i.pinimg.com/1200x/ae/7c/31/ae7c31f573cee4b618c344a1efb2e52e.jpg",
  },
  {
    year: "2016",
    title: "RECORD BREAKING YEAR",
    description: "Scored 973 runs in T20 World Cup, the highest by any batsman in a single tournament.",
    image: "https://i.pinimg.com/736x/d8/48/43/d84843c926bd2a2d83c6d556520146bb.jpg",
  },
  {
    year: "2018",
    title: "FITNESS REVOLUTION",
    description: "Transformed Indian cricket's approach to fitness and nutrition, setting new standards.",
    image: "https://i.pinimg.com/1200x/92/bc/c0/92bcc0d7443450c780d0735ffb53f798.jpg",
  },
  {
    year: "2023",
    title: "ODI WORLD CUP FINAL",
    description: "Led India to the finals of ODI World Cup on home soil, inspiring a generation.",
    image: "https://i.pinimg.com/736x/00/a5/96/00a5962581af38dc48dcdbf312c9a4f3.jpg",
  },
]

export default function Journey() {
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".journey-item")
      items.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="journey" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">THE JOURNEY</h2>
          <p className="section-subtitle">From a young dreamer to cricket's modern icon</p>
        </div>

        <div className="journey-timeline">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`journey-item ${visibleItems.includes(index) ? "animate-in" : ""}`}
              data-index={index}
            >
              <div className="journey-content">
                <div className="journey-year">{item.year}</div>
                <div className="journey-info">
                  <h3 className="journey-title">{item.title}</h3>
                  <p className="journey-description">{item.description}</p>
                </div>
              </div>
              <div className="journey-image">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
