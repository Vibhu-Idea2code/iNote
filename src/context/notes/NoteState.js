import React from "react";
import noteContext from "../noteContext";
import { useState } from "react";

const NoteState = (props) => {
//   const s1 = {
//     note: "radhe",
//     class: "5b",
//   };
//   const [state, setstate] = useState(s1);
//   const update = () => {
//     // setstate({...state});
//     setTimeout(() => {
//       setstate({
//         note: "krishana",
//         class: "50b",
//       });
//     }, 1000);
//   };
const notesInitial=
	 [
		{
			"_id": "6558675f58eb0736850f6b7c",
			"title": "gita",
			"description": "description of god",
			"tag": "importnat",
			"is_active": true,
			"date": "1700292447248",
			"createdAt": "2023-11-18T07:27:27.252Z",
			"updatedAt": "2023-11-18T07:27:27.252Z"
		},
		{
			"_id": "6558676658eb0736850f6b80",
			"title": "gita",
			"description": "description of god",
			"tag": "importnat",
			"is_active": true,
			"date": "1700292454141",
			"createdAt": "2023-11-18T07:27:34.144Z",
			"updatedAt": "2023-11-18T07:27:34.144Z"
		},
		{
			"_id": "6558676658eb0736850f6b82",
			"title": "gita",
			"description": "description of gods",
			"tag": "importnat",
			"is_active": true,
			"date": "1700292454861",
			"createdAt": "2023-11-18T07:27:34.862Z",
			"updatedAt": "2023-11-18T07:29:24.822Z"
		}
	]
	const [notes, setNotes] = useState(notesInitial)
	// add note mate function
const addNote=(title,description,tag)=>{
	// todo api call
const note={
	"_id": "6558676658erb0736850f6b82",
	"title": title,
	"description": description,
	"tag": tag,
	"is_active": true,
	"date": "1700292454861",
	"createdAt": "2023-11-18T07:27:34.862Z",
	"updatedAt": "2023-11-18T07:29:24.822Z"
};
setNotes(notes.concat(note))
}
// delete note
const deleteNote=()=>{

}
// edit note
const editNote=()=>{

}
  return (
    <noteContext.Provider value={{ notes,addNote,deleteNote,editNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
