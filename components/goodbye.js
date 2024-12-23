const { Router } = require("express");
const router = Router();

router.get("/api/v1/goodbye", (req, res) => {
  res.json({ message: "Goodbye World" });
});

module.exports = router;
