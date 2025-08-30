import React from 'react';
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calculator, User, Home, BookOpen, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, key: "nav.home" },
    { path: "/courses", icon: BookOpen, key: "nav.courses" },
    { path: "/progress", icon: TrendingUp, key: "nav.progress" },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <Calculator className="h-8 w-8 text-primary" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary rounded-full animate-pulse" />
            </div>
            <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              AbacusKids
            </div>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`gap-2 transition-bounce ${
                      isActive ? 'shadow-button' : ''
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {t(item.key)}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{t('auth.login')}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-center gap-1 mt-3 pt-3 border-t border-border">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path} className="flex-1">
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`w-full gap-1 text-xs ${
                    isActive ? 'shadow-button' : ''
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden xs:inline">{t(item.key)}</span>
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};