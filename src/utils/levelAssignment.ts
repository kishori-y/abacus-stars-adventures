export type StandardLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface StudentInfo {
  standard: StandardLevel;
  age: number;
}

// Standard-based level assignment logic
export const getRecommendedLevel = (standard: StandardLevel): number => {
  switch (standard) {
    case 1:
    case 2:
      return 1; // Start from Level 1
    case 3:
      return 2; // Start from Level 2
    case 4:
    case 5:
      return 3; // Start from Level 3
    case 6:
    case 7:
    case 8:
    case 9:
      return 4; // Start from Level 4
    default:
      return 1; // Fallback to Level 1
  }
};

// Check if user can access a specific level
export const canAccessLevel = (
  targetLevel: number, 
  completedLevels: number[], 
  studentStandard?: StandardLevel
): boolean => {
  // Check if user has completed previous level
  if (targetLevel > 1) {
    const previousLevel = targetLevel - 1;
    if (!completedLevels.includes(previousLevel)) {
      return false;
    }
  }

  // For first-time users, check standard-based recommendation
  if (studentStandard && completedLevels.length === 0) {
    const recommendedLevel = getRecommendedLevel(studentStandard);
    return targetLevel <= recommendedLevel;
  }

  return true;
};

// Check if user can access next lesson in a level
export const canAccessLesson = (
  lessonIndex: number,
  completedLessons: number[],
  isEnrolled: boolean,
  isFree: boolean
): boolean => {
  // Always allow access to first lesson if free
  if (lessonIndex === 0 && isFree) return true;
  
  // Check if enrolled or lesson is free
  if (!isEnrolled && !isFree) return false;
  
  // Check if previous lesson is completed (for non-first lessons)
  if (lessonIndex > 0) {
    const previousLessonIndex = lessonIndex - 1;
    if (!completedLessons.includes(previousLessonIndex)) {
      return false;
    }
  }
  
  return true;
};