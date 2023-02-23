import { useState } from "react";
import uuid from "react-uuid";
import Side from "./Side";
import Main from "./Main";



function App() 
{
  const [noteList, setNoteList] = useState([]);

  function addNote()
  {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: " ",
      lastModified: Date.now()
    };
    console.log(newNote);

    setNoteList([newNote, ...noteList]);

  };  

  function deleteNote(deleteId)
  {
    setNoteList(noteList.filter((note) => note.id != deleteId));
  }

  return (
    <>
      <div id="top">
        <div id="title">Lotion</div>
        <div id="subTitle">Like Notion, but worse.</div>
        <div id="icon">
          <button id="enableSide">&#9776;</button>
        </div>
      </div>
      <div id="middle">
        <Side noteList={noteList} addNote={addNote}></Side>
        <Main noteList={noteList} deleteNote={deleteNote}></Main>
      </div>
    </>
  );
}

export default App;
