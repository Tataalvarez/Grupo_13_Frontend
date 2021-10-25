import * as React from "react";
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Grupo 13
        </Navbar.Brand>
        <Nav className="me-center">
          <NavDropdown title="Productos">
            <NavDropdown.Item as={Link} to="/productos/nuevo">Nuevo producto</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productos/editar">Editar producto</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productos/listar">Listar productos</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Ventas">
            <NavDropdown.Item as={Link} to="/pedidos/nuevo">Nuevo pedido</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/pedidos/editar">Editar pedido</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/listarventas">Listar pedidos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/usuarios">
            Administracion
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/login">
            LogIn
          </Nav.Link>
          <Nav.Link eventKey={2} as={Link} to="/registro">
            Registro
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
