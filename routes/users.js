const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("Test is successful");
});

router.post("/userpost", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send(`Username is ${username}`);
});

module.exports = router;
