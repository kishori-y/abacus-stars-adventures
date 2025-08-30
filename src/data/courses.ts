import abacusLevel1 from '@/assets/abacus-level-1.jpg';
import abacusLevel2 from '@/assets/abacus-level-2.jpg';
import abacusLevel3 from '@/assets/abacus-level-3.jpg';
import abacusLevel4 from '@/assets/abacus-level-4.jpg';
import abacusLevel5 from '@/assets/abacus-level-5.jpg';
import abacusMaster from '@/assets/abacus-master.jpg';

export interface Lesson {
  id: number;
  titleKey: string;
  duration: number; // in minutes
  isCompleted: boolean;
  isLocked: boolean;
  isFree: boolean;
}

export interface Course {
  id: number;
  level: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  totalLessons: number;
  completedLessons: number;
  isEnrolled: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  price: number;
  currency: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: 1,
    level: 1,
    titleKey: 'level.beginner',
    descriptionKey: 'Learn basic counting and number recognition with colorful beads',
    image: abacusLevel1,
    totalLessons: 13,
    completedLessons: 0,
    isEnrolled: false,
    isCompleted: false,
    isLocked: false,
    price: 499,
    currency: '₹',
    lessons: [
      { id: 1, titleKey: 'Introduction to Abacus', duration: 15, isCompleted: false, isLocked: false, isFree: true },
      { id: 2, titleKey: 'Counting 1 to 10', duration: 20, isCompleted: false, isLocked: false, isFree: true },
      { id: 3, titleKey: 'Number Recognition', duration: 18, isCompleted: false, isLocked: false, isFree: true },
      { id: 4, titleKey: 'Basic Bead Movement', duration: 25, isCompleted: false, isLocked: true, isFree: false },
      { id: 5, titleKey: 'Simple Addition (1-5)', duration: 22, isCompleted: false, isLocked: true, isFree: false },
      { id: 6, titleKey: 'Simple Addition (6-10)', duration: 25, isCompleted: false, isLocked: true, isFree: false },
      { id: 7, titleKey: 'Practice Session 1', duration: 30, isCompleted: false, isLocked: true, isFree: false },
      { id: 8, titleKey: 'Number Bonds', duration: 28, isCompleted: false, isLocked: true, isFree: false },
      { id: 9, titleKey: 'Fun Exercises', duration: 35, isCompleted: false, isLocked: true, isFree: false },
      { id: 10, titleKey: 'Two Digit Introduction', duration: 20, isCompleted: false, isLocked: true, isFree: false },
      { id: 11, titleKey: 'Speed Practice Basics', duration: 25, isCompleted: false, isLocked: true, isFree: false },
      { id: 12, titleKey: 'Mental Math Foundation', duration: 30, isCompleted: false, isLocked: true, isFree: false },
      { id: 13, titleKey: 'Level 1 Assessment', duration: 20, isCompleted: false, isLocked: true, isFree: false },
    ]
  },
  {
    id: 2,
    level: 2,
    titleKey: 'level.singleDigit',
    descriptionKey: 'Master single digit addition with fun interactive exercises',
    image: abacusLevel2,
    totalLessons: 13,
    completedLessons: 0,
    isEnrolled: false,
    isCompleted: false,
    isLocked: true,
    price: 599,
    currency: '₹',
    lessons: [
      { id: 14, titleKey: 'Advanced Counting', duration: 20, isCompleted: false, isLocked: false, isFree: true },
      { id: 15, titleKey: 'Addition Strategies', duration: 25, isCompleted: false, isLocked: false, isFree: true },
      { id: 16, titleKey: 'Speed Practice', duration: 22, isCompleted: false, isLocked: true, isFree: false },
      { id: 17, titleKey: 'Complement Numbers', duration: 28, isCompleted: false, isLocked: true, isFree: false },
      { id: 18, titleKey: 'Mental Math Basics', duration: 30, isCompleted: false, isLocked: true, isFree: false },
      { id: 19, titleKey: 'Pattern Recognition', duration: 26, isCompleted: false, isLocked: true, isFree: false },
      { id: 20, titleKey: 'Advanced Bead Techniques', duration: 32, isCompleted: false, isLocked: true, isFree: false },
      { id: 21, titleKey: 'Practice Session 2', duration: 35, isCompleted: false, isLocked: true, isFree: false },
      { id: 22, titleKey: 'Speed Challenges', duration: 25, isCompleted: false, isLocked: true, isFree: false },
      { id: 23, titleKey: 'Games and Activities', duration: 40, isCompleted: false, isLocked: true, isFree: false },
      { id: 24, titleKey: 'Review and Practice', duration: 30, isCompleted: false, isLocked: true, isFree: false },
      { id: 25, titleKey: 'Logic Building', duration: 28, isCompleted: false, isLocked: true, isFree: false },
      { id: 26, titleKey: 'Level 2 Assessment', duration: 25, isCompleted: false, isLocked: true, isFree: false },
    ]
  },
  {
    id: 3,
    level: 3,
    titleKey: 'level.twoDigit',
    descriptionKey: 'Explore two-digit numbers and advanced calculation techniques',
    image: abacusLevel3,
    totalLessons: 13,
    completedLessons: 0,
    isEnrolled: false,
    isCompleted: false,
    isLocked: true,
    price: 699,
    currency: '₹',
    lessons: [
      { id: 23, titleKey: 'Two-Digit Introduction', duration: 25, isCompleted: false, isLocked: false, isFree: true },
      { id: 24, titleKey: 'Place Value Concepts', duration: 30, isCompleted: false, isLocked: false, isFree: true },
      { id: 25, titleKey: 'Tens and Units', duration: 28, isCompleted: false, isLocked: true, isFree: false },
      { id: 26, titleKey: 'Addition without Carrying', duration: 32, isCompleted: false, isLocked: true, isFree: false },
      { id: 27, titleKey: 'Addition with Carrying', duration: 35, isCompleted: false, isLocked: true, isFree: false },
      { id: 28, titleKey: 'Number Representation', duration: 30, isCompleted: false, isLocked: true, isFree: false },
      { id: 29, titleKey: 'Advanced Patterns', duration: 33, isCompleted: false, isLocked: true, isFree: false },
      { id: 30, titleKey: 'Speed Building', duration: 40, isCompleted: false, isLocked: true, isFree: false },
      { id: 31, titleKey: 'Problem Solving', duration: 38, isCompleted: false, isLocked: true, isFree: false },
      { id: 32, titleKey: 'Practice Session 3', duration: 45, isCompleted: false, isLocked: true, isFree: false },
      { id: 33, titleKey: 'Challenge Problems', duration: 35, isCompleted: false, isLocked: true, isFree: false },
      { id: 34, titleKey: 'Review and Mastery', duration: 40, isCompleted: false, isLocked: true, isFree: false },
      { id: 35, titleKey: 'Level 3 Assessment', duration: 30, isCompleted: false, isLocked: true, isFree: false },
    ]
  },
  {
    id: 4,
    level: 4,
    titleKey: 'level.subtraction',
    descriptionKey: 'Master subtraction skills with systematic approach',
    image: abacusLevel4,
    totalLessons: 13,
    completedLessons: 0,
    isEnrolled: false,
    isCompleted: false,
    isLocked: true,
    price: 799,
    currency: '₹',
    lessons: [
      { id: 36, titleKey: 'Subtraction Basics', duration: 25, isCompleted: false, isLocked: false, isFree: true },
      { id: 37, titleKey: 'Simple Subtraction', duration: 30, isCompleted: false, isLocked: false, isFree: true },
      { id: 38, titleKey: 'Borrowing Concepts', duration: 35, isCompleted: false, isLocked: true, isFree: false },
      { id: 39, titleKey: 'Advanced Subtraction', duration: 40, isCompleted: false, isLocked: true, isFree: false },
      { id: 40, titleKey: 'Mixed Operations', duration: 38, isCompleted: false, isLocked: true, isFree: false },
      { id: 41, titleKey: 'Problem Solving', duration: 42, isCompleted: false, isLocked: true, isFree: false },
      { id: 42, titleKey: 'Speed Practice', duration: 35, isCompleted: false, isLocked: true, isFree: false },
      { id: 43, titleKey: 'Real-World Applications', duration: 45, isCompleted: false, isLocked: true, isFree: false },
      { id: 44, titleKey: 'Practice Session 4', duration: 50, isCompleted: false, isLocked: true, isFree: false },
      { id: 45, titleKey: 'Mastery Challenges', duration: 40, isCompleted: false, isLocked: true, isFree: false },
      { id: 46, titleKey: 'Number Patterns', duration: 35, isCompleted: false, isLocked: true, isFree: false },
      { id: 47, titleKey: 'Complex Problems', duration: 45, isCompleted: false, isLocked: true, isFree: false },
      { id: 48, titleKey: 'Level 4 Assessment', duration: 35, isCompleted: false, isLocked: true, isFree: false },
    ]
  },
  {
    id: 5,
    level: 5,
    titleKey: 'level.multiplication',
    descriptionKey: 'Discover the magic of multiplication with abacus techniques',
    image: abacusLevel5,
    totalLessons: 13,
    completedLessons: 0,
    isEnrolled: false,
    isCompleted: false,
    isLocked: true,
    price: 899,
    currency: '₹',
    lessons: [
      { id: 49, titleKey: 'Multiplication Introduction', duration: 30, isCompleted: false, isLocked: false, isFree: true },
      { id: 50, titleKey: 'Times Tables on Abacus', duration: 35, isCompleted: false, isLocked: false, isFree: true },
      { id: 51, titleKey: 'Single Digit Multiplication', duration: 40, isCompleted: false, isLocked: true, isFree: false },
      { id: 52, titleKey: 'Two Digit Multiplication', duration: 45, isCompleted: false, isLocked: true, isFree: false },
      { id: 53, titleKey: 'Advanced Techniques', duration: 42, isCompleted: false, isLocked: true, isFree: false },
      { id: 54, titleKey: 'Speed Methods', duration: 50, isCompleted: false, isLocked: true, isFree: false },
      { id: 55, titleKey: 'Pattern Recognition', duration: 38, isCompleted: false, isLocked: true, isFree: false },
      { id: 56, titleKey: 'Problem Solving', duration: 48, isCompleted: false, isLocked: true, isFree: false },
      { id: 57, titleKey: 'Practice Session 5', duration: 55, isCompleted: false, isLocked: true, isFree: false },
      { id: 58, titleKey: 'Real-World Math', duration: 45, isCompleted: false, isLocked: true, isFree: false },
      { id: 59, titleKey: 'Championship Practice', duration: 60, isCompleted: false, isLocked: true, isFree: false },
      { id: 60, titleKey: 'Multiplication Mastery', duration: 50, isCompleted: false, isLocked: true, isFree: false },
      { id: 61, titleKey: 'Level 5 Assessment', duration: 40, isCompleted: false, isLocked: true, isFree: false },
    ]
  },
  {
    id: 6,
    level: 6,
    titleKey: 'level.master',
    descriptionKey: 'Become an Abacus master with advanced calculations',
    image: abacusMaster,
    totalLessons: 13,
    completedLessons: 0,
    isEnrolled: false,
    isCompleted: false,
    isLocked: true,
    price: 1299,
    currency: '₹',
    lessons: [
      { id: 62, titleKey: 'Master Level Introduction', duration: 35, isCompleted: false, isLocked: false, isFree: true },
      { id: 63, titleKey: 'Complex Calculations', duration: 40, isCompleted: false, isLocked: false, isFree: true },
      { id: 64, titleKey: 'Mental Math Mastery', duration: 45, isCompleted: false, isLocked: true, isFree: false },
      { id: 65, titleKey: 'Advanced Division', duration: 50, isCompleted: false, isLocked: true, isFree: false },
      { id: 66, titleKey: 'Decimal Operations', duration: 48, isCompleted: false, isLocked: true, isFree: false },
      { id: 67, titleKey: 'Fraction Calculations', duration: 52, isCompleted: false, isLocked: true, isFree: false },
      { id: 68, titleKey: 'Speed Championships', duration: 60, isCompleted: false, isLocked: true, isFree: false },
      { id: 69, titleKey: 'Competition Preparation', duration: 55, isCompleted: false, isLocked: true, isFree: false },
      { id: 70, titleKey: 'Advanced Problem Solving', duration: 50, isCompleted: false, isLocked: true, isFree: false },
      { id: 71, titleKey: 'Real-World Applications', duration: 48, isCompleted: false, isLocked: true, isFree: false },
      { id: 72, titleKey: 'Teaching Others', duration: 45, isCompleted: false, isLocked: true, isFree: false },
      { id: 73, titleKey: 'Master Practice Session', duration: 65, isCompleted: false, isLocked: true, isFree: false },
      { id: 74, titleKey: 'Master Assessment', duration: 45, isCompleted: false, isLocked: true, isFree: false },
    ]
  }
];