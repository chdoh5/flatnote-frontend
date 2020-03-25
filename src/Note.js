import React from 'react'
import {Table, Row, Segment } from 'semantic-ui-react'

class Note extends React.Component {


    render() {

        const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
        const date = new Date(this.props.note.created_at).toLocaleDateString('en-US', DATE_OPTIONS)

        return(



            <Table.Body>
            <Table.Row>
              <Table.Cell id="first">{this.props.note.title}</Table.Cell>
              <Table.Cell id="second" >{date}</Table.Cell>
              <Table.Cell id="third">{this.props.note.content}</Table.Cell>
            </Table.Row>
          </Table.Body>
        )
    }
  

}

export default Note