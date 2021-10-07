import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./Components/NotesList";
import Search from './Components/Search';
import Header from './Components/Header';

const App = () => {
  const [notes, setNotes] = useState([{
      id: nanoid(),
      text: "Welcome to my notes app!",
      date: "09/23/2021"
    },
    {
      id: nanoid(),
      text: "Feel free to add/remove as many notes as you'd like.",
      date: "09/26/2021"
    },
    {
      id: nanoid(),
      text: "Can't find the note you're looking for? Use the search bar to locate the note you're looking for.",
      date: "09/28/2021"
    },
    {
      id: nanoid(),
      text: "Don't forget to try out the dark mode by clicking the Toggle Mode button.",
      date: "10/01/2021"
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if(savedNotes){
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;