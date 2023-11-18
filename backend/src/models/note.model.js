const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tag: {
      type: String,
      default: "General",
    },
    date: {
      type: String,
      default: Date.now,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// userSchema.pre("save", async function (next) {
//   const user = this;

//   if (user.isModified("password")) {
//     user.password = bcrypt.hash(user.password, 8);
//   }
//   next();
// });

const Note = mongoose.model("note", noteSchema);
module.exports = Note;
