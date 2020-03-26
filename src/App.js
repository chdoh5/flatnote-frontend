import React from 'react';
import './App.css';
import SearchMenu from './SearchMenu'
import NotesContainer from './NotesContainer'
import ShowNote from './ShowNote'
import Login from './Login'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      notes: [],
      filtered: [],
      showNote: {}, 
      loginInput: '',
      user: {}, 
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

  // saveEdit = () => {
  //   const reqObj = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.state.editPizza)
  //   }

  //   fetch(`http://localhost:3000/pizzas/${this.state.editPizza.id}`, reqObj)
  //     .then(resp => resp.json())
  //     .then(updatedPizza => {
  //       // map over this.state.pizzas and swap out the editpizza that just got updated
  //       const newPizzas = this.state.pizzas.map(pizza => {
  //         if (pizza.id === updatedPizza.id) {
  //           return updatedPizza
  //         } else {
  //           return pizza
  //         }
  //       })

  //       this.setState({
  //         pizzas: newPizzas
  //       })

  //     })
  // }


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

  render() {
    if(!this.state.user.id){
      return(
        <div>
          <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
      )
    } else {

      return (
        <div >
        <div><SearchMenu handleSearch={this.handleSearch}/></div>
        <div><NotesContainer handleClick={this.handleClick} notes={this.state.filtered} user={this.state.user} /></div>
        <div><ShowNote showNote={this.state.showNote} /></div>
        </div>
      )

    }
   
    
  }
}

export default App;


