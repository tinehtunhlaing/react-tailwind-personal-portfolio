import { Code2, MonitorSmartphone, Lightbulb, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing simple, readable, and maintainable code.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "Creating interfaces that work across different screen sizes.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Learning to break down problems and find practical solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Improving my skills with every project I build.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden ">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building my future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a junior web developer passionate about building clean,
                responsive, and user-friendly web applications. I enjoy turning
                ideas into real projects while continuously improving my skills
                and learning new technologies.
              </p>
              <p>
                I work with modern web technologies such as React, JavaScript,
                Node.js, and Express. Through personal projects, I've gained
                hands-on experience building frontend interfaces, working with
                APIs, and developing backend functionality.
              </p>
              <p>
                I'm always eager to learn, solve problems, and grow as a
                developer. My goal is to keep improving my skills and contribute
                to meaningful real-world projects.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My goal is simple: keep learning, keep building, and become a
                better developer with every project.”
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// sm:grid-cols-2
// sm breakpoint ကစပြီး 2 columns
