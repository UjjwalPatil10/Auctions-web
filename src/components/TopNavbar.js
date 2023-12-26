import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';


 function TopNavbar() {
  return (
    <div>
     <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" >
        Option 3
        </Nav.Link>
      </Nav.Item>
      <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Hello there!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </Nav>
    </div>
  )
}

export default TopNavbar;