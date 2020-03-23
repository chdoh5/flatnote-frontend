import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

const SearchMenu = () => (
  <div>
    <Menu attached='top'>
      <Dropdown item icon='wrench' simple>
        <Dropdown.Menu>
          <Dropdown.Item>Open</Dropdown.Item>
          <Dropdown.Item>Save...</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <input
              className='prompt'
              type='text'
              placeholder='Search animals...'
            />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>
{/* 
    <Segment attached='bottom'>
      <img src='https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg' />
    </Segment> */}
  </div>
)

export default SearchMenu
