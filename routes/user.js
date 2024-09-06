const { Router } = require("express");
const router = Router();
// const userMiddleware = require("../middleware/user");

const jwt = require("jsonwebtoken");
const { User } = require("../db/db");

// User Routes
router.post("/signup",  async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  const newUser = User.create({ username, password });

  if (!newUser) {
    return res.json({
      msg: "Something is wrong with your Username or Password TryAgain!",
    });
  }

  res.json({ message: "User created successfully" });
});

router.post("/signin", async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, "SunRise@5Not@4");

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
})

module.exports = router;
