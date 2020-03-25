import React from 'react';
import './App.css';
import SearchMenu from './SearchMenu'
import NotesContainer from './NotesContainer'
import ShowNote from './ShowNote'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      notes: [],
      filtered: [],
      showNote: {}
    }
  }

  componentDidMount(){
    
    fetch('http://localhost:3000/notes')
      .then(resp => resp.json())
      .then(notesData => this.setState({
        notes: notesData, 
        filtered: notesData,
      }))
  }

  handleClick = (note) => {
    this.setState({
      showNote: note
    })
  }


handleSearch = (e) => {
  console.log(e.target.value)
  const newNotes = this.state.notes.filter(note => {
     return note.title.includes(e.target.value) || 
     note.content.includes(e.target.value) || 
     note.tags.filter(tag => tag.name.includes(e.target.value)).length > 0
  })

  this.setState({
    filtered: newNotes
  })
}

  render() {
  
   
    return (
      <div >
      <div><SearchMenu handleSearch={this.handleSearch}/></div>
      <div><NotesContainer handleClick={this.handleClick} notes={this.state.filtered} /></div>
      <div><ShowNote showNote={this.state.showNote} /></div>
      </div>
    )
  }
}

export default App;


