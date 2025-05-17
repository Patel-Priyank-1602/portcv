"use client"

import { motion } from "framer-motion"
import {
  SiOpenjdk,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiCss3,
  SiPython,
  SiC,
  SiMysql,
  SiVsco,
  SiPowers,
  SiGithub,
} from "react-icons/si"
import { FaVideo } from "react-icons/fa"
import { MdStorage } from "react-icons/md"

interface SkillBadgeProps {
  name: string
  icon?: string
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  const getIcon = () => {
    switch (icon?.toLowerCase()) {
      case "css":
        return <SiCss3 className="h-8 w-8 mb-3 text-yellow-400" />
      case "python":
        return <SiPython className="h-8 w-8 mb-3 text-blue-400" />
      case "java":
        return <SiOpenjdk className="h-8 w-8 mb-3 text-orange-500" />
      case "html":
        return <SiHtml5 className="h-8 w-8 mb-3 text-orange-500" />
      case "git":
        return <SiGit className="h-8 w-8 mb-3 text-orange-500" />
      case "c":
        return <SiC className="h-8 w-8 mb-3 text-blue-700" />
      case "mysql":
        return <SiMysql className="h-8 w-8 mb-3 text-blue-600" />
      case "vscode":
        return <SiVsco className="h-8 w-8 mb-3 text-blue-500" />
      case "powerbi":
        return <SiPowers className="h-8 w-8 mb-3 text-yellow-500" />
      case "github":
        return <SiGithub className="h-8 w-8 mb-3 text-white" />
      case "video editing":
        return <FaVideo className="h-8 w-8 mb-3 text-purple-500" />
      case "data structures":
        return <MdStorage className="h-8 w-8 mb-3 text-green-500" />
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
      <div className="text-center">{name}</div>
    </motion.div>
  )
}
