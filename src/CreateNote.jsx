import React, { useState } from 'react';
import './CreateNote.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



function CreateNote(props) {

  const [note, setNote] = useState({
    title:'',
    content:''
  });

  const InputEvent=(event)=>{

  // const value = event.target.value;
  // const name = event.target.name;

  const{name,value} = event.target; 

       setNote((preVal)=>{
            return {
              ...preVal,
              [name]:value,
            }
       });
       console.log(note);
  }


  const addEvent=()=>{
         props.passNote(note);
         setNote({
          title:'',
          content:''
         })
  }

    return (
      <>
      <div className='main_note'>
         <form>
         <input onChange={InputEvent} type='text'  name='title'  value={note.title}  placeholder='Title'  autoComplete='off'  />
         <textarea onChange={InputEvent} rows=""  column="" name='content'  value={note.content}  placeholder='Write a note...'/>
         <Button  onClick={addEvent}  variant="contained"  sx={{ 
                        backgroundColor:"white",
                        boxShadow:"5px 8px 10px #888888",
                        borderRadius: "50%" ,
                        height:"50px",
                        width:"15px",
                        margin: "0 0 0 94%"
                        }}>
                  <AddIcon  sx={{color:"hsl(186, 80%, 17%)"}}/>
                  </Button>
         </form>
      </div>
       
      </>
    );
  }
  
  export default CreateNote;


