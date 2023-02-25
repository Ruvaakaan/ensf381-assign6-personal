import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from 'react-icons/fa';

function Main({noteList, saveNote, deleteNote, newNoteAdded}) {

  const [noteContent, setNoteContent] = useState('');
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (value) => {
    setNoteContent(value);
  };

  const handleCalendarButtonClick = () => {
    setShowCalendar(!showCalendar);
  }

  if (!newNoteAdded || noteList.length == 0) {
    return (
      <div id="mainBox">
        <div id="mainNoteMessage">Select a note, or create a new one.</div>
      </div>
    );
  }

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
                <button 
                onClick={handleCalendarButtonClick}
                id="calendarButton"
                ><FaCalendarAlt /></button>
              </div>
            </div>
              
            <div id="noteEdit">
              <ReactQuill 
              placeholder="Write your note here..." 
              value={noteContent} 
              onChange={handleChange} />
            </div>

            {showCalendar && 
              <div id="calendarWrapper">
                <Calendar value={date} onChange={setDate} />
              </div>
            }
        </div>

      ))}
    </>
  );
}

export default Main;
