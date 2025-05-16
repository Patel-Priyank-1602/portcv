"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Camera,
  Mountain,
  BookOpen,
  CastleIcon as ChessKnight,
  Utensils,
  Music,
  CuboidIcon as Cube,
  Flower,
  Code,
  Gamepad2,
  Plane,
  Palette,
} from "lucide-react"

interface HobbyCardProps {
  title: string
  description: string
  icon: string
  imageUrl: string
  color: string
}

export default function HobbyCard({ title, description, icon, imageUrl, color }: HobbyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (icon.toLowerCase()) {
      case "camera":
        return <Camera className="h-6 w-6" />
      case "mountain":
        return <Mountain className="h-6 w-6" />
      case "book-open":
        return <BookOpen className="h-6 w-6" />
      case "chess-knight":
        return <ChessKnight className="h-6 w-6" />
      case "utensils":
        return <Utensils className="h-6 w-6" />
      case "music":
        return <Music className="h-6 w-6" />
      case "cube":
        return <Cube className="h-6 w-6" />
      case "flower":
        return <Flower className="h-6 w-6" />
      case "code":
        return <Code className="h-6 w-6" />
      case "gamepad":
        return <Gamepad2 className="h-6 w-6" />
      case "plane":
        return <Plane className="h-6 w-6" />
      case "palette":
        return <Palette className="h-6 w-6" />
      default:
        return <BookOpen className="h-6 w-6" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group overflow-hidden rounded-xl h-64"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl || "/placeholder.svg?height=256&width=384"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-4 shadow-lg`}
        >
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      ></div>
    </motion.div>
  )
}
