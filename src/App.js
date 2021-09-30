import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./Components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([{
      id: nanoid(),
      text: "This is my first note!",
      date: "09/26/2021"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "09/23/2021"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "09/22/2021"
    },
  ]);

  const addNote = (text) => {
    console.log(text);
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );
};

export default App;