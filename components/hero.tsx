import { Github, Linkedin, Mail, Code2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary font-mono text-sm">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Sushil Yadav</h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              I build accessible, pixel-perfect digital experiences for the web. Specializing in creating full-stack
              applications using modern technologies like React.js, Node.js, and MongoDB.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#projects">
                  View Projects <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/sushilyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/sushilyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sushilyadav@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://leetcode.com/sushilyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LeetCode"
              >
                <Code2 size={24} />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-primary/10 p-2">
                <div className="w-full h-full rounded-full bg-primary/20 p-2 overflow-hidden">
                  <Image
                    src="/images/screenshot-202025-09-10-20004119.png"
                    alt="Sushil Yadav"
                    width={280}
                    height={280}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-lg flex items-center justify-center">
                <Code2 className="w-10 h-10 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
