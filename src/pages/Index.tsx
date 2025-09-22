import Header from "@/components/Header";
import QuestCard from "@/components/QuestCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Droplets,
  Sun,
  Recycle,
  TreePine,
  Fish,
  Lightbulb,
  Heart,
  Globe,
  Award,
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const quests = [
    {
      title: "Plant a Digital Forest",
      description: "Learn about trees, their benefits, and help plant a virtual forest by answering questions about photosynthesis and forest ecosystems.",
      difficulty: "Easy" as const,
      points: 150,
      duration: "15 min",
      participants: 2847,
      icon: <TreePine className="w-6 h-6 text-clean-white" />,
      progress: 65,
    },
    {
      title: "Clean Water Heroes",
      description: "Discover how water gets polluted and learn ways to keep our rivers and lakes clean. Complete mini-games about water filtration!",
      difficulty: "Medium" as const,
      points: 200,
      duration: "20 min",
      participants: 1923,
      icon: <Droplets className="w-6 h-6 text-clean-white" />,
      progress: 0,
    },
    {
      title: "Solar Power Challenge",
      description: "Explore renewable energy! Build virtual solar panels and learn how the sun can power our homes and schools.",
      difficulty: "Medium" as const,
      points: 250,
      duration: "25 min",
      participants: 1456,
      icon: <Sun className="w-6 h-6 text-clean-white" />,
      progress: 30,
    },
    {
      title: "Recycling Master",
      description: "Become a recycling expert! Sort different materials, learn about the recycling process, and discover how to reduce waste.",
      difficulty: "Easy" as const,
      points: 120,
      duration: "12 min",
      participants: 3241,
      icon: <Recycle className="w-6 h-6 text-clean-white" />,
      isCompleted: true,
    },
    {
      title: "Ocean Guardian",
      description: "Dive deep into ocean conservation! Learn about marine life, plastic pollution, and how to protect our seas.",
      difficulty: "Hard" as const,
      points: 300,
      duration: "30 min",
      participants: 892,
      icon: <Fish className="w-6 h-6 text-clean-white" />,
      progress: 0,
    },
    {
      title: "Climate Action Hero",
      description: "Understand climate change and discover actions you can take to help fight global warming. Save the planet!",
      difficulty: "Hard" as const,
      points: 350,
      duration: "35 min",
      participants: 645,
      icon: <Globe className="w-6 h-6 text-clean-white" />,
      progress: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 nature-gradient opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-clean-white mb-6 leading-tight">
              Welcome to <span className="text-sunshine-yellow">EcoQuest</span>
            </h1>
            <p className="text-xl md:text-2xl text-clean-white mb-8 leading-relaxed">
              Join thousands of young eco-heroes on an exciting adventure to save our planet! 
              Complete quests, earn badges, and become an environmental champion! 🌱
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="hero-button text-xl px-10 py-6">
                <Leaf className="w-6 h-6 mr-2" />
                Start Your Adventure
              </Button>
              <Button className="bg-clean-white/20 backdrop-blur-sm text-clean-white border-clean-white/30 hover:bg-clean-white/30 text-xl px-10 py-6">
                <Award className="w-6 h-6 mr-2" />
                View Leaderboard
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="badge-container bg-clean-white/20 backdrop-blur-sm text-clean-white">
                <TreePine className="w-5 h-5" />
                <span>15,847 Trees Planted</span>
              </div>
              <div className="badge-container bg-clean-white/20 backdrop-blur-sm text-clean-white">
                <Droplets className="w-5 h-5" />
                <span>3,245 Rivers Cleaned</span>
              </div>
              <div className="badge-container bg-clean-white/20 backdrop-blur-sm text-clean-white">
                <Heart className="w-5 h-5" />
                <span>45,629 Eco Heroes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quests Section */}
      <section id="quests" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choose Your <span className="text-nature-green">Adventure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each quest teaches you about different environmental topics while you have fun! 
              Complete quests to earn points, unlock badges, and climb the leaderboard.
            </p>
          </div>

          {/* Quest Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quests.map((quest, index) => (
              <QuestCard key={index} {...quest} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 nature-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-clean-white mb-6">
            Ready to Save the Planet?
          </h2>
          <p className="text-xl text-clean-white mb-8 max-w-2xl mx-auto">
            Join your friends and classmates in the ultimate environmental adventure. 
            Every quest completed brings us one step closer to a cleaner, greener world!
          </p>
          <Button className="hero-button bg-clean-white text-nature-green hover:bg-clean-white/90 text-xl px-10 py-6">
            <Lightbulb className="w-6 h-6 mr-2" />
            Join the Movement
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;