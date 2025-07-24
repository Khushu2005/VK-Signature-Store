"use client"

import { useParams } from "next/navigation"
import Navigation from "@/components/Navigation"
import CustomCursor from "@/components/CustomCursor"

const products = [
  {
    id: 1,
    name: "MRF Genius Virat Kohli Edition English Willow Bat",
    category: "EQUIPMENT",
    price: "₹12,999",
    image: "https://m.media-amazon.com/images/I/51GVVSDH0hL._SL1000_.jpg",
    description: "Hand‑made English willow bat endorsed by Virat Kohli. Grade 1 willow, 6–10 straight grains, ideal for serious players."
  },
  {
    id: 2,
    name: "VK Jersey Collection",
    category: "MERCHANDISE",
    price: "₹2,499",
    image: "https://m.media-amazon.com/images/I/51DzipgdtYL._SY445_SX342_QL70_ML2_.jpg",
    description: "Official India replica jersey with Virat Kohli’s name & number. Lightweight, breathable fan wear."
  },
  {
    id: 3,
    name: "PUMA 22 FH Rubber VK Cricket Shoes",
    category: "FOOTWEAR",
    price: "₹5,499",
    image: "https://prokicksports.com/cdn/shop/files/22FH-2.jpg?v=1749818602&width=713",
    description: "Lightweight cricket shoes with EVA midsole, breathable upper & multi-studded rubber outsole."
  },
  {
    id: 4,
    name: "Nutrition Supplements",
    category: "HEALTH",
    price: "₹3,499",
    image: "https://www.rxindia.com/images/detailed/2/Wellman_1_do4b-20.jpg",
    description: "Premium whey‑based protein + BCAAs & vitamins for muscle recovery and endurance."
  },
  {
    id: 5,
    name: "VK Helmet Collection",
    category: "EQUIPMENT",
    price: "₹15,000",
    image: "https://m.media-amazon.com/images/I/71A6dpFHHVL._AC_UL480_FMwebp_QL65_.jpg",
    description: "Pro‑grade helmet with polycarbonate shell, padded interior & Virat Kohli branding."
  },
  {
    id: 6,
    name: "Cricket Pads Pro",
    category: "EQUIPMENT",
    price: "₹9,999",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/11/360956376/TL/JN/BQ/29476408/ss-blue-cricket-batting-pads-250x250.jpeg",
    description: "Lightweight high‑impact batting pads with reinforced knee‑rolls & anti‑skid sole."
  },
  {
    id: 7,
    name: "VK Casual Wear",
    category: "MERCHANDISE",
    price: "₹1,999",
    image: "https://wrogn.com/cdn/shop/files/1_37317504-eabc-4e2f-8498-bb5a15ce32c1.jpg?v=1748448014&width=360",
    description: "Stylish viscose shirt with abstract prints from VK collection—sporty casual look."
  },
  {
    id: 8,
    name: "Cricket Gloves Pro",
    category: "EQUIPMENT",
    price: "₹8,500",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQviV5qmIBuvktRSnL7LWKXJZ8lAQhpggPe1INe2UuLYChRRq3NfGvxi2DiXYui5VKo83Xa-d3gGSebryU6MtugUH5wa6QTGh9QTFGxGd50kP66YuqvSuRp-g",
    description: "Pro‑level gloves with multi‑layer foam, reinforced thumb and ventilated fingers for grip & comfort."
  }
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return <div style={{ padding: "5rem", textAlign: "center" }}>Product not found</div>
  }

  return (
    <>
      <CustomCursor />
      <Navigation />
      <div className="product-detail-page">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">{product.name}</h1>
            <p className="page-subtitle">{product.category}</p>
          </div>

          <div className="product-detail-content">
            <div className="product-image">
              <img src={product.image} className="image" alt={product.name} />
            </div>
            <div className="product-info">
              <div className="product-price">{product.price}</div>
              <p className="product-description">{product.description}</p>
              <button className="btn-primary cursor-hover">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
