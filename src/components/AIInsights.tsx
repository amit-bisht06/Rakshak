import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  TrendingUp, 
  AlertCircle, 
  Target, 
  Activity,
  Zap,
  Eye,
  MapPin
} from "lucide-react";

const aiInsights = [
  {
    id: 1,
    title: "Flood Risk Assessment",
    confidence: 94,
    severity: "high",
    description: "Rising water levels detected in sectors A-7 and B-3. Immediate evacuation recommended.",
    recommendations: [
      "Deploy additional rescue drones to affected areas",
      "Establish emergency shelters in zones C-1 and D-4",
      "Activate flood barriers in downstream sectors"
    ],
    timeStamp: "2 minutes ago",
    source: "Satellite + Drone Analysis"
  },
  {
    id: 2,
    title: "Optimal Search Pattern",
    confidence: 87,
    severity: "medium",
    description: "AI suggests modified search grid for missing persons in Grid C-3 based on terrain analysis.",
    recommendations: [
      "Redirect Alpha and Beta teams to northwestern quadrant",
      "Focus thermal imaging on dense vegetation areas",
      "Coordinate with ground teams for synchronized sweep"
    ],
    timeStamp: "5 minutes ago",
    source: "ML Terrain Analysis"
  },
  {
    id: 3,
    title: "Resource Allocation",
    confidence: 91,
    severity: "low",
    description: "Current drone distribution is 15% suboptimal. Rebalancing recommended for improved coverage.",
    recommendations: [
      "Move Delta Monitor from B-5 to E-2",
      "Deploy Gamma Scout to perimeter surveillance",
      "Rotate high-battery units to active zones"
    ],
    timeStamp: "8 minutes ago",
    source: "Fleet Optimization AI"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high': return 'destructive';
    case 'medium': return 'warning';
    case 'low': return 'success';
    default: return 'secondary';
  }
};

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'high': return <AlertCircle className="w-4 h-4" />;
    case 'medium': return <Activity className="w-4 h-4" />;
    case 'low': return <TrendingUp className="w-4 h-4" />;
    default: return <Brain className="w-4 h-4" />;
  }
};

const AIInsights = () => {
  return (
    <section className="py-16 px-6 bg-gradient-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent">AI-Powered</span> Intelligence Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time machine learning insights and predictive analytics for enhanced decision-making
          </p>
        </div>

        {/* Live AI Status Bar */}
        <Card className="mb-8 bg-card/50 backdrop-blur-sm border-border">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary animate-pulse-glow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">AI System Status</h3>
                  <p className="text-sm text-muted-foreground">Neural networks active and processing</p>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">98.7%</div>
                  <div className="text-xs text-muted-foreground">Model Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">247ms</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-1">12.4k</div>
                  <div className="text-xs text-muted-foreground">Data Points/sec</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {aiInsights.map((insight) => (
            <Card key={insight.id} className="bg-card border-border hover:shadow-glow-accent transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-${getSeverityColor(insight.severity)}/20 rounded-lg flex items-center justify-center`}>
                      {getSeverityIcon(insight.severity)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{insight.source}</p>
                    </div>
                  </div>
                  <Badge variant={getSeverityColor(insight.severity) as "default" | "destructive" | "outline" | "secondary" | "warning" | "success"} className="capitalize">
                    {insight.severity} Priority
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Confidence Score */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">AI Confidence</span>
                    <span className="font-medium">{insight.confidence}%</span>
                  </div>
                  <Progress value={insight.confidence} className="h-2" />
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed">{insight.description}</p>

                {/* Recommendations */}
                <div>
                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Recommended Actions
                  </h4>
                  <ul className="space-y-1">
                    {insight.recommendations.map((rec, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="command" size="sm" className="flex-1">
                    <Zap className="w-4 h-4 mr-2" />
                    Implement
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>

                {/* Timestamp */}
                <div className="text-xs text-muted-foreground border-t border-border pt-2">
                  Generated {insight.timeStamp}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real-time Metrics Dashboard */}
        <Card className="bg-gradient-surface border-border">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Activity className="w-6 h-6 text-accent" />
              Live Analytics Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
              <div>
                <div className="text-lg font-bold text-primary mb-1">127</div>
                <div className="text-xs text-muted-foreground">Threats Detected</div>
              </div>
              <div>
                <div className="text-lg font-bold text-success mb-1">94%</div>
                <div className="text-xs text-muted-foreground">Prediction Accuracy</div>
              </div>
              <div>
                <div className="text-lg font-bold text-accent mb-1">3.2s</div>
                <div className="text-xs text-muted-foreground">Avg Response Time</div>
              </div>
              <div>
                <div className="text-lg font-bold text-warning mb-1">42</div>
                <div className="text-xs text-muted-foreground">Active Alerts</div>
              </div>
              <div>
                <div className="text-lg font-bold text-secondary mb-1">8.1k</div>
                <div className="text-xs text-muted-foreground">Data Sources</div>
              </div>
              <div>
                <div className="text-lg font-bold text-destructive mb-1">2</div>
                <div className="text-xs text-muted-foreground">Critical Zones</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIInsights;