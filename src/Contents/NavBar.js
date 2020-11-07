import React from 'react'
import '../css/NavBar.css'
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {

    return(
      <div className='nav-container'>
<   Navbar bg="dark" expand="lg" variant="dark" fixed>
    <Navbar.Brand as={NavLink} to='/'>SHERLOCK</Navbar.Brand>
   
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
          <Nav.Link as={NavLink} to='/create-an-account'>Create AN Account</Nav.Link>
          <Nav.Link as={NavLink} to='/sign-in'>Sign in</Nav.Link>
          <Nav.Link as={NavLink} to='/contact-me'>Contact</Nav.Link>
        </Nav>
    </Navbar>
        
      </div>
 
    )
}

export default NavBar