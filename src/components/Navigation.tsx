import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Shield, 
  Plane, 
  Brain, 
  Map, 
  Settings, 
  AlertTriangle,
  Radio
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Dashboard", icon: Shield, href: "#dashboard" },
    { name: "Fleet Status", icon: Plane, href: "#fleet" },
    { name: "AI Insights", icon: Brain, href: "#insights" },
    { name: "Live Map", icon: Map, href: "#map" },
    { name: "Settings", icon: Settings, href: "#settings" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-primary">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">DisasterAI</h1>
              <p className="text-xs text-muted-foreground">Command Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="flex items-center gap-2 text-sm"
                asChild
              >
                <a href={item.href}>
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              </Button>
            ))}
          </div>

          {/* Status Indicators */}
          <div className="hidden md:flex items-center gap-3">
            <Badge variant="secondary" className="flex items-center gap-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              4 Active
            </Badge>
            <Badge variant="destructive" className="flex items-center gap-1 animate-status-blink">
              <AlertTriangle className="w-3 h-3" />
              1 Emergency
            </Badge>
            <Button variant="command" size="sm">
              <Radio className="w-4 h-4 mr-2" />
              Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start text-left"
                  asChild
                >
                  <a href={item.href} onClick={() => setIsOpen(false)}>
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </a>
                </Button>
              ))}
              
              {/* Mobile Status */}
              <div className="pt-4 space-y-2">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    4 Active Drones
                  </Badge>
                  <Badge variant="destructive" className="flex items-center gap-1 text-xs animate-status-blink">
                    <AlertTriangle className="w-3 h-3" />
                    1 Emergency
                  </Badge>
                </div>
                <Button variant="command" size="sm" className="w-full">
                  <Radio className="w-4 h-4 mr-2" />
                  Connect to Command
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;