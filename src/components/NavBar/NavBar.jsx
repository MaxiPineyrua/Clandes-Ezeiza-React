import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
   return (
      <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="#home">Clandes Ezeiza</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#features">Inicio</Nav.Link>
                     <Nav.Link href="#pricing">Juntadas</Nav.Link>
                     <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Cubiertas</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.2">
                           Calcomanías
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ropa</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           Accesorios
                        </NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
                  <Nav>
                     <CartWidget/>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
  )
}

export default NavBar