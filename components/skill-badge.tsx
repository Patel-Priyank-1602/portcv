"use client"

import { motion } from "framer-motion"
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiGraphql,
} from "react-icons/si"

interface SkillBadgeProps {
  name: string
  level: number
  icon?: string
}

export default function SkillBadge({ name, level, icon }: SkillBadgeProps) {
  const getIcon = () => {
    switch (icon?.toLowerCase()) {
      case "js":
        return <SiJavascript className="h-8 w-8 mb-3 text-yellow-400" />
      case "react":
        return <SiReact className="h-8 w-8 mb-3 text-blue-400" />
      case "node":
        return <SiNodedotjs className="h-8 w-8 mb-3 text-green-500" />
      case "ts":
        return <SiTypescript className="h-8 w-8 mb-3 text-blue-600" />
      case "next":
        return <SiNextdotjs className="h-8 w-8 mb-3 text-white" />
      case "html":
        return <SiHtml5 className="h-8 w-8 mb-3 text-orange-500" />
      case "tailwind":
        return <SiTailwindcss className="h-8 w-8 mb-3 text-cyan-400" />
      case "mongodb":
        return <SiMongodb className="h-8 w-8 mb-3 text-green-500" />
      case "postgres":
        return <SiPostgresql className="h-8 w-8 mb-3 text-blue-400" />
      case "git":
        return <SiGit className="h-8 w-8 mb-3 text-orange-500" />
      case "docker":
        return <SiDocker className="h-8 w-8 mb-3 text-blue-500" />
      case "aws":
        return <SiAmazon className="h-8 w-8 mb-3 text-yellow-500" />
      case "figma":
        return <SiFigma className="h-8 w-8 mb-3 text-purple-400" />
      case "graphql":
        return <SiGraphql className="h-8 w-8 mb-3 text-pink-500" />
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col items-center"
    >
      {getIcon()}
      <div className="text-center mb-2">{name}</div>
      <div className="w-full bg-slate-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
        ></motion.div>
      </div>
    </motion.div>
  )
}
