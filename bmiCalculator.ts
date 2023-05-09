const calculateBMI = (height: number, weight: number): string => {
  const bmi = weight / (height * height);
  if (bmi >= 40) {
    return "Very severely or morbidly obese";
  } else if (bmi >= 35) {
    return "Severely obese";
  } else if (bmi >= 30) {
    return "Moderately obese";
  } else if (bmi >= 25) {
    return "Overweight";
  } else if (bmi >= 18.5) {
    return "Healthy weight";
  } else if (bmi >= 16) {
    return "Underweight";
  } else if (bmi >= 15) {
    return "Severly underweight";
  } else {
    return "Very severely underweight";
  }
};

console.log("Your BMI for 160 cm 67 kg is: ", calculateBMI(1.67, 100));
