import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Eye, Radio } from "lucide-react";
import heroImage from "@/assets/hero-drones.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Disaster management drones in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <Badge variant="secondary" className="mb-6 shadow-glow-accent">
          <Radio className="w-4 h-4 mr-2" />
          AI-Powered Emergency Response
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Intelligent Drone
          </span>
          <br />
          <span className="text-foreground">
            Disaster Management
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Revolutionizing emergency response with autonomous drones, real-time AI analytics, 
          and seamless coordination for faster, smarter disaster management.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="command" size="lg" className="text-lg px-8 py-6">
            <Shield className="w-5 h-5 mr-2" />
            Launch Command Center
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            <Eye className="w-5 h-5 mr-2" />
            View Live Demo
          </Button>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-Time AI</h3>
            <p className="text-muted-foreground">Advanced machine learning for instant threat assessment and response optimization.</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Radio className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Autonomous Fleet</h3>
            <p className="text-muted-foreground">Self-coordinating drone swarms with redundant communication systems.</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Crisis Management</h3>
            <p className="text-muted-foreground">Unified command interface for coordinating multi-agency emergency response.</p>
          </div>
        </div>
      </div>

      {/* Animated Data Flow Elements */}
      <div className="absolute top-1/2 left-4 w-1 h-20 bg-primary/30 animate-data-flow" />
      <div className="absolute top-1/3 right-8 w-1 h-16 bg-accent/30 animate-data-flow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-12 bg-secondary/30 animate-data-flow" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;