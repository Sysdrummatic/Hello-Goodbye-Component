const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: `Hello World` });
});
router.post("/", (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello ${name}` });
});

module.exports = router;
