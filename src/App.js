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
      showNote: {}
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/notes')
      .then(resp => resp.json())
      .then(notesData => this.setState({
        notes: notesData
      }))
  }

  handleClick = (note) => {
    this.setState({
      showNote: note
    })
  }

  render() {

    return (
      <div >
      <div><SearchMenu /></div>
      <div><NotesContainer handleClick={this.handleClick} notes={this.state.notes} /></div>
      <div><ShowNote showNote={this.state.showNote} /></div>
      </div>
    )
  }
}

export default App;


