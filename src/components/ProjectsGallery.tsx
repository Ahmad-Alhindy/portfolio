import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";



const projects = [
  {
    id: "1",
    title: "Chess Game",
    description:
      "A basic chess game for two local players with standard piece movement. Advanced rules like castling and promotion are excluded to keep it simple and focused on core gameplay.",
    image: "/chess.png",
    tags: [
      "Java",
      "Object Oriented Programming",
      "Game Development",
      "Project Planning",
    ],
    githubUrl: "https://github.com/Ahmad-Alhindy/Chess",
  },
  {
    id: "2",
    title: "Planning App",
    description:
      "A smart planning app that helps you organize your schedule with ease. Save reusable templates for tasks or appointments and select them multiple times as needed. View your plans in both weekly and monthly formats, and switch between light and dark mode.",
    image: "/planningApp.png",
    tags: ["Kotlin", "Jetpack Compose", "Room DB"],
    githubUrl: "https://github.com/Ahmad-Alhindy/planning-App",
  },
  {
    id: "3",
    title: "Advanced artificial intelligence",
    description: "A web-based AI tool designed to support circular construction by assessing whether lighting products should be reused or discarded. It uses RAG to search and extract relevant online content, and then generates informed answers. Built with a Python backend and a responsive frontend using HTML, CSS, and JavaScript.",
    image: "/LLM.png",
    tags: ["javascript", "HTML", "CSS", "Python", "RAG"],
    githubUrl: "https://github.com/End-of-life-LLM/End-Of-Life-LLM",
  },
];
const ProjectsGallery = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Projects
          </h2>
          <p className="text-foreground text-lg">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                className={`group relative rounded-2xl overflow-hidden bg-card/50 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all hover-glow flex flex-col ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Project Image */}
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4 mt-auto">
                  <Link to={`/projects/${project.id}`}>
                    <h3 className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-primary/80 text-primary-foreground border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:border-primary group/btn"
                      asChild
                    >
                      <Link to={`/projects/${project.id}`}>
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Details
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:border-primary group/btn"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
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
export default ProjectsGallery;
