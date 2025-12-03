import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Web Development",
    company: "Self-Employed",
    period: "January 2024 - November 2024",
    description: [
      "Developed 5+ full-stack web applications using HTML, CSS, JavaScript, Node.js, MySQL, and MongoDB",
      "Enhanced user experience and functionality across multiple projects",
      "Implemented responsive designs and modern UI patterns",
    ],
    skills: ["React.js", "Node.js", "MongoDB", "MySQL"],
  },
  {
    title: "Network Internship",
    company: "Bharti Network",
    period: "September 2022 - October 2022",
    location: "Remote",
    description: [
      "Gained experience in cutting-edge 5G technology",
      "Learned foundational networking principles",
      "Developed hands-on network operation experience",
    ],
    skills: ["Networking", "5G Technology", "Operations"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Briefcase className="w-4 h-4" />
                  <span>
                    {exp.company}
                    {exp.location && ` · ${exp.location}`}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
