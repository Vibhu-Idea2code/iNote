import React,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {
  const context = useContext(noteContext);
  const {notes,getNotes}=context;
  useEffect(() => {
    getNotes();
     // eslint-disable-next-line
  },[]) 
  return (
    <>
      <AddNote/>
      <div className="row my-3">
        <h1>Your notes</h1>
        {notes.map((note)=>{
          return <NoteItem key={note._id} note={note}/>
        
        })}
        {/* console.log(notes) */}
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
    </>
  )
}

export default Notes

