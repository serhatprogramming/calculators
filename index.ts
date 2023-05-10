import express from "express";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.listen(3003, () => console.log(`Server is listening on port 3003`));
