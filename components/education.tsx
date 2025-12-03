import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "IIMT College of Engineering",
    location: "Greater Noida",
    period: "August 2023 - April 2026",
    status: "Currently Pursuing",
  },
  {
    degree: "Diploma in Electrical Engineering",
    institution: "Buddha Institute of Technology",
    location: "Gorakhpur",
    period: "2020 - 2023",
    grade: "7.1 CGPA",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Education</h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  {edu.grade && (
                    <div className="mt-2 inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {edu.grade}
                    </div>
                  )}
                  {edu.status && (
                    <div className="mt-2 inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {edu.status}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
