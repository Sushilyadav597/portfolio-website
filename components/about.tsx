import { MapPin, Phone } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building responsive and user-friendly web
              applications. Currently pursuing my Bachelor's degree in Computer Science at IIMT College of Engineering,
              Greater Noida.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experience in developing 5+ full-stack applications, I specialize in creating seamless user
              experiences using modern technologies. I've worked on exciting projects including trading platforms, video
              conferencing apps, and AI-powered applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm actively involved in competitive programming with 100+ problems solved on platforms like LeetCode,
              HackerRank, and Codeforces, consistently ranking in the top 25% of learners.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Gorakhpur, UP (273157)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">(+91) 8052192614</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Problems</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
