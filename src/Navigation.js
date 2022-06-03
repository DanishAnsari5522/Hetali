import React from 'react'
import {Container,Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'
import './Navigation.css'

function Navigation()
{
    return(
        <div>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto ml-10 my-2 my-lg-0 w-100"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink exact to="/" activeClassName="menu_active" className="dan">Home</NavLink>
        <NavLink exact to="/about" activeClassName="menu_active" className="dan">About</NavLink>
        <NavLink exact to="/contact" activeClassName="menu_active" className="dan">Contact</NavLink>
        <NavLink exact to="/services" activeClassName="menu_active" className="dan">Service</NavLink>
      </Nav>
    
       
 
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navigation