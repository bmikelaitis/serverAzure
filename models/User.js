const mongoose = require("mongoose");
//const Schema = mongoose.Schema; same as below
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true },
  googleId: String,
  firstName: String,
  lastName: String,
});

mongoose.model("users", userSchema);
