import React from "react";
import './Note.css'
//import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Note(props) {

  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
    return (
      <> 
      <div className="note"  >
           <div><h1>{props.title}</h1></div>
           <div><p>{props.content}</p></div>
           <button onClick={deleteNote} sx={{margin: '100px 0px 0px 250px'}}>deleted</button>
      </div>
      </>
    );
  }
  
  export default Note;


  // <DeleteOutlineIcon   sx={{color:"red"}}/>