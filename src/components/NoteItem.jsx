import React from 'react'

const NoteItem = (props) => {
    const {note}=props;
  return (
    <div className='col-md-3'>
      <div class="card my-3" style={{width: "18rem;"}}>
  <div class="card-body">
    <div className="d-flex align-items-centre">
    <h5 class="card-title"> {note.title}</h5>
    <i class="fa-solid fa-trash mx-2"></i>
    <i class="fa-solid fa-pen-to-square mx-2"></i>
    </div>
    <p class="card-text"> {note.description}</p>

  
  </div>
</div>
    </div>
  )
}

export default NoteItem
