import express from "express";
const app = express();

import { calculateBMI } from "./utils";

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const obj = {
    height: req.query.height,
    weight: req.query.weight,
    bmi: calculateBMI(Number(req.query.height), Number(req.query.weight)),
  };
  res.send(obj);
});

app.listen(3003, () => console.log(`Server is listening on port 3003`));
