import React,{ useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
const host="http://localhost:5500"      
const notesInitial= [];
	const [notes, setNotes] = useState(notesInitial)

	// get note mate function
	const getNotes= async()=>{
		// api call
		const response = await fetch(`${host}/v1/note/list`, {
			method: "GET", 
			mode: "cors", 
			headers: {
			  "Content-Type": "application/json",
			  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZGhlMTEwQGdtYWlsLmNvbSIsImV4cCI6MTcwMDU2ODUxOCwiaWF0IjoxNzAwNDgyMTE4fQ.aIgR6vFZSymaaAOnUdjp6G8PpxzLtjrDlqWlPPX1GMg"
			},
			// body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
		  });
		const json= await response.json(); // parses JSON response into native JavaScript objects
		console.log('get',json.data);
		// const notesArray = Array.isArray(json) ? json : [];	
		// console.log('get', notesArray);
		setNotes(json.data);
		}

	// add note mate function
const addNote=async(title,description,tag)=>{
// api call
const response = await fetch(`${host}/v1/note/create-note`, {
    method: "POST", 
    // mode: "cors", 
    headers: {
      "Content-Type": "application/json",
	  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZGhlMTEwQGdtYWlsLmNvbSIsImV4cCI6MTcwMDU2ODUxOCwiaWF0IjoxNzAwNDgyMTE4fQ.aIgR6vFZSymaaAOnUdjp6G8PpxzLtjrDlqWlPPX1GMg"
    },
    body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
  });
  const note = await response.json();
    setNotes(notes.concat(note))
}
// delete note
const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/v1/note/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
		"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZGhlMTEwQGdtYWlsLmNvbSIsImV4cCI6MTcwMDU2ODUxOCwiaWF0IjoxNzAwNDgyMTE4fQ.aIgR6vFZSymaaAOnUdjp6G8PpxzLtjrDlqWlPPX1GMg"
      }
    });
    const json = response.json(); 
	console.log(json)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }	
// edit note
const editNote=async (id,title,description,tag)=>{
// api call
const response = await fetch(`${host}/v1/note/update-note/${id}`, {
    method: "PUT", 
    // mode: "cors", 
    headers: {
      "Content-Type": "application/json",
	  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZGhlMTEwQGdtYWlsLmNvbSIsImV4cCI6MTcwMDU2ODUxOCwiaWF0IjoxNzAwNDgyMTE4fQ.aIgR6vFZSymaaAOnUdjp6G8PpxzLtjrDlqWlPPX1GMg"
    },
    body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
  });
const json=await response.json(); // parses JSON response into native JavaScript objects
console.log('edited',json);
let newNotes = JSON.parse(JSON.stringify(notes))
	// logic to edit in client
for (let index = 0; index < newNotes.length; index++) {
	const element = newNotes[index];
	if(element._id===id){
		newNotes[index].title=title;
		newNotes[index].description=description;
		newNotes[index].tag=tag;
		break;
}
}
setNotes(newNotes)
}
  return (
    <noteContext.Provider value={{ notes,addNote,deleteNote,editNote,getNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
