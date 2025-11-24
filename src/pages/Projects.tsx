import Navigation from "@/components/Navigation";
import ProjectsGallery from "@/components/ProjectsGallery";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <ProjectsGallery />
      </div>
    </div>
  );
};

export default Projects;
