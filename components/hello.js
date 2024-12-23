const { Router } = require("express");
const router = Router();

router.get("/api/v1/hello", (req, res) => {
  res.json({ message: `Hello World` });
});

router.post("/api/v1/hello", (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello ${name}` });
});

module.exports = router;
