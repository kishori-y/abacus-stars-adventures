import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lock, Play, CheckCircle, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Course } from "@/data/courses";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { t } = useLanguage();

  const progressPercentage = course.totalLessons > 0 
    ? (course.completedLessons / course.totalLessons) * 100 
    : 0;

  const getStatusBadge = () => {
    if (course.isCompleted) {
      return (
        <Badge className="bg-success text-success-foreground gap-1">
          <CheckCircle className="h-3 w-3" />
          {t('course.completed')}
        </Badge>
      );
    }
    if (course.isEnrolled) {
      return (
        <Badge className="bg-primary text-primary-foreground gap-1">
          <Star className="h-3 w-3" />
          {t('course.enrolled')}
        </Badge>
      );
    }
    if (course.isLocked) {
      return (
        <Badge variant="secondary" className="gap-1 opacity-60">
          <Lock className="h-3 w-3" />
          {t('common.locked')}
        </Badge>
      );
    }
    return (
      <Badge className="bg-secondary text-secondary-foreground gap-1">
        <Play className="h-3 w-3" />
        {t('common.free')}
      </Badge>
    );
  };

  const getActionButton = () => {
    if (course.isLocked) {
      return (
        <Button variant="secondary" disabled className="w-full opacity-60">
          <Lock className="h-4 w-4 mr-2" />
          {t('common.locked')}
        </Button>
      );
    }
    
    if (course.isEnrolled) {
      return (
        <Link to={`/course/${course.id}`} className="w-full">
          <Button className="w-full gradient-primary shadow-button transition-bounce hover:scale-105">
            <Play className="h-4 w-4 mr-2" />
            {course.completedLessons > 0 ? t('common.continue') : t('common.start')}
          </Button>
        </Link>
      );
    }
    
    return (
      <div className="space-y-2">
        <Link to={`/course/${course.id}/demo`} className="w-full">
          <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
            <Play className="h-4 w-4 mr-2" />
            {t('course.tryFree')}
          </Button>
        </Link>
        <Button className="w-full gradient-secondary shadow-button transition-bounce hover:scale-105">
          {t('course.enroll')} - {course.currency}{course.price}
        </Button>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden shadow-card transition-smooth hover:shadow-soft hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={course.image} 
            alt={`${t('course.level')} ${course.level}`}
            className="w-full h-48 object-cover transition-smooth hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            {getStatusBadge()}
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              {t('course.level')} {course.level}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg text-foreground mb-2">
            {t(course.titleKey)}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {course.descriptionKey}
          </p>
        </div>

        {course.isEnrolled && (
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">{t('dashboard.yourProgress')}</span>
              <span className="font-medium text-primary">
                {course.completedLessons}/{course.totalLessons} {t('course.lessons')}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        )}

        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{course.totalLessons} {t('course.lessons')}</span>
          <span>
            {course.lessons.filter(l => l.isFree).length} {t('common.free')}
          </span>
        </div>

        {getActionButton()}
      </CardContent>
    </Card>
  );
};