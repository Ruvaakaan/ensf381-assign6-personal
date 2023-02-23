import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Main() {
  const [title, setTitle] = useState('Untitled');
  const [content, setContent] = useState('');
  const [noteList, setNoteList] = useState([]);

  const saveNote = () => {
    const newNote = {
      title,
      content,
      date: new Date(),
    };
    setNoteList([...noteList, newNote]);
    setTitle('Untitled');
    setContent('');
  };

  const deleteNote = () => {
    setTitle('Untitled');
    setContent('');
  };

  return (
    <>
      {noteList.length === 0 ? (
        <div id="mainBox">
          Select a note, or create a new one.
        </div>
      ) : (
        <div id="mainBox">
          <div id="noteHeader">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              <button onClick={saveNote}>Save</button>
              <button onClick={deleteNote}>Delete</button>
            </div>
            <div>{new Date().toLocaleString()}</div>
          </div>
          <div id="noteEditor">
            <ReactQuill value={content} onChange={setContent} />
          </div>
          <div id="noteFooter">{content}</div>
        </div>
      )}
    </>
  );
}

export default Main;
