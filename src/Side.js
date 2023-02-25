import { useState } from "react";
import uuid from "react";

function Side({noteList, addNote, currentNote, setCurrentNote, newNoteAdded}) 
{

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
              className={`sideData ${note.id == currentNote && "active"}`}
              onClick={() => {setCurrentNote(note.id)}}>
              <div id="noteTitle">{note.title}</div>
              {/* need to add function/state that wont show the date until i've saved the note */}
              <div id="lastModified">{new Date(note.lastModified).toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}
              </div>
              <div id="noteBody">{note.body && note.body.substr(0, 100) + "..."}</div>
            </div>
          ))}
      </div>
    </>
  )

}

export default Side;