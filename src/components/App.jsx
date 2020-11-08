import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import Notes from "../notes";
import CreateArea from "./CreateArea";

// function createNote(note) {
//   return <Note key={note.key} title={note.title} content={note.content} />;
// }

function App() {
  const [notesList, updateList] = useState([{ title: "Note title", content: "Note Content" },{ title: "Note 2", content: "click the trash can to delete" }]);
  console.log(notesList);
  
  function addNote(note){
    updateList([...notesList,note])
  }

  function deleteNote(id){
    updateList(prevValue=>{
        return prevValue.filter((note,index)=>{
            return index !== id;
        })
      })
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div id="content-wrap">
        {notesList.map((note, index) => {
          return <Note key={index} id={index}title={note.title} content={note.content} deleteNote={deleteNote}/>;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
