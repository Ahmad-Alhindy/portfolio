import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase } from "lucide-react";

const experiences = [
{
  title: "Taxi Driver",
  company: "Telepass AB",
  period: "2020–Present",
  description:
    "Part-time taxi driver that I still maintain alongside my studies. I think it is a great opportunity to meet new people and learn from different experiences.",
},
  {
   title: "Machine Operator",
  company: "Skruf Snus AB",
  period: "2018 - 2023",
  description:
    "I was responsible for overseeing multiple stations and performing various tasks related to production and machinery maintenance.",
  },
  {
    title: "CNC Operator",
    company: "Trelleborg Wheels AB",
    period: "2017 - 2018",
    description:
      "I was responsible for programming and operating multiple CNC machines.",
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
