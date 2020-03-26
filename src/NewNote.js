import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class NewNote extends React.Component { 

    constructor(){
        super()

        this.state = {
            titleInput: "",
            contentInput: "",
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }

    handleContentChange = (e) => {
        this.setState({
            contentInput: e.target.value
        })
    }

    handleNewSubmit = (e) => {
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: this.state.titleInput,
                content: this.state.contentInput,
                user_id: this.props.user.id
            })
        }
        e.preventDefault()
        fetch('http://localhost:3000/notes', reqObj)
            .then(resp => resp.json())
            .then(newNote => this.props.addNote(newNote))  
    }


    render(){

        return(
            <div>
                <form onSubmit={this.handleNewSubmit}>
                    <label>Title:</label><br></br>
                    <input onChange={this.handleTitleChange} type="text"></input><br></br>
                    <label>Content:</label><br></br>
                    <textarea onChange={this.handleContentChange} rows='5'></textarea><br></br>
                    <input class="submit" type="submit" value="Add New Note" />
                    {/* <label>Tags:</label><br></br>
                    <input type="text"></input> */}
                </form>
              
            </div>
        )
    }


}


export default NewNote







// <Modal trigger={this.props.h}>
//     <Modal.Header>Select a Photo</Modal.Header>
//     <Modal.Content image>
//       <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
//       <Modal.Description>
//         <Header>Default Profile Image</Header>
//         <p>
//           We've found the following gravatar image associated with your e-mail
//           address.
//         </p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )