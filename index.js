const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require("./routes/user");
const { default: mongoose } = require('mongoose');

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/user", userRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://newUserArch:Calli_1%401@cluster0.xrosdky.mongodb.net/courseWebsite').then(() => {
    console.log("MongoDB Connected!")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
