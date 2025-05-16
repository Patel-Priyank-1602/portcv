"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github, Star } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  codeUrl: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  codeUrl,
  featured = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        className={`overflow-hidden bg-slate-800 border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 h-full ${
          featured ? "ring-2 ring-cyan-500/50" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full overflow-hidden">
          {featured && (
            <div className="absolute top-2 right-2 z-10 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <Star className="h-3 w-3 mr-1" /> Featured
            </div>
          )}
          <Image
            src={imageUrl || "/placeholder.svg?height=192&width=384"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-slate-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-700 text-slate-300 hover:bg-slate-700 transition-all duration-300"
          >
            <Github className="mr-2 h-4 w-4" /> Code
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
          >
            <ExternalLink className="mr-2 h-4 w-4" /> Demo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
