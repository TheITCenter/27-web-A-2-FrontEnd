import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import '../Styles/Header.css'
import logo from '../assets/IconNav.svg'
import Searcher from './Searcher';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary imgNav" data-bs-theme="dark" sticky='top'>
      <Container id='header-container'>
        <div id='logoDiv'>
          <NavLink to="/" className="btn">
              <Image src={logo} width={25}  />
          </NavLink>
        </div>
        <div className="Search_bar">
          <input type="text" name="Searcher" id='Searcher'  placeholder='¿Qué juego quieres buscar...?' />
        </div>
        <div id='navBarDiv'>
          <Nav className="me-auto">
              <NavLink to="/" className="btn btn-success">Inicio</NavLink>
              <NavLink to="/login" className="btn btn-success">Login/Registro</NavLink>
              <NavLink to="/contactanos" className="btn btn-success">Contáctanos</NavLink>
          </Nav>
        </div>
          
      </Container>
    </Navbar>
  );
}

export default Header;