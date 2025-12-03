import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Zerodha Clone",
    description:
      "A Zerodha-inspired trading platform with live stock chart integration, secure user login, real-time order placement, and portfolio tracking features.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    features: [
      "Live stock chart integration",
      "Secure user authentication",
      "Real-time order placement",
      "Portfolio tracking",
    ],
    image: "/stock-trading-dashboard-dark-theme.jpg",
  },
  {
    title: "Zoom Clone",
    description:
      "A Zoom-inspired video conferencing app with video/audio streaming, chat messaging, and screen sharing capabilities.",
    tech: ["React.js", "WebRTC", "Socket.io", "Node.js"],
    features: ["Real-time video/audio streaming", "Chat messaging", "Screen sharing", "Secure authentication"],
    image: "/video-conferencing-app-dark-theme.jpg",
  },
  {
    title: "GitHub Clone",
    description: "A GitHub-inspired platform for code repository management with version control features.",
    tech: ["React.js", "Node.js", "Git", "MongoDB"],
    features: ["Repository management", "Version control", "User profiles", "Code collaboration"],
    image: "/github-code-repository-dark-theme.jpg",
  },
  {
    title: "ChatGPT with OpenAI",
    description: "An AI-powered chatbot application built using OpenAI's API for intelligent conversations.",
    tech: ["React.js", "OpenAI API", "Node.js", "Tailwind CSS"],
    features: ["AI-powered responses", "Conversation history", "Modern UI", "Real-time chat"],
    image: "/ai-chatbot-dark-theme.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <ul className="space-y-1 mb-4">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
