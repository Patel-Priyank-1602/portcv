"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AchievementCardProps {
  title: string
  organization: string
  date: string
  description: string
  imageUrl: string
  credentialUrl: string
}

export default function AchievementCard({
  title,
  organization,
  date,
  description,
  imageUrl,
  credentialUrl,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden bg-slate-800 border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 h-full">
        <div className="relative h-40 w-full overflow-hidden">
          <Image src={imageUrl || "/placeholder.svg?height=160&width=384"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
          <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-2">
            <Award className="h-5 w-5 text-white" />
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-sm text-slate-400">{date}</span>
          </div>
          <p className="text-sm text-cyan-400 mb-3">{organization}</p>
          <p className="text-slate-300 mb-4">{description}</p>
          <Button
            variant="outline"
            size="sm"
            className="w-full border-slate-700 text-slate-300 hover:bg-slate-700 transition-all duration-300"
            onClick={() => window.open(credentialUrl, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
