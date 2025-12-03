import { Award, CheckCircle } from "lucide-react"

const certifications = [
  { name: "Workshop on Web Development", issuer: "Softpro India (P) Ltd.", year: "2025" },
  { name: "Java Full Stack Development", issuer: "CROMA Campus", year: "2025" },
  { name: "Workshop on Power BI", issuer: "Ducat", year: "2025" },
  { name: "Python with IIOT", issuer: "Softpro India (P) Ltd.", year: "2025" },
  { name: "Java Programming", issuer: "Apana College Ltd.", year: "2025" },
  { name: "Data Structure Algorithm", issuer: "Apna College Ltd.", year: "2025" },
]

const achievements = [
  "Completed certified courses in Full Stack Development, Data Structures Algorithm, Java",
  "Ranked in top 25% of learners in HackerRank / LeetCode",
  "Active on Codeforces, LeetCode, and HackerRank with 100+ problems solved",
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Certifications & Achievements</h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-medium text-foreground">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              Achievements
            </h3>
            <div className="bg-card p-6 rounded-lg border border-border">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
