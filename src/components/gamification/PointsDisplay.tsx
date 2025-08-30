import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Trophy } from 'lucide-react';

interface PointsDisplayProps {
  totalPoints: number;
  dailyStreak: number;
  level: number;
  className?: string;
}

export const PointsDisplay: React.FC<PointsDisplayProps> = ({
  totalPoints,
  dailyStreak,
  level,
  className = ''
}) => {
  const getLevelTitle = (level: number): string => {
    if (level <= 1) return 'Beginner';
    if (level <= 3) return 'Explorer';
    if (level <= 5) return 'Scholar';
    if (level <= 8) return 'Expert';
    return 'Master';
  };

  return (
    <Card className={`bg-gradient-fun text-white shadow-card ${className}`}>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            <span className="font-bold text-lg">{totalPoints.toLocaleString()}</span>
            <span className="text-sm opacity-90">points</span>
          </div>
          <Badge className="bg-white/20 text-white">
            Level {level}
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <div>
              <div className="font-medium">{dailyStreak} Day Streak</div>
              <div className="text-xs opacity-75">Keep it up!</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <div>
              <div className="font-medium">{getLevelTitle(level)}</div>
              <div className="text-xs opacity-75">Your rank</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};