import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DroneStatus from "@/components/DroneStatus";
import AIInsights from "@/components/AIInsights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DroneStatus />
        <AIInsights />
      </main>
    </div>
  );
};

export default Index;
