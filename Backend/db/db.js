const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
   password: String,
   purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
   }]
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
