import { useState } from "react";
import uuid from "react";

function Side({noteList, addNote}) {

  const [hovered, setHovered] = useState(false);
  
  return (
    <>
      <div id="sideBox">
        <div id="sideTitle">
          &nbsp;Notes
          <button 
            onClick={addNote}
            id="addNote"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style=
            {{ 
              backgroundColor: hovered ? "#423C52" : "", 
              color: hovered ? "white" : "black"
            }}
          >+</button>
        </div>
        
          {noteList.map((note) => (
            <div id="sideData" key={note.id}>
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