import React from 'react';
import './App.css';
import SearchMenu from './SearchMenu'
import NotesContainer from './NotesContainer'
import ShowNote from './ShowNote'

function App() {
  return (
    <div >
    <div><SearchMenu /></div>
     <div><NotesContainer  /></div>
     <div><ShowNote /></div>
    </div>
  );
}

export default App;


