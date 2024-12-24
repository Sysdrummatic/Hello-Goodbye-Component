const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

app.use(express.json());

router.get("/api/v1/goodbye", (req, res) => {
  res.json({ message: `Goodbye World` });
});

app.use("/.netlify/functions/goodbye", router);

module.exports.handler = serverless(app);
