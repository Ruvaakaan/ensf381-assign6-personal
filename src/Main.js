import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaCalendarAlt } from 'react-icons/fa';


function Main({noteList, saveNote, deleteNote, newNoteAdded, style, enableSide, getCurrentNote})
{

  const [noteContent, setNoteContent] = useState('');
  const [date, setDate] = useState(new Date());

  const handleChange = (value) => {
    setNoteContent(value);
  };

  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };

  if (!newNoteAdded || noteList.length == 0) {
    return (
      <div id="mainBox" style={enableSide ? style : {width: '100%'}}>
        <div id="mainNoteMessage">Select a note, or create a new one.</div>
      </div>
    );
  }


  return (
    <>
        <div id="mainBox" style={enableSide ? style : {width: '100%'}}>
            <div id="noteTop">
              <div id="leftTop">
                <input type="text" id="noteTopText" placeholder="Untitled" autoFocus></input>
                <div id="currentDate">{date.toLocaleString("en-US", {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                  }).replaceAll("/", "-")}
                  <button id="calendarButton">
                    <FaCalendarAlt></FaCalendarAlt>
                    <input
                      type="datetime-local"
                      id="calendarInput"
                      step="1"
                      onChange={handleDateChange}
                    ></input>
                  </button>
                </div>
              </div>


              <div id="rightTop">
                <button
                  onClick={saveNote}
                  id="saveNote"
                >Save</button>
               
                <button
                  onClick={() => deleteNote(getCurrentNote().id)}
                  id="deleteNote"
                >Delete</button>
              </div>
            </div>
             
            <div id="noteEdit">
              <ReactQuill
                placeholder="Write your note here..."
                value={noteContent}
                onChange={handleChange}
              ></ReactQuill>
            </div>
        </div>
    </>
  );
}


export default Main;





