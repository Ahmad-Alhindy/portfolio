import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import chess from "../../public/chess.png";

const projectsData = [
  {
    id: "1",
    title: "Chess Game",
    description:
      "A basic chess game for two local players with standard piece movement. Advanced rules like castling and promotion are excluded to keep it simple and focused on core gameplay.",

    fullDescription: `This is a basic chess game designed for two players to play locally on the same device. 
    It features a standard 8x8 board and supports basic movement rules for all pieces, 
    allowing players to take turns entering moves.
     The focus of the project was on implementing the core mechanics of chess, 
     including turn management and piece validation. 
     To keep the project lightweight and beginner-friendly, 
     advanced features such as castling, en passant, pawn promotion are not included. 
     The game ends when one player captures the opponent's king. This project demonstrates a clear understanding of 
     game state management, input handling, and rule-based logic implementation.`,
    image: chess,
    tags: ["Java", "Object Oriented Programming", "Game Development", "Project Planning"],
    liveUrl: "https://youtube.com/shorts/A2EQ2krkE10?feature=share",
    githubUrl: "https://github.com/Ahmad-Alhindy/Chess",
    features: [
      "Move validation",
      "Interactive board",
      "Clean and simple UI",
      "Turn-based gameplay",
    ],
    technologies: ["Java", "Object Oriented Programming"],
  },
  {
    id: "2",
    title: "Project Two",
    description: "Mobile-first responsive design with smooth animations",
    fullDescription:
      "A mobile-first application that prioritizes user experience across all devices. Built with performance in mind, featuring smooth animations and transitions that enhance the overall feel of the application.",
    image: "placeholder",
    tags: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Mobile-first design",
      "Smooth animations",
      "Performance optimized",
      "SEO friendly",
    ],
    technologies: ["Next.js 14", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "3",
    title: "Project Three",
    description: "Full-stack application with real-time features",
    fullDescription:
      "A comprehensive full-stack solution featuring real-time collaboration tools. This project demonstrates expertise in both frontend and backend development, with a focus on scalability and user experience.",
    image: "placeholder",
    tags: ["Vue.js", "Firebase", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Real-time collaboration",
      "Cloud storage",
      "User management",
      "Analytics dashboard",
    ],
    technologies: ["Vue.js 3", "Firebase", "CSS3", "WebSockets"],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background gradient-mesh flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/projects")}>
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={() => navigate("/projects")}
            className="mb-8 border-primary/50 hover:border-primary hover-glow"
          >
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Button>

          {/* Project Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
          
              <Button
                variant="outline"
                className="border-primary/50 hover:border-primary"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div
            className="mb-12 animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 hover-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                   <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div
            className="grid md:grid-cols-2 gap-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Description */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4 gradient-text">
                  About This Project
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Technologies Used
              </h3>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-card/50 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all hover-glow"
                  >
                    <span className="text-foreground font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
