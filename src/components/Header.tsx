import { Leaf, Trophy, Star } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 nature-gradient rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-clean-white" />
            </div>
            <h1 className="text-2xl font-bold text-nature-green">EcoQuest</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#quests" className="text-foreground hover:text-primary transition-colors">
              Quests
            </a>
            <a href="#progress" className="text-foreground hover:text-primary transition-colors">
              Progress
            </a>
            <a href="#leaderboard" className="text-foreground hover:text-primary transition-colors">
              Leaderboard
            </a>
          </nav>

          {/* User Stats */}
          <div className="flex items-center gap-4">
            <div className="badge-container">
              <Star className="w-4 h-4" />
              <span>1,247 Points</span>
            </div>
            <div className="badge-container">
              <Trophy className="w-4 h-4" />
              <span>Level 8</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;