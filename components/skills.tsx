const skills = {
  languages: ["Java", "Python", "JavaScript", "SQL"],
  frontend: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  tools: ["Git", "GitHub", "VS Code", "Visual Studio"],
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Skills</h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory title="Languages" skills={skills.languages} />
          <SkillCategory title="Frontend" skills={skills.frontend} />
          <SkillCategory title="Backend" skills={skills.backend} />
          <SkillCategory title="Tools" skills={skills.tools} />
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
