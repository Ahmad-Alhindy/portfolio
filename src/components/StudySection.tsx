import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "High school Diploma",
    institution: "Aleholm High School",
    period: "2016 - 2017",
    description:
      "CNC programming and production technologies with a focus on industry",
  },
  {
    degree: "Data Engineering in Mobile and Platform",
    institution: "Jönköping University",
    period: "2023 - Present",
    description:
      "Object-oriented programming, web development, mobile app development, logic and backend development, databases, and several programming languages.",
  },
   {
    degree: "React, TypeScript & Next.js",
    institution: "Udemy",
    period: "2025",
    description:
      "Learned modern frontend development with React, TypeScript, and Next.js, including component design, state management, and server-side rendering.",
  },
];

const StudySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => {
            const { ref: itemRef, isVisible: itemVisible } =
              useScrollAnimation();
            return (
              <div
                key={index}
                ref={itemRef}
                className={`group relative p-8 rounded-2xl bg-card/50 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all hover-glow ${
                  itemVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.period}
                    </p>
                    <p className="text-muted-foreground pt-2">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudySection;
