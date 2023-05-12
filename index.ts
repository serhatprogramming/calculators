/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
const app = express();
app.use(express.json());

import { calculateExercises } from "./exerciseCalculator";
import { parseExerciseBody } from "./utils";
import { calculateBMI } from "./utils";

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  if (
    !req.query.height ||
    !req.query.weight ||
    isNaN(Number(req.query.height)) ||
    isNaN(Number(req.query.weight))
  ) {
    res.send({
      error: "malformatted parameters",
    });
  }

  const obj = {
    height: req.query.height,
    weight: req.query.weight,
    bmi: calculateBMI(Number(req.query.height), Number(req.query.weight)),
  };
  res.send(obj);
});

app.post("/exercises", (req, res) => {
  const { target, exercises } = parseExerciseBody(req.body);
  const result = calculateExercises(target, exercises);
  res.send(result);
});

app.listen(3003, () => console.log("Server is listening on port 3003"));
