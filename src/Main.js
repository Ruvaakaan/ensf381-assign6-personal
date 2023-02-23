import { useState } from 'react';
import ReactQuill from 'react-quill';

function Main() {


  return (
    <>
      <div id="mainBox">
        <div id="noteTop">
          <input type="text" id="noteTopText" autoFocus></input>
        </div>
        <div id="noteEdit">edit</div>
        <div id="noteWrite">
          <textarea id="noteWriteText" placeholder="Write your note here..."/>
        </div>
      </div>
    </>
  );
}

export default Main;
