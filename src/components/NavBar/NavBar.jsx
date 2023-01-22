import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

const NavBar = () => {
   return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
               <NavLink to="/">Clandestinas Ezeiza</NavLink>
               <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/calcos">Calcomanías</NavLink>
                     <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/ropa">Ropa</NavLink>
                     <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/guantes">Guantes</NavLink>
                     <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/cascos">Cascos</NavLink>
                     <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/escape">Escapes</NavLink>
                  </Nav>
                  <Nav>
                     <Link to="/cart" >🛒</Link>
                     <CartWidget />
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}

export default NavBar
