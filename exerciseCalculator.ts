/* eslint-disable @typescript-eslint/consistent-type-imports */
import { ExerciseStats, parseExerciseArgs } from "./utils";

export const calculateExercises = (
  target: number,
  exercises: number[]
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
// const { target, exercises } = parseExerciseArgs(process.argv);
// console.log(calculateExercises(target, exercises));
