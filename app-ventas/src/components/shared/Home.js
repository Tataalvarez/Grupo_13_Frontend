import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import "./Home.css";

export function Home() {
  return (
    <Container className="mt-2">
      <Card border="info home">
        <Card.Header className="text-center">
          Desarrollo Web - Ciclo 3 - MisionTIC 2021
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text as="div">
            <ListGroup className="list-group">
              <ListGroup.Item className="text-center active">
                Integrantes
              </ListGroup.Item>
              <ListGroup.Item>Tatiana</ListGroup.Item>
              <ListGroup.Item>Andrea</ListGroup.Item>
              <ListGroup.Item>
                Richar Mora Noguera (richmon430@gmail.com)
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="list-group pt-2">
              <ListGroup.Item className="text-center active">
                Enlaces de Interes
              </ListGroup.Item>
              <ListGroup.Item>Trello.com</ListGroup.Item>
              <ListGroup.Item>Repositorio de Github</ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Todos los derechos reservados - 2021
        </Card.Footer>
      </Card>
    </Container>
  );
}
