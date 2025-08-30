import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, RotateCcw, Play } from 'lucide-react';
import { toast } from 'sonner';

interface Bead {
  id: string;
  value: number;
  position: 'top' | 'bottom';
  isActive: boolean;
}

interface AbacusExerciseProps {
  question: string;
  targetAnswer: number;
  onComplete: (isCorrect: boolean) => void;
}

export const AbacusExercise: React.FC<AbacusExerciseProps> = ({
  question,
  targetAnswer,
  onComplete,
}) => {
  const [beads, setBeads] = useState<Bead[]>([
    // Top row (5s)
    { id: 't1', value: 5, position: 'top', isActive: false },
    { id: 't2', value: 5, position: 'top', isActive: false },
    // Bottom row (1s)
    { id: 'b1', value: 1, position: 'bottom', isActive: false },
    { id: 'b2', value: 1, position: 'bottom', isActive: false },
    { id: 'b3', value: 1, position: 'bottom', isActive: false },
    { id: 'b4', value: 1, position: 'bottom', isActive: false },
  ]);

  const currentValue = beads
    .filter(bead => bead.isActive)
    .reduce((sum, bead) => sum + bead.value, 0);

  const toggleBead = (beadId: string) => {
    setBeads(prev => prev.map(bead => 
      bead.id === beadId 
        ? { ...bead, isActive: !bead.isActive }
        : bead
    ));
  };

  const resetBeads = () => {
    setBeads(prev => prev.map(bead => ({ ...bead, isActive: false })));
  };

  const checkAnswer = () => {
    const isCorrect = currentValue === targetAnswer;
    if (isCorrect) {
      toast.success('Correct! Well done!');
    } else {
      toast.error(`Try again! The answer is ${targetAnswer}`);
    }
    onComplete(isCorrect);
  };

  const topBeads = beads.filter(bead => bead.position === 'top');
  const bottomBeads = beads.filter(bead => bead.position === 'bottom');

  return (
    <Card className="shadow-card bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Play className="h-5 w-5 text-primary" />
            Interactive Exercise
          </span>
          <Badge variant="outline">
            Value: {currentValue}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Question */}
        <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="text-lg font-semibold text-foreground mb-2">
            {question}
          </div>
          <div className="text-sm text-muted-foreground">
            Use the abacus below to show the answer
          </div>
        </div>

        {/* Abacus */}
        <div className="max-w-xs mx-auto">
          <div className="bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/10 p-6 rounded-lg border-2 border-amber-200 dark:border-amber-700/50">
            {/* Frame */}
            <div className="relative">
              {/* Top separator */}
              <div className="h-1 bg-amber-800 dark:bg-amber-600 rounded mb-4"></div>
              
              {/* Top beads (5s) */}
              <div className="flex justify-center gap-2 mb-4">
                {topBeads.map(bead => (
                  <button
                    key={bead.id}
                    onClick={() => toggleBead(bead.id)}
                    className={`
                      w-8 h-8 rounded-full border-2 transition-all duration-200
                      ${bead.isActive 
                        ? 'bg-red-500 border-red-600 shadow-lg transform scale-110' 
                        : 'bg-red-200 border-red-300 hover:bg-red-300'
                      }
                    `}
                  >
                    <span className="text-xs font-bold text-white">{bead.value}</span>
                  </button>
                ))}
              </div>

              {/* Center separator */}
              <div className="h-0.5 bg-amber-700 dark:bg-amber-500 rounded mb-4"></div>

              {/* Bottom beads (1s) */}
              <div className="flex justify-center gap-2">
                {bottomBeads.map(bead => (
                  <button
                    key={bead.id}
                    onClick={() => toggleBead(bead.id)}
                    className={`
                      w-6 h-6 rounded-full border-2 transition-all duration-200
                      ${bead.isActive 
                        ? 'bg-blue-500 border-blue-600 shadow-lg transform scale-110' 
                        : 'bg-blue-200 border-blue-300 hover:bg-blue-300'
                      }
                    `}
                  >
                    <span className="text-xs font-bold text-white">{bead.value}</span>
                  </button>
                ))}
              </div>
              
              {/* Bottom frame */}
              <div className="h-1 bg-amber-800 dark:bg-amber-600 rounded mt-4"></div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={resetBeads}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button onClick={checkAnswer} className="gradient-primary">
            <CheckCircle className="h-4 w-4 mr-2" />
            Check Answer
          </Button>
        </div>

        {/* Instructions */}
        <div className="text-center text-sm text-muted-foreground space-y-1">
          <div>Click the beads to move them</div>
          <div>Red beads = 5, Blue beads = 1</div>
        </div>
      </CardContent>
    </Card>
  );
};