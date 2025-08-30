import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from '@/contexts/LanguageContext';
import { courses } from '@/data/courses';
import { 
  ArrowLeft, 
  Play, 
  Lock, 
  CheckCircle, 
  Clock, 
  BookOpen,
  Star,
  Trophy
} from 'lucide-react';

export const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { t } = useLanguage();
  
  const course = courses.find(c => c.id === parseInt(courseId || ''));

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course not found</h1>
          <Link to="/dashboard">
            <Button className="gradient-primary">Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  const progressPercentage = course.totalLessons > 0 
    ? (course.completedLessons / course.totalLessons) * 100 
    : 0;

  const totalDuration = course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Back Button */}
        <Link to="/dashboard">
          <Button variant="ghost" className="gap-2 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src={course.image} 
                    alt={`${t('course.level')} ${course.level}`}
                    className="w-full md:w-64 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1 space-y-4">
                    <div>
                      <Badge className="bg-primary text-primary-foreground mb-2">
                        {t('course.level')} {course.level}
                      </Badge>
                      <h1 className="text-3xl font-bold text-foreground mb-2">
                        {t(course.titleKey)}
                      </h1>
                      <p className="text-muted-foreground text-lg">
                        {course.descriptionKey}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="space-y-1">
                        <BookOpen className="h-5 w-5 text-primary mx-auto" />
                        <div className="text-sm text-muted-foreground">{t('course.lessons')}</div>
                        <div className="font-bold text-foreground">{course.totalLessons}</div>
                      </div>
                      <div className="space-y-1">
                        <Clock className="h-5 w-5 text-secondary mx-auto" />
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-bold text-foreground">{Math.round(totalDuration / 60)}h</div>
                      </div>
                      <div className="space-y-1">
                        <Star className="h-5 w-5 text-accent-yellow mx-auto" />
                        <div className="text-sm text-muted-foreground">Free</div>
                        <div className="font-bold text-foreground">
                          {course.lessons.filter(l => l.isFree).length}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Trophy className="h-5 w-5 text-success mx-auto" />
                        <div className="text-sm text-muted-foreground">Completed</div>
                        <div className="font-bold text-foreground">{course.completedLessons}</div>
                      </div>
                    </div>

                    {course.isEnrolled && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">{t('dashboard.yourProgress')}</span>
                          <span className="font-medium text-primary">
                            {Math.round(progressPercentage)}%
                          </span>
                        </div>
                        <Progress value={progressPercentage} className="h-3" />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lessons List */}
            <Card className="shadow-card bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Course Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.lessons.map((lesson, index) => {
                    const canAccess = lesson.isFree || course.isEnrolled;
                    const isCompleted = lesson.isCompleted;
                    
                    return (
                      <div
                        key={lesson.id}
                        className={`flex items-center justify-between p-4 rounded-lg border transition-smooth ${
                          isCompleted 
                            ? 'bg-success/5 border-success/20' 
                            : canAccess 
                              ? 'bg-primary/5 border-primary/20 hover:bg-primary/10' 
                              : 'bg-muted/30 border-border/20 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                            isCompleted 
                              ? 'bg-success text-success-foreground' 
                              : canAccess 
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground'
                          }`}>
                            {isCompleted ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : canAccess ? (
                              index + 1
                            ) : (
                              <Lock className="h-4 w-4" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">
                              {lesson.titleKey}
                            </h4>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {lesson.duration} min
                              </span>
                              {lesson.isFree && (
                                <Badge variant="secondary" className="text-xs">
                                  {t('common.free')}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {canAccess ? (
                            <Button size="sm" variant={isCompleted ? "secondary" : "default"}>
                              <Play className="h-3 w-3 mr-1" />
                              {isCompleted ? 'Review' : 'Start'}
                            </Button>
                          ) : (
                            <Button size="sm" variant="ghost" disabled>
                              <Lock className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {!course.isEnrolled && (
              <Card className="shadow-card bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {course.currency}{course.price}
                    </div>
                    <div className="text-muted-foreground">One-time payment</div>
                  </div>

                  <Button className="w-full gradient-primary shadow-button transition-bounce hover:scale-105">
                    {t('course.enroll')}
                  </Button>

                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">
                      Or try free lessons first
                    </div>
                    <Link to={`/course/${course.id}/demo`}>
                      <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                        <Play className="h-4 w-4 mr-2" />
                        {t('course.tryFree')}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* What you'll learn */}
            <Card className="shadow-card bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">What you'll learn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Master abacus techniques for this level
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Improve mental calculation speed
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Build confidence in mathematics
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Practice with interactive exercises
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};