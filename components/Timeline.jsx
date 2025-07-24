"use client"

import { useEffect, useRef } from "react"

const timelineEvents = [
  {
    year: "2008",
    title: "International Debut",
    description: "Made his ODI debut against Sri Lanka at the age of 19",
  },
  {
    year: "2011",
    title: "World Cup Victory",
    description: "Part of the Indian team that won the Cricket World Cup",
  },
  {
    year: "2013",
    title: "Test Captain",
    description: "Appointed as the captain of Indian Test team",
  },
  {
    year: "2016",
    title: "Record Breaking Year",
    description: "Scored 973 runs in T20 World Cup, highest by any batsman",
  },
  {
    year: "2018",
    title: "Fitness Revolution",
    description: "Transformed Indian cricket's approach to fitness and nutrition",
  },
  {
    year: "2023",
    title: "ODI World Cup",
    description: "Led India to the finals of ODI World Cup on home soil",
  },
]

export default function Timeline() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".timeline-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-in")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="timeline-section" ref={timelineRef}>
      <div className="container">
        <h2 className="section-title">Journey Timeline</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
