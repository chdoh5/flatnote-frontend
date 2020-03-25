import React from 'react'
import { Container, Header } from 'semantic-ui-react'


class ShowNote extends React.Component {

  renderTags = () => {
    if(this.props.showNote.tags)
      return this.props.showNote.tags.map(tag => {
        return <h5>#{tag.name}</h5>
    })
  }
  
  renderNote = () => {
    if(this.props.showNote.title){
      return <div ><Header style={{paddingLeft:'0px'}} id="show-note-title" as='h2'>{this.props.showNote.title}</Header>
      <p >{this.props.showNote.content}</p>
      <h3>Tags:</h3>
      <div>{this.renderTags()}</div>
      </div>
    } else{
      return <h1 style={{textAlign:'left'}} id="show-note-title">Welcome to Flatnote!</h1>
    }

  }

  render(){
   
    return(
<Container >

    {this.renderNote()}
  </Container>


    )
  }

  
}

export default ShowNote