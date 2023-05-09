interface ExerciseStats {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  exercises: number[],
  target: number
): ExerciseStats => {
  const trainingDays = exercises.filter((number) => number !== 0).length;
  const totalHours = exercises.reduce((a, b) => a + b);

  let rating = 2;
  let ratingDescription = "just reached your target, keep up the good work!";

  if (target > totalHours / exercises.length) {
    rating = 1;
    ratingDescription = "not too bad but could be better";
  } else if (target < totalHours / exercises.length) {
    rating = 3;
    ratingDescription = "you rock!";
  }

  return {
    periodLength: exercises.length,
    trainingDays,
    success: target <= totalHours / exercises.length,
    rating,
    ratingDescription,
    target,
    average: totalHours / exercises.length,
  };
};

console.log(calculateExercises([4, 1, 2, 6, 0], 2));
