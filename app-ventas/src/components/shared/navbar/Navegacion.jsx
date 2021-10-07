import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
//import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">Grupo 13</Navbar.Brand>
      <Nav className="me-center">
        <Nav.Link href="/productos">Productos</Nav.Link>
        <Nav.Link href="/ventas">Ventas</Nav.Link>
        <Nav.Link href="/admin">Administracion</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">LogIn</Nav.Link>
        <Nav.Link eventKey={2} href="/registro">
          Registro
        </Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default Navegacion;
