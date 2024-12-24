const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

app.use(express.json());

router.get("/api/v1/hello", (req, res) => {
  res.json({ message: `Hello World` });
});

router.post("/api/v1/hello", (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello ${name}` });
});

app.use("/.netlify/functions/hello", router);

module.exports.handler = serverless(app);
