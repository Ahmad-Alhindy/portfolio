import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Navigation />

      <div className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-glow">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something
              amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover-glow">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background/50 border-primary/30 focus:border-primary"
                      required
                    />
                  </div>

                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background/50 border-primary/30 focus:border-primary"
                      required
                    />
                  </div>

                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background/50 border-primary/30 focus:border-primary"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full hover-glow bg-gradient-to-r from-primary to-accent border-0 group animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold gradient-text">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover-glow group animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <a
                      href={info.href}
                      className="flex items-start gap-4 group-hover:translate-x-2 transition-transform"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              <Card
                className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover-glow animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="font-display font-bold text-xl mb-2 gradient-text">
                  Let's Build Something
                </h3>
                <p className="text-muted-foreground">
                  Whether you have a question, a project idea, or just want to
                  connect, I'm always open to discussing new opportunities and
                  collaborations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
