const { noteService} = require("../services");

const createNote = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody, "++++++user");
    const note = await noteService.createNote(reqBody);
    if (!note) {
      throw new Error("no such note");
    }
    res.status(200).json({
      message: "Successfully created a new note",
      success: true,
      data: { note },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getNoteList = async (req, res) => {
  try {
    let note = await noteService.getNoteList(req, res);
    res.status(200).json({
      message: "successfully fetched all notes",
      status: true,
      data: note,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getNoteId = async (req, res) => {
  try {
    const note = await noteService.getNoteId(req.params.noteId);
    if (!note) {
      throw new Error("No Such note Found!!!");
    }
    res.status(200).json({
      message: `Fetched the details of ${note._id}`,
      data: { note },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const note = await noteService.getNoteId(noteId);
    if (!note) {
        throw new Error("note not found!");
      }
      await noteService.deleteNoteId(noteId);

    res.status(200).json({
      message: "Deleted Successfully",
      data: { note },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const noteEx =await noteService.getNoteId(noteId);
    if (!noteEx) {
      throw new Error("userId does not exist");
    }
    await noteService.updateNote(noteId, req.body);
    res.status(201).json({
      success: true,
      message: "successfully updated",
      data: { noteEx },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { createNote, getNoteList, getNoteId, deleteNote,updateNote };