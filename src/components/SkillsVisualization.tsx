import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const skills = [
  { name: "Team Player", level: 95 },
  { name: "Planning", level: 90 },
  { name: "Curiosity", level: 85 },
  { name: "Sociability", level: 88 },
  { name: "Self-motivation", level: 92 },
  { name: "Patience", level: 95 },
  { name: "Honesty", level: 100 },
  { name: "Openness", level: 81 },
  { name: "Problem-solving", level: 93 },
  { name: "Time management", level: 96 },
  { name: "Adaptability", level: 89 },
];

const SkillBar = ({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setWidth(level), delay);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

const SkillsVisualization = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with on a daily basis
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;
