import Link from "next/link"
import { ArrowRight, ChevronDown, Download, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
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
                Priyank Patel
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-slate-300">Web & GUI Developer</p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl text-slate-400">
              Transforming ideas into innovative technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 animate-pulse-slow"
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resume.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
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
                  <AvatarImage src="Priyank.jpg" alt="Profile" />
                  <AvatarFallback className="bg-slate-800 text-4xl">P</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                About Me
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Passionate and innovative learner with expertise in Java Swing and HTML. Experienced in building frontend websites using HTML & CSS, with AI-generated JavaScript. Enthusiastic about developing projects and exploring Computer Hardware, AI, Industry 4.0, and Prompt Engineering.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Proficient in HTML & CSS for creating responsive, visually appealing web interfaces.
                Skilled in Java Swing for building interactive GUI-based desktop applications.
                Experienced in Python Flask for backend development and MySQL for efficient data management.
              </p>
              <div className="flex gap-4">
                <Link href="https://github.com/Patel-Priyank-1602" target="_blank"><Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/patel-priyank-945131288/" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://twitter.com/Priyank_P16" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/patelpriyank.d/" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
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
            A selection of My Recent work, showcasing my skills and expertise in Web & GUI development
          </p>

          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-slate-800 border border-slate-700">
              <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r from-cyan-500 to-purple-600">
                All
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-gradient-to-r from-cyan-500 to-purple-600">
                Web
              </TabsTrigger>
              <TabsTrigger value="gui" className="data-[state=active]:bg-gradient-to-r from-cyan-500 to-purple-600">
                GUI
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Online Electronic Store"
                  description="A dynamic, secure, and user-friendly e-commerce platform designed for browsing and purchasing a wide range of electronic products with ease and confidence — fully responsive across both desktop and mobile devices."
                  tags={["HTML", "CSS", "JS", "MySQL", "Flask"]}
                  imageUrl="image/elctronicstore_l.png"
                  demoUrl="https://www.linkedin.com/posts/patel-priyank-945131288_smart-electronics-shopping-platform-activity-7323629487630249986-FE8W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXJSwUBy1pZdakiKqJQHFrTO0xksmyea28"
                  codeUrl="https://github.com/Patel-Priyank-1602/elec_store_ai.git"
                  featured={true}
                />
                <ProjectCard
                  title="CGPA Calculator"
                  description="Java-based CGPA Calculator designed specifically for 3rd-semester engineering students at PDEU.."
                  tags={["Java", "Java Swing"]}
                  imageUrl="image/cgpa_l.png"
                  demoUrl="https://www.linkedin.com/posts/patel-priyank-945131288_java-programming-engineering-activity-7265681809449885699-zRXx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXJSwUBy1pZdakiKqJQHFrTO0xksmyea28"
                  codeUrl="https://github.com/Patel-Priyank-1602/PDEU-3rd-SEM-CGPA-Calculator-.git"
                  featured={true}
                />
                <ProjectCard
                  title="WebSync"
                  description="For a long time, I struggled with organizing bookmarks—scrolling through endless links, clicking Show All, and searching manually felt tedious. So, I built WebSync, a fully customizable website manager!"
                  tags={["HTML", "CSS", "JS"]}
                  imageUrl="image/websync_l.png"
                  demoUrl="https://patel-priyank-1602.github.io/WebSyncP-/"
                  codeUrl="https://github.com/Patel-Priyank-1602/WebSyncP-.git"
                  featured={true}
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website with smooth animations, dark mode, and contact form integration."
                  tags={["Next.js", "Tailwind", "JS", "TypeScript", "Vercel"]}
                  imageUrl="image/portfolio_l.png"
                  demoUrl="https://priyank-patel-d.netlify.app/"
                  codeUrl="https://github.com/Patel-Priyank-1602/portcv.git"
                />
                <ProjectCard
                  title="Student Database"
                  description="I recently created a Student Management System that includes both frontend and backend functionality! Even though I currently know only HTML, CSS, and MySQL."
                  tags={["HTML", "CSS", "JS", "MySQL", "Flask"]}
                  imageUrl="image/stdb_l.png"
                  demoUrl="https://www.linkedin.com/posts/patel-priyank-945131288_webdevelopment-ai-chatgpt-activity-7293968738276589568-1V_R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXJSwUBy1pZdakiKqJQHFrTO0xksmyea28"
                  codeUrl="https://github.com/Patel-Priyank-1602/Student_Managment.git"
                />
                <ProjectCard
                  title="DialPad"
                  description="A modern, interactive dial pad built using Java Swing."
                  tags={["Java", "Java Swing"]}
                  imageUrl="image/dialpad_l.png"
                  demoUrl="https://www.linkedin.com/posts/patel-priyank-945131288_java-swing-guicoding-activity-7271541192838840320-S0tj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXJSwUBy1pZdakiKqJQHFrTO0xksmyea28"
                  codeUrl="https://github.com/Patel-Priyank-1602/DialPad-Updated.git"
                />
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Online Electronic Store"
                  description="A dynamic, secure, and user-friendly e-commerce platform designed for browsing and purchasing a wide range of electronic products with ease and confidence — fully responsive across both desktop and mobile devices."
                  tags={["HTML", "CSS", "JS", "MySQL", "Flask"]}
                  imageUrl="image/elctronicstore_l.png"
                  demoUrl="https://www.linkedin.com/posts/patel-priyank-945131288_smart-electronics-shopping-platform-activity-7323629487630249986-FE8W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXJSwUBy1pZdakiKqJQHFrTO0xksmyea28"
                  codeUrl="https://github.com/Patel-Priyank-1602/elec_store_ai.git"
                  featured={true}
                />
                <ProjectCard
                  title="WebSync"
                  description="For a long time, I struggled with organizing bookmarks—scrolling through endless links, clicking Show All, and searching manually felt tedious. So, I built WebSync, a fully customizable website manager!"
                  tags={["HTML", "CSS", "JS"]}
                  imageUrl="image/websync_l.png"
                  demoUrl="https://patel-priyank-1602.github.io/WebSyncP-/"
                  codeUrl="https://github.com/Patel-Priyank-1602/WebSyncP-.git"
                  featured={true}
                />
                <ProjectCard
                  title="Student Database"
                  description="I recently created a Student Management System that includes both frontend and backend functionality! Even though I currently know only HTML, CSS, and MySQL."
                  tags={["HTML", "CSS", "JS", "MySQL", "Flask"]}
                  imageUrl="image/stdb_l.png"
                  demoUrl="https://www.linkedin.com/posts/patel-priyank-945131288_webdevelopment-ai-chatgpt-activity-7293968738276589568-1V_R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXJSwUBy1pZdakiKqJQHFrTO0xksmyea28"
                  codeUrl="https://github.com/Patel-Priyank-1602/Student_Managment.git"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website with smooth animations, dark mode, and contact form integration."
                  tags={["Next.js", "Tailwind", "JS", "TypeScript", "Vercel"]}
                  imageUrl="image/portfolio_l.png"
                  demoUrl="https://priyank-patel-d.netlify.app/"
                  codeUrl="https://github.com/Patel-Priyank-1602/portcv.git"
                />
              </div>
            </TabsContent>

            <TabsContent value="gui" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="CGPA Calculator"
                  description="Java-based CGPA Calculator designed specifically for 3rd-semester engineering students at PDEU.."
                  tags={["Java", "Java Swing"]}
                  imageUrl="image/cgpa_l.png"
                  demoUrl="https://www.linkedin.com/posts/patel-priyank-945131288_java-programming-engineering-activity-7265681809449885699-zRXx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXJSwUBy1pZdakiKqJQHFrTO0xksmyea28"
                  codeUrl="https://github.com/Patel-Priyank-1602/PDEU-3rd-SEM-CGPA-Calculator-.git"
                  featured={true}
                />
                <ProjectCard
                  title="DialPad"
                  description="A modern, interactive dial pad built using Java Swing."
                  tags={["Java", "Java Swing"]}
                  imageUrl="image/dialpad_l.png"
                  demoUrl="https://www.linkedin.com/posts/patel-priyank-945131288_java-swing-guicoding-activity-7271541192838840320-S0tj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXJSwUBy1pZdakiKqJQHFrTO0xksmyea28"
                  codeUrl="https://github.com/Patel-Priyank-1602/DialPad-Updated.git"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <a
              href="https://www.linkedin.com/in/patel-priyank-945131288/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
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
            <SkillBadge name="HTML" icon="html" />
            <SkillBadge name="CSS" icon="css" />
            <SkillBadge name="C" icon="c" />
            <SkillBadge name="Python" icon="python" />
            <SkillBadge name="MySQL" icon="mysql" />
            <SkillBadge name="Java" icon="java" />
            <SkillBadge name="Git" icon="git" />
            <SkillBadge name="GitHub" icon="github" />
            <SkillBadge name="Data Structures" icon="data structures" />
            <SkillBadge name="VS Code" icon="vscode" />
            <SkillBadge name="Power BI" icon="powerbi" />
            <SkillBadge name="Video Editing" icon="video editing" />
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
              title="Hackathon Runners Up"
              organization="ACM PDEU"
              date="2025"
              description="We secured 2nd place in the PDEU ACM Hackathon by developing an online medical portal."
              imageUrl="image/ACM Hackethon.jpg"
              credentialUrl="https://drive.google.com/file/d/1gKuUG_LWcnkboS3pFD08C8xi-zt1JAX0/view?usp=drive_link"
            />
            <AchievementCard
              title="Career Essentials in Generative AI by Microsoft and LinkedIn"
              organization="Microsoft & LinkedIn"
              date="2024"
              description="I completed this course on the LinkedIn Learning platform, where I learned how powerful and useful generative AI is, provided by Microsoft and LinkedIn."
              imageUrl="image/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.jpg"
              credentialUrl="https://drive.google.com/file/d/1OtHYy8L1X04lV9h3SdvY3_Ar24-VKPEU/view?usp=drive_link"
            />
            <AchievementCard
              title="SQL Basic"
              organization="HackerRank"
              date="2025"
              description="I completed a test on the HackerRank platform, where I learned SQL basics and received this certificate."
              imageUrl="image/sql_basic certificate.png"
              credentialUrl="https://drive.google.com/file/d/1Otc8SK1FuYcHkFvlaXNWjHmIg23xUi79/view?usp=sharing"
            />
            <AchievementCard
              title="Dev-O-Lution"
              organization="Google Developer Group"
              date="2025"
              description="I participated in Dev-O-Lution at the DAIICT campus, where I learned a lot from Google Developer engineers."
              imageUrl="image/Dev-o.png"
              credentialUrl="https://drive.google.com/file/d/1mPKdzaOLiXrjK91o0nJOffVroqk90w4Y/view?usp=sharing"
            />
            <AchievementCard
              title="Civic and Social Services Internship"
              organization="Nirvana Foundation"
              date="2024"
              description="In 2024, I completed my Civic and Social Services Internship with Nirvana Foundation, participating in a one-month tree plantation campaign."
              imageUrl="image/Nirvana.png"
              credentialUrl="https://drive.google.com/file/d/1oVllnYNHRuuqG6lVmAwISA3NGTGZSVGu/view?usp=sharing"
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
              title="Drawing"
              description="Sketching portraits, urban scenes, and imaginative visuals."
              icon="drawing"
              imageUrl=""
              color="from-cyan-500 to-blue-600"
              websiteUrl="https://drawing-p.netlify.app/"
            />

            <HobbyCard
              title="Film - Review"
              description="Analyzing films, directors, genres, and storytelling techniques."
              icon="film"
              imageUrl=""
              color="from-green-500 to-emerald-600"
              websiteUrl="https://film-p.netlify.app/"
            />

            <HobbyCard
              title="Blog"
              description="Writing articles on tech, AI, and creative media."
              icon="blogging"
              imageUrl=""
              color="from-amber-500 to-orange-600"
              websiteUrl="https://blogai-p.netlify.app/"
            />

            <HobbyCard
              title="Gov Rules 2024-25"
              description="Simplifying Indian government rules, schemes, and regulations."
              icon="indian rule"
              imageUrl=""
              color="from-purple-500 to-violet-600"
              websiteUrl="https://patel-priyank-1602.github.io/Indian-Rules/"
            />

            <HobbyCard
              title="Music"
              description="Listen to the Song of My Voice."
              icon="music"
              imageUrl=""
              color="from-fuchsia-500 to-pink-600"
              websiteUrl="https://song-p.netlify.app/"
            />

            <HobbyCard
              title="Cricket"
              description="Playing cricket, tracking scores, and analyzing matches."
              icon="cricket"
              imageUrl=""
              color="from-red-500 to-rose-600"
            />

            <HobbyCard
              title="Gaming"
              description="Playing strategic and competitive games."
              icon="gaming"
              imageUrl=""
              color="from-yellow-500 to-green-600"
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
                <a href="mailto:patelpriyank2526@gmail.com" className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/patel-priyank-945131288/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>
                  </div>
                </a>
                <a href="https://github.com/Patel-Priyank-1602" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/patelpriyank.d/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Instagram</p>
                  </div>
                </a>
                <a href="https://x.com/Priyank_P16" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Twitter className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Twitter</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 hover:border-cyan-500/20">
              <form action="https://formspree.io/f/xldbzkye" method="POST" className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    name="email"
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
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
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