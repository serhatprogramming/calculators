import { parseArguments } from "./utils";

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

const { value1, value2 } = parseArguments(process.argv);

console.log(calculateBMI(value1, value2));
