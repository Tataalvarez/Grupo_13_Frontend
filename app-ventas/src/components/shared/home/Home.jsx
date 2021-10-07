import React from "react";
import { Card, Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Card border="info">
        <Card.Header className="text-center">Desarrollo Web - Ciclo 3 - MisionTIC 2021</Card.Header>
        <Card.Body>
          <Card.Title>Integrantes</Card.Title>
          <Card.Text>
            <ul>
              <li>
                Tatiana 
              </li>
              <li>
                Andrea 
              </li>
              <li>
                Palio 
              </li>
            </ul>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </Container>
  );
};

export default Home;
