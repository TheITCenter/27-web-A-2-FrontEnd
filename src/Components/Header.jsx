import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import '../Styles/Header.css'
import logo from '../assets/IconNav.svg'
import car from "../assets/cart.svg";
import Select from './Select';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary imgNav" data-bs-theme="dark" sticky='top'>
      <Container id='header-container'>
        <div id='logoDiv'>
          <NavLink to="/" className="btn">
              <Image src={logo} width={25}  />
          </NavLink>
        </div>
        <div id='navBarDiv'>
          <Nav className="me-auto">
              <NavLink to="/" className="btn btn-success">Inicio</NavLink>
          <Select />


              <NavLink to="/login" className="btn btn-success">Login/Registro</NavLink>
              <NavLink to="/contactanos" className="btn btn-success">Contactanos</NavLink>
              <NavLink to="/carrito" className="btn btn-success">
                <img className="car" src={car} alt="carrito de compras" />
              </NavLink>
          </Nav>
        </div>
          
      </Container>
    </Navbar>
  );
}

export default Header;