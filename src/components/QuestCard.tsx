import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users } from "lucide-react";

interface QuestCardProps {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  points: number;
  duration: string;
  participants: number;
  icon: React.ReactNode;
  progress?: number;
  isCompleted?: boolean;
}

const QuestCard = ({
  title,
  description,
  difficulty,
  points,
  duration,
  participants,
  icon,
  progress = 0,
  isCompleted = false,
}: QuestCardProps) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy":
        return "bg-nature-green text-clean-white";
      case "Medium":
        return "bg-sunshine-yellow text-earth-brown";
      case "Hard":
        return "bg-pollution-red text-clean-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="quest-card">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 nature-gradient rounded-full flex items-center justify-center mb-3">
          {icon}
        </div>
        <Badge className={getDifficultyColor(difficulty)}>{difficulty}</Badge>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

      {/* Progress Bar */}
      {progress > 0 && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Quest Stats */}
      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-sunshine-yellow" />
          <span>{points} pts</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{participants}</span>
        </div>
      </div>

      {/* Action Button */}
      <Button
        className={`w-full ${
          isCompleted
            ? "bg-nature-green text-clean-white"
            : progress > 0
            ? "hero-button"
            : "hero-button"
        }`}
        disabled={isCompleted}
      >
        {isCompleted
          ? "✓ Completed!"
          : progress > 0
          ? "Continue Quest"
          : "Start Quest"}
      </Button>
    </div>
  );
};

export default QuestCard;