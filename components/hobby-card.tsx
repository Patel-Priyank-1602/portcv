"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Camera,
  BookOpen,
  Music,
  Gamepad2,
  Palette,
  CastleIcon,
} from "lucide-react"
import { MdSportsCricket } from "react-icons/md"

interface HobbyCardProps {
  title: string
  description: string
  icon: string
  imageUrl: string
  color: string
  websiteUrl?: string
}

export default function HobbyCard({ title, description, icon, color, websiteUrl }: HobbyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (icon.toLowerCase()) {
      case "drawing":
        return <Palette className="h-6 w-6" />
      case "blogging":
        return <BookOpen className="h-6 w-6" />
      case "music":
        return <Music className="h-6 w-6" />
      case "film":
        return <Camera className="h-6 w-6" />
      case "indian rule":
        return <CastleIcon className="h-6 w-6" />
      case "cricket":
        return <MdSportsCricket className="h-6 w-6" />
      case "gaming":
        return <Gamepad2 className="h-6 w-6" />
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
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-4 shadow-lg`}
        >
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm mb-2">{description}</p> <br />
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white text-sm font-medium bg-gradient-to-r ${color} px-4 py-2 rounded-full transition-transform duration-200 hover:scale-105 shadow-md flex items-center justify-center`}
          >
            Visit Website
          </a>
        )}
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      ></div>
    </motion.div>
  )
}