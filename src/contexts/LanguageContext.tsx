import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation & Common
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.progress': 'Progress',
    'nav.profile': 'Profile',
    'common.loading': 'Loading...',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.start': 'Start',
    'common.continue': 'Continue',
    'common.complete': 'Complete',
    'common.locked': 'Locked',
    'common.free': 'Free',
    'common.premium': 'Premium',
    
    // Authentication
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.fullName': 'Full Name',
    'auth.age': 'Age',
    'auth.loginTitle': 'Welcome Back!',
    'auth.registerTitle': 'Join the Abacus Adventure!',
    'auth.loginSubtitle': 'Enter your details to continue learning',
    'auth.registerSubtitle': 'Start your journey with numbers',
    
    // Dashboard
    'dashboard.title': 'Learning Dashboard',
    'dashboard.welcomeBack': 'Welcome back',
    'dashboard.yourProgress': 'Your Progress',
    'dashboard.enrolledCourses': 'Enrolled Courses',
    'dashboard.availableCourses': 'Available Courses',
    'dashboard.completedLessons': 'Completed Lessons',
    'dashboard.totalLessons': 'Total Lessons',
    
    // Courses
    'course.level': 'Level',
    'course.lessons': 'lessons',
    'course.tryFree': 'Try Free',
    'course.enroll': 'Enroll Now',
    'course.enrolled': 'Enrolled',
    'course.completed': 'Completed',
    'course.inProgress': 'In Progress',
    'course.lesson': 'Lesson',
    'course.practiceExercises': 'Practice Exercises',
    'course.quiz': 'Quiz',
    
    // Levels
    'level.beginner': 'Beginner Basics',
    'level.singleDigit': 'Single Digit Addition',
    'level.twoDigit': 'Two Digit Numbers',
    'level.subtraction': 'Subtraction Skills',
    'level.multiplication': 'Multiplication Magic',
    'level.division': 'Division Mastery',
    'level.decimals': 'Decimal Numbers',
    'level.fractions': 'Fun with Fractions',
    'level.advanced': 'Advanced Calculations',
    'level.master': 'Abacus Master',
  },
  hi: {
    // Navigation & Common
    'nav.home': 'मुख्य पृष्ठ',
    'nav.courses': 'कोर्स',
    'nav.progress': 'प्रगति',
    'nav.profile': 'प्रोफ़ाइल',
    'common.loading': 'लोड हो रहा है...',
    'common.next': 'अगला',
    'common.previous': 'पिछला',
    'common.start': 'शुरू करें',
    'common.continue': 'जारी रखें',
    'common.complete': 'पूर्ण',
    'common.locked': 'बंद',
    'common.free': 'निःशुल्क',
    'common.premium': 'प्रीमियम',
    
    // Authentication
    'auth.login': 'लॉगिन',
    'auth.register': 'रजिस्टर करें',
    'auth.email': 'ईमेल',
    'auth.password': 'पासवर्ड',
    'auth.confirmPassword': 'पासवर्ड की पुष्टि करें',
    'auth.fullName': 'पूरा नाम',
    'auth.age': 'उम्र',
    'auth.loginTitle': 'वापस स्वागत है!',
    'auth.registerTitle': 'अबेकस एडवेंचर में शामिल हों!',
    'auth.loginSubtitle': 'सीखना जारी रखने के लिए अपना विवरण दर्ज करें',
    'auth.registerSubtitle': 'संख्याओं के साथ अपनी यात्रा शुरू करें',
    
    // Dashboard
    'dashboard.title': 'सीखने का डैशबोर्ड',
    'dashboard.welcomeBack': 'वापस स्वागत है',
    'dashboard.yourProgress': 'आपकी प्रगति',
    'dashboard.enrolledCourses': 'नामांकित कोर्स',
    'dashboard.availableCourses': 'उपलब्ध कोर्स',
    'dashboard.completedLessons': 'पूर्ण किए गए पाठ',
    'dashboard.totalLessons': 'कुल पाठ',
    
    // Courses
    'course.level': 'स्तर',
    'course.lessons': 'पाठ',
    'course.tryFree': 'मुफ्त में आज़माएं',
    'course.enroll': 'अभी नामांकन करें',
    'course.enrolled': 'नामांकित',
    'course.completed': 'पूर्ण',
    'course.inProgress': 'प्रगति में',
    'course.lesson': 'पाठ',
    'course.practiceExercises': 'अभ्यास अभ्यास',
    'course.quiz': 'प्रश्नोत्तरी',
    
    // Levels
    'level.beginner': 'शुरुआती बुनियादी बातें',
    'level.singleDigit': 'एक अंकीय जोड़',
    'level.twoDigit': 'दो अंकीय संख्याएं',
    'level.subtraction': 'घटाव कौशल',
    'level.multiplication': 'गुणा जादू',
    'level.division': 'भाग में महारत',
    'level.decimals': 'दशमलव संख्याएं',
    'level.fractions': 'भिन्नों के साथ मज़ा',
    'level.advanced': 'उन्नत गणना',
    'level.master': 'अबेकस मास्टर',
  },
  mr: {
    // Navigation & Common
    'nav.home': 'मुख्य पान',
    'nav.courses': 'अभ्यासक्रम',
    'nav.progress': 'प्रगती',
    'nav.profile': 'प्रोफाइल',
    'common.loading': 'लोड होत आहे...',
    'common.next': 'पुढील',
    'common.previous': 'मागील',
    'common.start': 'सुरू करा',
    'common.continue': 'सुरू ठेवा',
    'common.complete': 'पूर्ण',
    'common.locked': 'बंद',
    'common.free': 'मोफत',
    'common.premium': 'प्रीमियम',
    
    // Authentication
    'auth.login': 'लॉगिन',
    'auth.register': 'नोंदणी करा',
    'auth.email': 'ईमेल',
    'auth.password': 'पासवर्ड',
    'auth.confirmPassword': 'पासवर्डची पुष्टी करा',
    'auth.fullName': 'पूर्ण नाव',
    'auth.age': 'वय',
    'auth.loginTitle': 'परत स्वागत आहे!',
    'auth.registerTitle': 'अॅबॅकस साहसात सामील व्हा!',
    'auth.loginSubtitle': 'शिकणे सुरू ठेवण्यासाठी तुमचे तपशील प्रविष्ट करा',
    'auth.registerSubtitle': 'संख्यांसह तुमचा प्रवास सुरू करा',
    
    // Dashboard
    'dashboard.title': 'शिकण्याचे डॅशबोर्ड',
    'dashboard.welcomeBack': 'परत स्वागत आहे',
    'dashboard.yourProgress': 'तुमची प्रगती',
    'dashboard.enrolledCourses': 'नोंदणीकृत अभ्यासक्रम',
    'dashboard.availableCourses': 'उपलब्ध अभ्यासक्रम',
    'dashboard.completedLessons': 'पूर्ण झालेले धडे',
    'dashboard.totalLessons': 'एकूण धडे',
    
    // Courses
    'course.level': 'स्तर',
    'course.lessons': 'धडे',
    'course.tryFree': 'मोफत वापरून पहा',
    'course.enroll': 'आता नोंदणी करा',
    'course.enrolled': 'नोंदणीकृत',
    'course.completed': 'पूर्ण',
    'course.inProgress': 'प्रगतीत',
    'course.lesson': 'धडा',
    'course.practiceExercises': 'सराव अभ्यास',
    'course.quiz': 'प्रश्नमंजुषा',
    
    // Levels
    'level.beginner': 'सुरुवातीची मूल तत्त्वे',
    'level.singleDigit': 'एका अंकी बेरीज',
    'level.twoDigit': 'दोन अंकी संख्या',
    'level.subtraction': 'वजाबाकी कौशल्य',
    'level.multiplication': 'गुणाकार जादू',
    'level.division': 'भागाकार प्रवीणता',
    'level.decimals': 'दशांश संख्या',
    'level.fractions': 'अपूर्णांकांची मजा',
    'level.advanced': 'प्रगत गणने',
    'level.master': 'अॅबॅकस मास्टर',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};