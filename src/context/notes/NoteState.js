import React,{ useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
const host="http://localhost:5500";
const notesInitial= [[]];
	const [notes, setNotes] = useState(notesInitial)

	// get note mate function
	const getNotes= async(title,description,tag)=>{
		// api call
		const response = await fetch(`${host}/v1/note/list`, {
			method: "GET", 
			mode: "cors", 
			headers: {
			  "Content-Type": "application/json",
			  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZGhlMTEwQGdtYWlsLmNvbSIsImV4cCI6MTcwMDU0NTc4NSwiaWF0IjoxNzAwNDU5Mzg1fQ.OWFlYrfgczjhaiIxFGewaey1NUzJIZai5zW8rLLRpl4"
			},
			body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
		  });
		const json= await response.json(); // parses JSON response into native JavaScript objects
		console.log('get',json);	
		setNotes(json)
		}

	// add note mate function
const addNote=async(title,description,tag)=>{
// api call
const response = await fetch(`${host}/v1/note/create-note`, {
    method: "POST", 
    // mode: "cors", 
    headers: {
      "Content-Type": "application/json",
	  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZGhlMTEwQGdtYWlsLmNvbSIsImV4cCI6MTcwMDU0NTc4NSwiaWF0IjoxNzAwNDU5Mzg1fQ.OWFlYrfgczjhaiIxFGewaey1NUzJIZai5zW8rLLRpl4"
    },
    body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
  });
  const note = await response.json();
    setNotes(notes.concat(note))
}
// delete note
const deleteNote=async(id)=>{
// console.log("deleting the content",id);
const newNotes=notes.filter((note)=>{return note._id!==id})
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
	  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZGhlMTEwQGdtYWlsLmNvbSIsImV4cCI6MTcwMDU0NTc4NSwiaWF0IjoxNzAwNDU5Mzg1fQ.OWFlYrfgczjhaiIxFGewaey1NUzJIZai5zW8rLLRpl4"
    },
    body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
  });
const json= response.json(); // parses JSON response into native JavaScript objects
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
