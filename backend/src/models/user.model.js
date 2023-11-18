const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require:true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    date:{
type:String,
default:Date.now
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    token:{
type:String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified || !this.isNew) {
    next();
  } else this.isModified("password");
  // if (this.password)
    // this.password = await bcrypt.hash(String(this.password), 12);
  // next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;