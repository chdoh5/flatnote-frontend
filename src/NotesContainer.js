import React from 'react'
import Note from './Note'

import { Table, Segment } from 'semantic-ui-react'



class NotesContainer extends React.Component {

//     render(){
//         return(
// <Segment>
//   <Table className="bigtester" celled selectable  >
//     <Table.Header >
//       <Table.Row className="bigtester">
//         <Table.HeaderCell>Title</Table.HeaderCell>
//         <Table.HeaderCell className="ui celled table test tr th ">Date</Table.HeaderCell>
//         <Table.HeaderCell>Note</Table.HeaderCell>
//       </Table.Row>
//     </Table.Header>
//     <Table.Body>
//       <Table.Row>

//       </Table.Row>
//     </Table.Body>
//   </Table>
//   </Segment>
//         )
//     })

render(){
    

    return(
        <Table className="bigtester" celled selectable  >
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        </Table>

    )
}
    
}

export default NotesContainer