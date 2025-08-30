import React from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator, Star, Users, Trophy, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '@/data/courses';

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Star,
      title: 'Interactive Learning',
      description: 'Engaging exercises with colorful abacus visuals designed for children',
    },
    {
      icon: Users,
      title: 'Multi-Language Support',
      description: 'Learn in English, Hindi, or Marathi - perfect for Indian children',
    },
    {
      icon: Trophy,
      title: 'Progressive Levels',
      description: 'Structured curriculum from basics to advanced mental math mastery',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium">
                    🧮 Interactive Abacus Learning
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Master Mental Math
                    </span>
                    <br />
                    <span className="text-foreground">with AbacusKids</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                    Fun, interactive abacus learning for children aged 5-15. 
                    Build mathematical confidence with our structured, multilingual curriculum.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register">
                    <Button 
                      size="lg" 
                      className="gradient-primary shadow-button transition-bounce hover:scale-105 text-lg px-8 py-6"
                    >
                      Start Learning Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <Link to="/dashboard">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-primary/20 hover:bg-primary/5 text-lg px-8 py-6"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Try Demo
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span>Free trial lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src={courses[0].image} 
                      alt="Level 1 Abacus" 
                      className="rounded-lg shadow-card hover:shadow-soft transition-smooth hover:scale-105"
                    />
                    <img 
                      src={courses[2].image} 
                      alt="Level 3 Abacus" 
                      className="rounded-lg shadow-card hover:shadow-soft transition-smooth hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img 
                      src={courses[1].image} 
                      alt="Level 2 Abacus" 
                      className="rounded-lg shadow-card hover:shadow-soft transition-smooth hover:scale-105"
                    />
                    <img 
                      src={courses[4].image} 
                      alt="Level 5 Abacus" 
                      className="rounded-lg shadow-card hover:shadow-soft transition-smooth hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 animate-bounce">
                  <Badge className="bg-success text-success-foreground shadow-soft px-3 py-2">
                    6 Levels Available
                  </Badge>
                </div>
                <div className="absolute bottom-4 -left-4 animate-pulse">
                  <Badge className="bg-secondary text-secondary-foreground shadow-soft px-3 py-2">
                    Multi-Language
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose AbacusKids?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Designed specifically for young minds to build mathematical confidence and speed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="shadow-card hover:shadow-soft transition-smooth hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Course Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Progressive Learning Levels
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From basic counting to advanced mental math - structured learning for every age
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course) => (
                <Card key={course.id} className="overflow-hidden shadow-card hover:shadow-soft transition-smooth hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={`${t('course.level')} ${course.level}`}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      {t('course.level')} {course.level}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {t(course.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {course.descriptionKey}
                    </p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <span>{course.totalLessons} lessons</span>
                      <span>{course.lessons.filter(l => l.isFree).length} free</span>
                    </div>
                    <Link to="/dashboard">
                      <Button className="w-full gradient-secondary shadow-button transition-bounce hover:scale-105">
                        <Play className="h-4 w-4 mr-2" />
                        {t('course.tryFree')}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5 px-8 py-6"
                >
                  View All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-fun text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                🎉 Start Your Child's Math Journey Today!
              </h2>
              <p className="text-xl opacity-90">
                Join thousands of children who are building mathematical confidence with our interactive abacus program
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button 
                    size="lg" 
                    className="bg-white text-foreground hover:bg-white/90 shadow-button transition-bounce hover:scale-105 px-8 py-6"
                  >
                    Register Now - Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-6"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Try Demo First
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
