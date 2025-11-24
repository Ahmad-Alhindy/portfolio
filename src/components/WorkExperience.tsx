import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company Inc.",
    period: "2023 - Present",
    description:
      "Leading frontend development team, architecting scalable React applications, and mentoring junior developers.",
    achievements: [
      "Improved app performance by 40%",
      "Led migration to TypeScript",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects using modern web technologies.",
    achievements: [
      "Built 20+ responsive websites",
      "Reduced load times by 50%",
      "Trained 5 junior developers",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Startup Studio",
    period: "2020 - 2021",
    description:
      "Collaborated with design team to create engaging user interfaces and interactive experiences.",
    achievements: [
      "Created reusable component library",
      "Implemented responsive designs",
      "Contributed to open-source projects",
    ],
  },
];

const WorkExperience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const { ref: itemRef, isVisible: itemVisible } = useScrollAnimation();
              return (
                <div
                  key={index}
                  ref={itemRef}
                  className={`relative pl-20 ${
                    itemVisible ? "animate-slide-in-right" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-lg" />

                  <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all hover-glow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">
                        Key Achievements:
                      </p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
