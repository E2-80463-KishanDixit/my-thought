import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


function App() {

  const [addItem,setAddIteam] = useState([]);

  const addNote=(note)=>{
    // alert('i am clicked');
    setAddIteam((preVal)=>{
      return [...preVal,note]
    })

    console.log(note);
  }


  const onDelete=(id)=>{
    console.log("i am deleted")
    setAddIteam((oldData)=>{
      oldData.filter((currValue,index)=>{
         return index !== id;
      })
    });
  };

  return (
    <>
    <Header/>
    <CreateNote passNote ={addNote}/>
    

    {addItem.map((val,index)=>{
      return <Note 
      key={index}
      id={index} 
      title={val.title} 
      content = {val.content}
      deleteItem = {onDelete} 
      />   
    })}



    <Footer/>
    </>
  );
}

export default App;
