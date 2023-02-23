import { useState } from "react";

function Side() {
  const [hovered, setHovered] = useState(false);
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = { title: "Untitled", date: new Date(), content: "" };
    setNotes([...notes, newNote]);
  };
  
  return (
    <>
      <div id="sideBox">
        <div id="sideTitle">
          &nbsp;&nbsp;Notes
          <button 
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
        {/* <div id="sideData">
          {notes.map((note, index) => (
            <div key={index}>
              <div>{note.title}</div>
              <div>{note.date.toLocaleDateString()}</div>
              <div>{note.content}</div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  )

}

export default Side;