import React from 'react';
import './App.css';
import SearchMenu from './SearchMenu'
import NotesContainer from './NotesContainer'
import ShowNote from './ShowNote'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/notes')
      .then(resp => resp.json())
      .then(notesData => this.setState({
        notes: notesData
      }))
  }

  render() {

    return (
      <div >
      <div><SearchMenu /></div>
      <div><NotesContainer notes={this.state.notes} /></div>
      <div><ShowNote /></div>
      </div>
    )
  }
}

export default App;


