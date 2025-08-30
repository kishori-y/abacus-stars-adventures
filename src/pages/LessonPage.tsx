import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from '@/contexts/LanguageContext';
import { courses } from '@/data/courses';
import { AbacusExercise } from '@/components/interactive/AbacusExercise';
import { 
  ArrowLeft, 
  ArrowRight,
  Play, 
  CheckCircle, 
  Clock,
  BookOpen,
  Target,
  Star
} from 'lucide-react';
import { toast } from 'sonner';

export const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const { t } = useLanguage();
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  
  const course = courses.find(c => c.id === parseInt(courseId || ''));
  const lesson = course?.lessons.find(l => l.id === parseInt(lessonId || ''));
  const lessonIndex = course?.lessons.findIndex(l => l.id === parseInt(lessonId || '')) ?? -1;

  if (!course || !lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Lesson not found</h1>
          <Link to="/dashboard">
            <Button className="gradient-primary">Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleExerciseComplete = (isCorrect: boolean) => {
    setExerciseCompleted(true);
    if (isCorrect) {
      toast.success('Great job! You completed the exercise correctly!');
    }
  };

  const handleCompleteLesson = () => {
    // In a real app, this would update the lesson completion status
    toast.success('Lesson completed! You earned 50 points!');
  };

  const nextLesson = course.lessons[lessonIndex + 1];
  const previousLesson = course.lessons[lessonIndex - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
          <span>/</span>
          <Link to={`/course/${course.id}`} className="hover:text-primary">
            {t(course.titleKey)}
          </Link>
          <span>/</span>
          <span className="text-foreground">{lesson.titleKey}</span>
        </div>

        {/* Lesson Header */}
        <Card className="shadow-card bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <Badge className="bg-primary text-primary-foreground mb-2">
                  {t('course.lesson')} {lessonIndex + 1}
                </Badge>
                <h1 className="text-3xl font-bold text-foreground">
                  {lesson.titleKey}
                </h1>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>{lesson.duration} minutes</span>
                </div>
                <Badge variant={lesson.isFree ? "secondary" : "default"}>
                  {lesson.isFree ? t('common.free') : t('common.premium')}
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Lesson Progress */}
        <Card className="shadow-card bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Lesson Progress</span>
              <span className="font-medium text-primary">
                {lessonIndex + 1} / {course.totalLessons}
              </span>
            </div>
            <Progress value={((lessonIndex + 1) / course.totalLessons) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* Lesson Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Video/Content Section */}
            <Card className="shadow-card bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-primary" />
                  Lesson Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive video content for {lesson.titleKey}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  In this lesson, you'll learn fundamental concepts about {lesson.titleKey.toLowerCase()}. 
                  Follow along with the interactive exercises and practice what you've learned.
                </p>
              </CardContent>
            </Card>

            {/* Interactive Exercise */}
            <AbacusExercise
              question="Show the number 7 on the abacus"
              targetAnswer={7}
              onComplete={handleExerciseComplete}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lesson Objectives */}
            <Card className="shadow-card bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Understand basic abacus structure
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Practice bead movement techniques
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Complete interactive exercises
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card className="shadow-card bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Course Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {course.completedLessons}/{course.totalLessons}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Lessons completed
                  </div>
                </div>
                <Progress 
                  value={course.totalLessons > 0 ? (course.completedLessons / course.totalLessons) * 100 : 0} 
                  className="h-2" 
                />
              </CardContent>
            </Card>

            {/* Complete Lesson Button */}
            <Button
              onClick={handleCompleteLesson}
              disabled={!exerciseCompleted}
              className="w-full gradient-primary shadow-button transition-bounce hover:scale-105"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Complete Lesson
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <div>
            {previousLesson && (
              <Link to={`/course/${course.id}/lesson/${previousLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Previous: {previousLesson.titleKey}
                </Button>
              </Link>
            )}
          </div>
          
          <div>
            {nextLesson && (
              <Link to={`/course/${course.id}/lesson/${nextLesson.id}`}>
                <Button className="gap-2 gradient-primary">
                  Next: {nextLesson.titleKey}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};