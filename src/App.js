import React from 'react';
import './App.css';
import SearchMenu from './SearchMenu'
import NotesContainer from './NotesContainer'
import ShowNote from './ShowNote'
import Login from './Login'
import NewNote from './NewNote'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      notes: [],
      filtered: [],
      showNote: {}, 
      loginInput: '',
      user: {}, 
      clicked: false
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



  handleChange = (e) => {
    this.setState({
      loginInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.loginInput
      }) 
    }
    e.preventDefault()
    fetch('http://localhost:3000/users', reqObj)
      .then(resp => resp.json())
      .then(userData => {
        this.setState({
          user: userData
        })
      })
  }


  handleClick = (note) => {
    this.setState({
      showNote: note
    })
  }


handleSearch = (e) => {
  const newNotes = this.state.notes.filter(note => {
     return note.title.includes(e.target.value) || 
     note.content.includes(e.target.value) || 
     note.tags.filter(tag => tag.name.includes(e.target.value)).length > 0
  })

  this.setState({
    filtered: newNotes
  })
}

addNote = (note) => {
  this.setState({
    
    clicked: !this.state.clicked,
    showNote: note,
    filtered: [...this.state.notes, note]
    
  })
  this.setState({
    notes: this.state.notes
  })
  

}

  render() {
    if(!this.state.user.id){
      return(
        <div>
          <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
      )
    } else if(this.state.clicked === true){
      return(
        <div>
          <SearchMenu addNote={this.addNote} />
          <NewNote addNote={this.addNote} user={this.state.user}/>
        </div>
      )
    } else {
      const myNotes = this.state.filtered.filter(note => note.user_id === this.state.user.id)

      return (
        <div >
        <div><SearchMenu addNote={this.addNote} handleSearch={this.handleSearch}/></div>
        <div><NotesContainer handleClick={this.handleClick} notes={this.state.filtered} user={this.state.user} /></div>
        <div><ShowNote showNote={this.state.showNote} /></div>
        </div>
      )

    }
   
    
  }
}

export default App;


