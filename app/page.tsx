import Link from "next/link"
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import AchievementCard from "@/components/achievement-card"
import HobbyCard from "@/components/hobby-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ParticlesBackground from "@/components/particles-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Hero Section with Animated Background */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            filter: "brightness(0.4)",
          }}
        />

        <ParticlesBackground />

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-slate-950/90" />

        <div className="container relative z-10 px-4 mx-auto flex flex-col items-center text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-gradient">
                Priyank
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-slate-300">Full-Stack Developer & UI/UX Enthusiast</p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl text-slate-400">
              Crafting digital experiences that blend creativity with functionality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 animate-pulse-slow"
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Avatar className="w-64 h-64 border-4 border-slate-800 relative">
                  <AvatarImage src="/images/profile.jpg" alt="Profile" />
                  <AvatarFallback className="bg-slate-800 text-4xl">P</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                About Me
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                I'm a passionate full-stack developer with expertise in creating responsive, user-friendly web
                applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to
                life through clean, efficient code and intuitive design.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                My journey in tech began with a curiosity about how digital experiences are built, and has evolved into
                a career focused on crafting solutions that make a difference. I'm constantly learning and exploring new
                technologies to stay at the forefront of web development.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills and expertise in web development
          </p>

          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-slate-800 border border-slate-700">
              <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r from-cyan-500 to-purple-600">
                All
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-gradient-to-r from-cyan-500 to-purple-600">
                Web
              </TabsTrigger>
              <TabsTrigger value="mobile" className="data-[state=active]:bg-gradient-to-r from-cyan-500 to-purple-600">
                Mobile
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="E-Commerce Platform"
                  description="A full-featured online store with payment integration, user authentication, and inventory management."
                  tags={["React", "Node.js", "MongoDB", "Stripe"]}
                  imageUrl="/images/project1.jpg"
                  demoUrl="#"
                  codeUrl="#"
                  featured={true}
                />
                <ProjectCard
                  title="Task Management App"
                  description="A productivity application with drag-and-drop interface, team collaboration features, and real-time updates."
                  tags={["Vue.js", "Firebase", "Tailwind CSS"]}
                  imageUrl="/images/project2.jpg"
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website with smooth animations, dark mode, and contact form integration."
                  tags={["Next.js", "Framer Motion", "Vercel"]}
                  imageUrl="/images/project3.jpg"
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="AI Image Generator"
                  description="Web application that uses AI to generate custom images based on text prompts."
                  tags={["React", "OpenAI API", "Node.js"]}
                  imageUrl="/images/project4.jpg"
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Crypto Dashboard"
                  description="Real-time cryptocurrency tracking dashboard with price alerts and portfolio management."
                  tags={["React", "Chart.js", "CoinGecko API"]}
                  imageUrl="/images/project5.jpg"
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Social Media Platform"
                  description="Feature-rich social networking platform with real-time messaging and content sharing."
                  tags={["React", "Socket.io", "MongoDB"]}
                  imageUrl="/images/project6.jpg"
                  demoUrl="#"
                  codeUrl="#"
                />
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="E-Commerce Platform"
                  description="A full-featured online store with payment integration, user authentication, and inventory management."
                  tags={["React", "Node.js", "MongoDB", "Stripe"]}
                  imageUrl="/images/project1.jpg"
                  demoUrl="#"
                  codeUrl="#"
                  featured={true}
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website with smooth animations, dark mode, and contact form integration."
                  tags={["Next.js", "Framer Motion", "Vercel"]}
                  imageUrl="/images/project3.jpg"
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Crypto Dashboard"
                  description="Real-time cryptocurrency tracking dashboard with price alerts and portfolio management."
                  tags={["React", "Chart.js", "CoinGecko API"]}
                  imageUrl="/images/project5.jpg"
                  demoUrl="#"
                  codeUrl="#"
                />
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Task Management App"
                  description="A productivity application with drag-and-drop interface, team collaboration features, and real-time updates."
                  tags={["React Native", "Firebase", "Redux"]}
                  imageUrl="/images/project2.jpg"
                  demoUrl="#"
                  codeUrl="#"
                  featured={true}
                />
                <ProjectCard
                  title="Fitness Tracker"
                  description="Mobile app for tracking workouts, nutrition, and fitness progress with personalized recommendations."
                  tags={["React Native", "GraphQL", "HealthKit"]}
                  imageUrl="/images/project7.jpg"
                  demoUrl="#"
                  codeUrl="#"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I've worked with and mastered over the years
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <SkillBadge name="JavaScript" level={90} icon="js" />
            <SkillBadge name="React" level={85} icon="react" />
            <SkillBadge name="Node.js" level={80} icon="node" />
            <SkillBadge name="TypeScript" level={75} icon="ts" />
            <SkillBadge name="Next.js" level={85} icon="next" />
            <SkillBadge name="HTML/CSS" level={95} icon="html" />
            <SkillBadge name="Tailwind CSS" level={90} icon="tailwind" />
            <SkillBadge name="MongoDB" level={70} icon="mongodb" />
            <SkillBadge name="PostgreSQL" level={65} icon="postgres" />
            <SkillBadge name="Git" level={85} icon="git" />
            <SkillBadge name="Docker" level={60} icon="docker" />
            <SkillBadge name="AWS" level={55} icon="aws" />
            <SkillBadge name="UI/UX Design" level={75} icon="figma" />
            <SkillBadge name="Figma" level={70} icon="figma" />
            <SkillBadge name="GraphQL" level={65} icon="graphql" />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Achievements & Certifications
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Recognition and milestones from my professional journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AchievementCard
              title="AWS Certified Solutions Architect"
              organization="Amazon Web Services"
              date="2023"
              description="Validated expertise in designing distributed systems on AWS, demonstrating knowledge of how to architect and deploy secure and robust applications."
              imageUrl="/images/achievement1.jpg"
              credentialUrl="#"
            />
            <AchievementCard
              title="Google UX Design Professional Certificate"
              organization="Google"
              date="2022"
              description="Comprehensive training in user experience design, covering the design process from beginning to end including research, wireframing, prototyping, and testing."
              imageUrl="/images/achievement2.jpg"
              credentialUrl="#"
            />
            <AchievementCard
              title="Hackathon Winner - Best Web Application"
              organization="TechCrunch Disrupt"
              date="2022"
              description="First place winner for developing an innovative web application that addresses accessibility challenges in online education."
              imageUrl="/images/achievement3.jpg"
              credentialUrl="#"
            />
            <AchievementCard
              title="MongoDB Certified Developer"
              organization="MongoDB University"
              date="2021"
              description="Certified in building applications using MongoDB, including data modeling, querying, indexing, and aggregation framework."
              imageUrl="/images/achievement4.jpg"
              credentialUrl="#"
            />
            <AchievementCard
              title="React Native Specialist"
              organization="Meta"
              date="2021"
              description="Advanced certification in building cross-platform mobile applications using React Native, including state management and native module integration."
              imageUrl="/images/achievement5.jpg"
              credentialUrl="#"
            />
            <AchievementCard
              title="Open Source Contributor Award"
              organization="GitHub"
              date="2020"
              description="Recognized for significant contributions to open source projects, particularly in the JavaScript ecosystem."
              imageUrl="/images/achievement6.jpg"
              credentialUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Hobbies & Interests
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            When I'm not coding, here's what keeps me inspired and energized
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HobbyCard
              title="Photography"
              description="Capturing landscapes and urban scenes through my lens. I particularly enjoy night photography and long exposures."
              icon="camera"
              imageUrl="/images/hobby-photography.jpg"
              color="from-cyan-500 to-blue-600"
            />
            <HobbyCard
              title="Hiking"
              description="Exploring mountain trails and discovering breathtaking views. I've hiked in over 15 national parks across the country."
              icon="mountain"
              imageUrl="/images/hobby-hiking.jpg"
              color="from-green-500 to-emerald-600"
            />
            <HobbyCard
              title="Reading"
              description="Diving into science fiction, philosophy, and technical books. I read about 30 books per year and maintain a digital book club."
              icon="book-open"
              imageUrl="/images/hobby-reading.jpg"
              color="from-amber-500 to-orange-600"
            />
            <HobbyCard
              title="Chess"
              description="Strategic thinking and planning several moves ahead. I participate in local tournaments and online competitions."
              icon="chess-knight"
              imageUrl="/images/hobby-chess.jpg"
              color="from-purple-500 to-violet-600"
            />
            <HobbyCard
              title="Cooking"
              description="Experimenting with international cuisines and perfecting recipes. I specialize in Italian and Asian fusion dishes."
              icon="utensils"
              imageUrl="/images/hobby-cooking.jpg"
              color="from-red-500 to-rose-600"
            />
            <HobbyCard
              title="Music Production"
              description="Creating electronic music and ambient soundscapes. I've released several tracks on SoundCloud and collaborate with other artists."
              icon="music"
              imageUrl="/images/hobby-music.jpg"
              color="from-fuchsia-500 to-pink-600"
            />
            <HobbyCard
              title="3D Printing"
              description="Designing and printing functional objects and artistic pieces. I've built my own custom 3D printer and contribute to open-source designs."
              icon="cube"
              imageUrl="/images/hobby-3dprinting.jpg"
              color="from-blue-500 to-indigo-600"
            />
            <HobbyCard
              title="Gardening"
              description="Growing vegetables and maintaining a small indoor plant collection. I'm particularly interested in sustainable urban gardening."
              icon="flower"
              imageUrl="/images/hobby-gardening.jpg"
              color="from-emerald-500 to-green-600"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 hover:border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-slate-300">hello@priyank.dev</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>
                    <p className="text-slate-300">linkedin.com/in/priyank</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                    <p className="text-slate-300">github.com/priyank</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 hover:border-cyan-500/20">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link
                href="/"
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
              >
                Priyank
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="#about" className="text-slate-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-slate-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-slate-400 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#achievements" className="text-slate-400 hover:text-white transition-colors">
                Achievements
              </Link>
              <Link href="#hobbies" className="text-slate-400 hover:text-white transition-colors">
                Hobbies
              </Link>
              <Link href="#contact" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <div className="mt-4 md:mt-0 text-slate-500 text-sm">
              © {new Date().getFullYear()} Priyank. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
