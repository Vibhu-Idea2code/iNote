const express = require("express");

const { noteController } = require("../../controllers");
const auth = require("../../middlewares/auth");

const router = express.Router();

// create user
router.post(
  "/create-note",
  noteController.createNote
);

// get user list
router.get("/list",auth(), noteController.getNoteList);

/**get user list by id */
router.get("/note-id/:noteId", noteController.getNoteId);

/**delete user  */
router.delete("/delete/:noteId", noteController.deleteNote);

router.put("/update-note/:noteId",noteController.updateNote);
module.exports = router;