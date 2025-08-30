import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSelector } from '@/components/ui/language-selector';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: This would require Supabase integration for actual authentication
    console.log('Login attempt - requires Supabase integration');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Language Selector */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <Calculator className="h-8 w-8 text-primary" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary rounded-full animate-pulse" />
            </div>
            <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              AbacusKids
            </div>
          </Link>
          <LanguageSelector />
        </div>

        {/* Login Card */}
        <Card className="shadow-card bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold text-foreground">
              {t('auth.loginTitle')}
            </CardTitle>
            <p className="text-muted-foreground">
              {t('auth.loginSubtitle')}
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  {t('auth.email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="transition-smooth focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  {t('auth.password')}
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="transition-smooth focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-primary shadow-button transition-bounce hover:scale-105"
              >
                {t('auth.login')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 text-center space-y-4">
              <div className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link 
                  to="/register" 
                  className="text-primary hover:underline font-medium transition-smooth"
                >
                  {t('auth.register')}
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">
                    {t('course.tryFree')}
                  </span>
                </div>
              </div>

              <Link to="/dashboard">
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                  Continue as Guest
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Demo Notice */}
        <Card className="bg-gradient-secondary text-white shadow-card">
          <CardContent className="p-4 text-center">
            <p className="text-sm opacity-90">
              🎯 This is a demo app. Authentication requires Supabase integration.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};