import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
//import { Link } from 'react-router-dom';

function Navegacion () {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
      <Navbar.Brand href="/">Grupo 13</Navbar.Brand>
      <Nav className="me-center">
        <Nav.Link href="/productos">Productos</Nav.Link>
        <Nav.Link href="/ventas">Ventas</Nav.Link>
        <Nav.Link href="/admin" eventKey="disabled">Administracion</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link eventKey={2} href="/registro">
          Registro
        </Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default Navegacion;