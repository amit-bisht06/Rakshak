import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Battery, 
  MapPin, 
  Signal, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Zap
} from "lucide-react";

interface DroneData {
  id: string;
  name: string;
  status: 'active' | 'standby' | 'maintenance' | 'emergency';
  battery: number;
  location: string;
  signal: number;
  mission: string;
  lastUpdate: string;
}

const drones: DroneData[] = [
  {
    id: "DRN-001",
    name: "Alpha Surveyor",
    status: "active",
    battery: 87,
    location: "Grid A-7",
    signal: 95,
    mission: "Flood Assessment",
    lastUpdate: "2s ago"
  },
  {
    id: "DRN-002", 
    name: "Beta Rescue",
    status: "emergency",
    battery: 45,
    location: "Grid C-3",
    signal: 78,
    mission: "Search & Rescue",
    lastUpdate: "1s ago"
  },
  {
    id: "DRN-003",
    name: "Gamma Scout",
    status: "standby",
    battery: 92,
    location: "Base Station",
    signal: 100,
    mission: "Ready",
    lastUpdate: "5m ago"
  },
  {
    id: "DRN-004",
    name: "Delta Monitor",
    status: "active",
    battery: 71,
    location: "Grid B-5",
    signal: 88,
    mission: "Perimeter Watch",
    lastUpdate: "3s ago"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-success text-success-foreground';
    case 'emergency': return 'bg-destructive text-destructive-foreground animate-status-blink';
    case 'standby': return 'bg-secondary text-secondary-foreground';
    case 'maintenance': return 'bg-warning text-warning-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active': return <CheckCircle className="w-4 h-4" />;
    case 'emergency': return <AlertTriangle className="w-4 h-4" />;
    case 'standby': return <Clock className="w-4 h-4" />;
    case 'maintenance': return <Zap className="w-4 h-4" />;
    default: return <Plane className="w-4 h-4" />;
  }
};

const DroneStatus = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Live Drone</span> Fleet Status
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring and control of autonomous drone fleet with AI-powered status analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {drones.map((drone) => (
            <Card key={drone.id} className="bg-gradient-surface border-border hover:shadow-glow-primary transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Plane className="w-5 h-5 text-primary" />
                    {drone.name}
                  </CardTitle>
                  <Badge className={getStatusColor(drone.status)} variant="secondary">
                    {getStatusIcon(drone.status)}
                    {drone.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{drone.id}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Battery Level */}
                <div className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Battery</span>
                      <span className={drone.battery < 20 ? 'text-destructive' : 'text-foreground'}>
                        {drone.battery}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          drone.battery < 20 ? 'bg-destructive' : 
                          drone.battery < 50 ? 'bg-warning' : 'bg-success'
                        }`}
                        style={{ width: `${drone.battery}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Signal Strength */}
                <div className="flex items-center gap-2">
                  <Signal className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Signal</span>
                      <span>{drone.signal}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-300"
                        style={{ width: `${drone.signal}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">{drone.location}</span>
                </div>

                {/* Mission */}
                <div className="text-sm">
                  <span className="text-muted-foreground">Mission:</span>
                  <span className="font-medium ml-2">{drone.mission}</span>
                </div>

                {/* Last Update */}
                <div className="text-xs text-muted-foreground border-t border-border pt-2">
                  Last update: {drone.lastUpdate}
                </div>

                {/* Action Button */}
                <Button 
                  variant={drone.status === 'emergency' ? 'emergency' : 'outline'} 
                  size="sm" 
                  className="w-full"
                >
                  {drone.status === 'emergency' ? 'Emergency Response' : 'View Details'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fleet Summary */}
        <Card className="bg-gradient-surface border-border">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Plane className="w-6 h-6 text-primary" />
              Fleet Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-success mb-1">
                  {drones.filter(d => d.status === 'active').length}
                </div>
                <div className="text-sm text-muted-foreground">Active Missions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-destructive mb-1">
                  {drones.filter(d => d.status === 'emergency').length}
                </div>
                <div className="text-sm text-muted-foreground">Emergency Response</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-1">
                  {drones.filter(d => d.status === 'standby').length}
                </div>
                <div className="text-sm text-muted-foreground">On Standby</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {Math.round(drones.reduce((acc, d) => acc + d.battery, 0) / drones.length)}%
                </div>
                <div className="text-sm text-muted-foreground">Avg Battery</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DroneStatus;