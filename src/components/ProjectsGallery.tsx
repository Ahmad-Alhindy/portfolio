import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img from "../../public/chess.png";

const projects = [
  {
    id: "1",
    title: "Chess Game",
    description:
      "A basic chess game for two local players with standard piece movement. Advanced rules like castling and promotion are excluded to keep it simple and focused on core gameplay.",
    image: img,
    tags: [
      "Java",
      "Object Oriented Programming",
      "Game Development",
      "Project Planning",
    ],
    videoUrl: "/videos/project2.mp4",

    githubUrl: "https://github.com/Ahmad-Alhindy/Chess",
  },
  {
    id: "2",
    title: "Project Two",
    description: "Mobile-first responsive design with smooth animations",
    image: "placeholder",
    tags: ["Next.js", "Node.js", "MongoDB"],
    videoUrl: "/videos/project2.mp4",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Project Three",
    description: "Full-stack application with real-time features",
    image: "placeholder",
    tags: ["Vue.js", "Firebase", "CSS3"],
    videoUrl: "/videos/project3.mp4",
    githubUrl: "#",
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
          <p className="text-muted-foreground text-lg">
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
                className={`group relative rounded-2xl overflow-hidden bg-card/50 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all hover-glow ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
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
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/30"
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
