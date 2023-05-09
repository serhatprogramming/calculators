interface BMIValues {
  value1: number;
  value2: number;
}

export const parseArguments = (args: string[]): BMIValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

interface ExerciseArgs {
  target: number;
  exercises: number[];
}

export const parseExerciseArgs = (args: string[]): ExerciseArgs => {
  const [a, b, target, ...exercises] = process.argv;
  console.log("target: ", target);
  console.log("exercises: ", exercises);
  if (
    isNaN(Number(target)) ||
    exercises.filter((x) => isNaN(Number(x))).length > 0
  ) {
    throw new Error("Provided values were not numbers!");
  }
  return {
    target: Number(target),
    exercises: exercises.map((a) => Number(a)),
  };
};

export interface ExerciseStats {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}
