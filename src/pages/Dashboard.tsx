import React from 'react';
import { Header } from '@/components/layout/Header';
import { CourseCard } from '@/components/course/CourseCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from '@/contexts/LanguageContext';
import { courses } from '@/data/courses';
import { BookOpen, Trophy, Clock, Target } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();

  const enrolledCourses = courses.filter(course => course.isEnrolled);
  const availableCourses = courses.filter(course => !course.isEnrolled);
  
  const totalLessons = enrolledCourses.reduce((acc, course) => acc + course.totalLessons, 0);
  const completedLessons = enrolledCourses.reduce((acc, course) => acc + course.completedLessons, 0);
  const overallProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  const stats = [
    {
      title: t('dashboard.enrolledCourses'),
      value: enrolledCourses.length,
      icon: BookOpen,
      color: 'text-primary',
    },
    {
      title: t('dashboard.completedLessons'),
      value: completedLessons,
      icon: Trophy,
      color: 'text-success',
    },
    {
      title: t('dashboard.totalLessons'),
      value: totalLessons,
      icon: Target,
      color: 'text-secondary',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gradient-primary bg-clip-text text-transparent">
                {t('dashboard.title')}
              </span>
            </h1>
            <div className="h-1 bg-gradient-primary rounded-full mx-auto w-24"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('dashboard.welcomeBack')}, {t('dashboard.yourProgress')} {Math.round(overallProgress)}%
          </p>
        </section>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-soft transition-smooth bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 mb-4`}>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Overall Progress */}
        {enrolledCourses.length > 0 && (
          <Card className="shadow-card bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-success" />
                {t('dashboard.yourProgress')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  {t('dashboard.completedLessons')}: {completedLessons} / {totalLessons}
                </span>
                <Badge className="bg-success text-success-foreground">
                  {Math.round(overallProgress)}%
                </Badge>
              </div>
              <Progress value={overallProgress} className="h-3" />
            </CardContent>
          </Card>
        )}

        {/* Enrolled Courses */}
        {enrolledCourses.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              {t('dashboard.enrolledCourses')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        )}

        {/* Available Courses */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Target className="h-6 w-6 text-secondary" />
            {t('dashboard.availableCourses')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Getting Started Tip */}
        {enrolledCourses.length === 0 && (
          <Card className="bg-gradient-fun text-white shadow-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">🎉 Start Your Abacus Journey!</h3>
              <p className="text-lg opacity-90 mb-6">
                Try our free lessons or enroll in a complete course to begin mastering mental math!
              </p>
              <Badge className="bg-white/20 text-white px-4 py-2">
                ✨ Free trial available for all levels
              </Badge>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};