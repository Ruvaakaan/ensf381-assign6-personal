import { useState } from "react";
import uuid from "react-uuid";
import Side from "./Side";
import Main from "./Main";



function App() 
{
  const [noteList, setNoteList] = useState([]);
  const [currentNote, setCurrentNote] = useState(false);

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
    const answer = window.confirm("Are you sure you want to delete this note?");
    if (answer) 
    {
    setNoteList(noteList.filter((note) => note.id != deleteId));
    }
  }

  // function getCurrentNote() 
  // {
  //   return noteList.find((note) => note.id == currentNote);
  // }

  function saveNote() 
  {
    return;
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
        <Side 
          noteList={noteList} 
          addNote={addNote}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
        ></Side>
        <Main 
          noteList={noteList} 
          deleteNote={deleteNote}
          // getCurrentNote={getCurrentNote()}
          saveNote={saveNote}
        ></Main>
      </div>
    </>
  );
}

export default App;
