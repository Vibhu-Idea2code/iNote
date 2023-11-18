const { Note } = require("../models");

const createNote = async (reqBody) => {
  return Note.create(reqBody);
};

const getNoteList = async (req, res) => {
  return Note.find();
};

const getNoteId = async (noteId) => {
  return Note.findById(noteId);
};

const deleteNoteId = async (noteId) => {
  return Note.findByIdAndDelete(noteId);
};

const updateNote = async (noteId, updateBody) => {
  return await Note.findByIdAndUpdate(
    noteId,
    { $set: updateBody },
    { new: true }
  );
};
module.exports = {
    createNote,
    getNoteList,
    getNoteId,
    deleteNoteId,
    updateNote,
};