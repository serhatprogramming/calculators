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
  const [, , target, ...exercises] = args;
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
interface ExerciseBody {
  target: string;
  daily_exercises: string[];
}
export const parseExerciseBody = (body: ExerciseBody): ExerciseArgs => {
  if (
    isNaN(Number(body.target)) ||
    body.daily_exercises.filter((x) => isNaN(Number(x))).length > 0
  ) {
    throw new Error("Provided values were not numbers!");
  }
  return {
    target: Number(body.target),
    exercises: body.daily_exercises.map((a) => Number(a)),
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

export const calculateBMI = (height: number, weight: number): string => {
  const bmi = weight / (((height / 100) * height) / 100);
  if (bmi >= 40) {
    return "Very severely or morbidly obese";
  } else if (bmi >= 35) {
    return "Severely obese";
  } else if (bmi >= 30) {
    return "Moderately obese";
  } else if (bmi >= 25) {
    return "Overweight";
  } else if (bmi >= 18.5) {
    return "Normal (Healthy weight)";
  } else if (bmi >= 16) {
    return "Underweight";
  } else if (bmi >= 15) {
    return "Severly underweight";
  } else {
    return "Very severely underweight";
  }
};
