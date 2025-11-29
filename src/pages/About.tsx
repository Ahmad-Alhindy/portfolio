import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Blocks, Zap, Database, Download } from "lucide-react";
import StudySection from "@/components/StudySection";
import SkillsVisualization from "@/components/SkillsVisualization";
import img from "../../public/personal_image2.jpeg";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description:
        "Expert in backend development, system design, Node.js, and modern technologies",
    },
    {
      icon: Blocks,
      title: "Architecture",
      description: "Designing scalable and maintainable system architectures",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing for speed and delivering exceptional user experiences",
    },
    {
      icon: Database,
      title: "Database",
      description:
        "Experienced in designing and managing databases for robust applications",
    },
  ];

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Navigation />

      <div className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about developing efficient backend systems and
              full-stack applications, with a focus on performance, reliability,
              and user experience.
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold">My Journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                I’m a final-year Data Engineering student specializing in mobile
                and web technologies. Previously, I worked as a CNC operator and
                at Skruf Snus AB, and I’ve also explored roles in healthcare and
                taxi services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I’m social, responsible, and persistent, with a strong interest
                in technology, AI, and modern solutions. I enjoy
                problem-solving, teamwork, and presenting ideas clearly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I’m eager to continue learning and contributing to projects that
                combine creativity with technical solutions.
              </p>
            </div>

            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center hover-glow overflow-hidden group">
                 <div className="text-center space-y-4 p-8">
                    <img
                      src={img}
                      alt="Ahmad Alhindy"
                      className="w-42 h-42 mx-auto rounded-full bg-gradient-to-br from-primary to-accent opacity-60 animate-glow-pulse group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            <h2 className="text-3xl font-display font-bold text-center">
              What I Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover-glow animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-bold mb-2 gradient-text">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-20 text-center animate-fade-in-up">
            <h2 className="text-3xl font-display font-bold mb-8">
              Technologies I Use
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Next.js",
                "MySQL",
                "Git",
                "Figma",
                "Docker",
                "C++",
                "Python",
                "Java",
                "Jetpack Compose",
                "Kotlin",
                "Android Studio",
                "Swift",
                "Xcode",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-card/50 backdrop-blur border border-primary/30 rounded-full text-sm font-medium hover:border-primary hover-glow transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Download Section */}
          <div className="mt-20 text-center animate-fade-in-up">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover-glow max-w-2xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-4 gradient-text">
                Download My Resume
              </h2>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <a
                  href="/resume.pdf"
                  download="Resume.pdf"
                  className="inline-flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume (PDF)
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <StudySection />
      <div className="relative z-10 pt-32 pb-20">
        <SkillsVisualization />
      </div>
    </div>
  );
};

export default About;
