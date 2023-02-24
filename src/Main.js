import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Main({noteList, saveNote, deleteNote}) {

  const [noteContent, setNoteContent] = useState('');

  const handleChange = (value) => {
    setNoteContent(value);
  };

  return (
    <>
      {noteList.map((note) => (
        <div id="mainBox">
            <div id="noteTop">
              <div id="leftTop">
                <input type="text" id="noteTopText" placeholder="Untitled" autoFocus></input>
                <div id="currentDate">{new Date(note.lastModified).toLocaleString("en-US", {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                  }).replaceAll("/", "-")}
                </div>
              </div>


              <div id="rightTop">
                <button 
                onClick={saveNote}
                id="saveNote"
                >Save</button>
                
                <button 
                onClick={() => deleteNote(note.id)}
                id="deleteNote"
                >Delete</button>
              </div>
            </div>
              
            <div id="noteEdit">
              <ReactQuill placeholder="Write your note here..." value={noteContent} onChange={handleChange} />
            </div>
        </div>

      ))}
    </>
  );
}

export default Main;
