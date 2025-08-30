import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, Trophy, Zap, Target, Crown, Medal } from 'lucide-react';

export type BadgeType = 'beginner' | 'achiever' | 'speedster' | 'focused' | 'master' | 'champion';

interface ProgressBadgeProps {
  type: BadgeType;
  earned: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const badgeConfig = {
  beginner: {
    icon: Star,
    label: 'Beginner',
    description: 'Complete your first lesson',
    color: 'bg-primary text-primary-foreground',
  },
  achiever: {
    icon: Trophy,
    label: 'Achiever',
    description: 'Complete a full level',
    color: 'bg-success text-success-foreground',
  },
  speedster: {
    icon: Zap,
    label: 'Speed Master',
    description: 'Complete 5 lessons in a day',
    color: 'bg-accent-yellow text-accent-yellow-foreground',
  },
  focused: {
    icon: Target,
    label: 'Focused Learner',
    description: 'Complete lessons 7 days in a row',
    color: 'bg-accent-blue text-accent-blue-foreground',
  },
  master: {
    icon: Crown,
    label: 'Abacus Master',
    description: 'Complete 3 levels',
    color: 'bg-accent-purple text-accent-purple-foreground',
  },
  champion: {
    icon: Medal,
    label: 'Champion',
    description: 'Complete all levels',
    color: 'bg-gradient-fun text-white',
  },
};

export const ProgressBadge: React.FC<ProgressBadgeProps> = ({ 
  type, 
  earned, 
  size = 'md' 
}) => {
  const config = badgeConfig[type];
  const Icon = config.icon;
  
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4', 
    lg: 'h-6 w-6',
  };

  return (
    <div className={`inline-flex items-center gap-2 ${earned ? '' : 'opacity-40'}`}>
      <div className={`
        flex items-center justify-center rounded-full
        ${sizeClasses[size]}
        ${earned ? config.color : 'bg-muted text-muted-foreground'}
        transition-all duration-300
        ${earned ? 'shadow-soft scale-105' : ''}
      `}>
        <Icon className={iconSizes[size]} />
      </div>
      {size === 'lg' && (
        <div className="text-left">
          <div className={`font-medium ${earned ? 'text-foreground' : 'text-muted-foreground'}`}>
            {config.label}
          </div>
          <div className="text-xs text-muted-foreground">
            {config.description}
          </div>
        </div>
      )}
    </div>
  );
};