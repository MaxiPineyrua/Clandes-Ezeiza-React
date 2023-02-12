import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

const categorias = [
   {id:"categoria1" , name:"Calcomanias" , description:"" , category: "calcos"},
   {id:"categoria2" , name:"Ropa" , description:"" , category: "ropa"},
   {id:"categoria3" , name:"Guantes" , description:"" , category: "guantes"},
   {id:"categoria4" , name:"Cascos" , description:"" , category: "cascos"},
   {id:"categoria5" , name:"Escapes" , description:"" , category: "escape"}
]

const NavBar = () => {
   return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
               <NavLink to="/">Clandestinas Ezeiza</NavLink>
               <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     {categorias.map (categoria => <NavLink className={({ isActive })=> isActive ? 'btn btn-success' : 'btn btn-dark'} to= {`/categoria/${categoria.category}`}>{categoria.name}</NavLink>)}
                     {/* <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/calcos">Calcomanías</NavLink>
                     <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/ropa">Ropa</NavLink>
                     <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/guantes">Guantes</NavLink>
                     <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/cascos">Cascos</NavLink>
                     <NavLink className={({ isActive })=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/escape">Escapes</NavLink> */}
                  </Nav>
                  <Nav>
                     <NavLink to = "/cart">
                        <CartWidget />
                     </NavLink>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}

export default NavBar
