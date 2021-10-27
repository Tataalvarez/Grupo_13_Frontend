import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
      <Navbar.Brand as={ Link } to="/">Grupo 13</Navbar.Brand>
      <Nav className="me-center">
        <Nav.Link as={ Link } to="/usuarios" eventKey="enable">Usuarios</Nav.Link>
        <Nav.Link as={ Link } to="/productos">Productos</Nav.Link>
        <Nav.Link as={ Link } to="/ventas">Ventas</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={ Link } to="/login">LogIn</Nav.Link>
        <Nav.Link eventKey={2} as={ Link } to="/registro">
          Registro
        </Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;