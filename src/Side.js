import { useEffect, useState } from "react";
import uuid from "react";
import { useParams } from "react-router-dom";

function Side({noteList, addNote, currentNote, setCurrentNote, newNoteAdded}) 
{
  const {noteId} = useParams();

  useEffect(() => {
    const index = Number(noteId) - 1;
    if(index >= 0)
    {
      setCurrentNote(noteList[index].id)
    }

  }, [setCurrentNote, noteList, useParams])

  if (!newNoteAdded || noteList.length == 0) {
    return (

      <div id="sideBox">
        <div id="sideTitle">
          &nbsp;Notes
          <button 
            onClick={addNote}
            id="addNote"
          >+</button>
        </div>
        <div id="sideNoteMessage">No Note Yet.</div>
      </div>

    );
  }
  
  return (
    <>
      <div id="sideBox">
        <div id="sideTitle">
          &nbsp;Notes
          <button 
            onClick={addNote}
            id="addNote"
          >+</button>
        </div>
        
          {noteList.map((note) => (
            <div
              key = {note.id}
              className={`sideData ${note.id == currentNote && "active"}`}
              onClick={() => {setCurrentNote(note.id)}}>
              <div id="noteTitle">{note.title}</div>
              <div id="lastModified">{new Date(note.lastModified).toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}
              </div>
              <div id="noteBody">{note.body.substr(0, 100) + "..."}</div>
            </div>
          ))}
      </div>
    </>
  )

}

export default Side;