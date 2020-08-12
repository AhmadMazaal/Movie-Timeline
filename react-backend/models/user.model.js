const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: mongoose.SchemaTypes.Email, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    repeatPassword: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
