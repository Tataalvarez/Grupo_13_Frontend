import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
        <Navbar.Brand href="/">Grupo 13</Navbar.Brand>
        <Nav className="me-center">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Productos"
            menuVariant="light"
          >
            <NavDropdown.Item as={Link} to="productos/crear">
              Crear Productos
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="productos/editar">
              Editar Productos
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="productos/listar">
              Listar Productos
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Ventas"
            menuVariant="light"
          >
            <NavDropdown.Item as={Link} to="productos/crear">
              Crear Ventas
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="ventas/editar">
              Editar Ventas
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="ventas/listar">
              Listar Ventas
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/admin" eventKey="disabled">
            Administracion
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">LogIn</Nav.Link>
          <Nav.Link eventKey={2} href="/registro">
            Registro
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
