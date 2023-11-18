import React,{useContext} from 'react'
import noteContext from '../context/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {
  const context = useContext(noteContext);
  const {notes,addNote}=context;
  return (
    <div>
      <AddNote/>
      <div className="row my-3">
        <h1>Your notes</h1>
        {notes.map((note)=>{
          return <NoteItem key={note._id} note={note}/>
        })}
        {/* {Array.isArray(notes) && notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          ))
        ) : (
          <p>No notes available</p>
        )} */}
    </div>
    </div>
  )
}

export default Notes

