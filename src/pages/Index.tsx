import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import img from "../../public/personal_image1.jpeg";
const Index = () => {
  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{
              animationDelay: "1s",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-glow">
              Hi, I'm
              <span className="gradient-text"> Ahmad Alhindy</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80">
              Creative Software Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-lg">
              Data Engineering student Mobile & Platform Technologies Based in
              Sävsjö, I believe:
              <span className="gradient-text"> Never give up</span>, keep
              trying, and success will follow.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="hover-glow bg-gradient-to-r from-primary to-accent border-0 group"
                asChild
              >
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-primary"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/Ahmad-Alhindy"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover-glow"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/alhindy"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover-glow"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:alhindy.se@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover-glow"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image Placeholder*/}
          <div
            className="relative animate-scale-in"
            style={{
              animationDelay: "0.3s",
            }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-3xl opacity-40 animate-glow-pulse" />

              {/* Image placeholder */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur hover-glow group">
                <div className="aspect-square flex items-center justify-center">
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
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;
