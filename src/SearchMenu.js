import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import NewNote from './NewNote'

// TODO: Update <Search> usage after its will be implemented

class SearchMenu extends React.Component {

  constructor(){
    super()

    this.state = {
      clicked: false
    }
  }

isClicked = () => {
  this.setState({
    clicked: !this.state.clicked
  })
}


  render(){
const clicked = this.state.clicked
    return(
      <div>
          <Menu attached='top'>
            <Dropdown item icon='wrench' simple>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {
                    this.props.addNote();
                    this.isClicked()
                    }}>
                  {clicked ? 'Back to Dashboard' : 'New Note'}
                </Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          <h4 style={{paddingLeft: '30px'}}>FLATNOTE</h4>
            <Menu.Menu position='right'>
              <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                  <input
                    onChange={this.props.handleSearch}
                    className='prompt'
                    type='text'
                    placeholder='Search Notes...'
                  />
                  <i className='search link icon' />
                </div>
                <div className='results' />
              </div>
            </Menu.Menu>
          </Menu>
        </div>

    )
  }
  
}

export default SearchMenu
