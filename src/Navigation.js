import React from 'react'
import {Container,Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'
import './Navigation.css'

function Navigation()
{
    return(
        <div class="nav_bar">
<Navbar bg="light" expand="lg" >
  <Container fluid>
    <Navbar.Brand href="#">HETALI</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto ml-10 my-2 my-lg-0 w-100"
        style={{ maxHeight: '100%' }}
        navbarScroll
      >
        
        <NavLink exact to="/" activeClassName="menu_active" className="dan nav_item">ABOUT US<div class="bottom_border"></div></NavLink>
        <NavLink exact to="/project" activeClassName="menu_active" className="dan">PROJECTS<div class="bottom_border"></div></NavLink>
        <NavLink exact to="/diversification" activeClassName="menu_active" className="dan">DIVERSIFICATION<div class="bottom_border"></div></NavLink>
        <NavLink exact to="/process" activeClassName="menu_active" className="dan">OUR PROCESS<div class="bottom_border"></div></NavLink>
        <NavLink exact to="/testimonials" activeClassName="menu_active" className="dan">TESTIMONIALS<div class="bottom_border"></div></NavLink>
        <NavLink exact to="/careers" activeClassName="menu_active" className="dan">CAREERS<div class="bottom_border"></div></NavLink>
        <NavLink exact to="/contact" activeClassName="menu_active" className="dan">CONTACT US<div class="bottom_border"></div></NavLink>
      </Nav>
    
       
 
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navigation