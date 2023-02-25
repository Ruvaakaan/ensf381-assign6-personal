import { useState } from "react";
import uuid from "react-uuid";
import Side from "./Side";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() 
{
  const [noteList, setNoteList] = useState([]);
  const [currentNote, setCurrentNote] = useState(false);
  const [newNoteAdded, setnewNoteAdded] = useState(false);

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
    setnewNoteAdded(true);

  };  

  function deleteNote(deleteId)
  {
    const answer = window.confirm("Are you sure you want to delete this note?");
    if(answer) 
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
        {/* <BrowserRouter>
          <Routes>
            <Route path="/users/:userId" element={<User />}></Route>
          </Routes>
        </BrowserRouter> */}
        <Side 
          noteList={noteList} 
          addNote={addNote}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          newNoteAdded={newNoteAdded}
        ></Side>
        <Main 
          noteList={noteList} 
          deleteNote={deleteNote}
          // getCurrentNote={getCurrentNote()}
          saveNote={saveNote}
          newNoteAdded={newNoteAdded}
        ></Main>
      </div>
    </>
  );
}

export default App;
