import React from 'react';
import './App.css';



const Note = (props) => (
    <div className="notes">
       {props.note.text}
    </div>
)
export default Note;