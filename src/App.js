/*
    Show cat facts
    ==============

    On first load, render the first fact.

    Every time the "Get new fact" button is clicked, add the fact to the list, so it is rendered.

    WARNING: You need to transform the facts variable into a state.
*/

import { useEffect, useState } from "react";
import { Container, ListGroup, ListGroupItem, Navbar } from "react-bootstrap";

export default function App() {
  const [facts, setFact] = useState(["Cats are weird."]);

  const getNewFact = async function getNewFact() {
    const response = await fetch("https://catfact.ninja/fact");
    const obj = await response.json();
    setFact([...facts, obj.fact]);
  };

  useEffect(() => {
    getNewFact();
  }, []);

  return (
    <Container>
      <Navbar as="header" bg="primary" className="bg-gradient">
        <Container fluid>
          <Navbar.Brand className="text-white">Tema React 2</Navbar.Brand>
        </Container>
      </Navbar>

      <Container as="main" className="my-5 flex-grow-1">
        <ListGroup>
          <ListGroup.Item className="fw-bold">Cat facts</ListGroup.Item>
          {facts.map(fact => (
            <ListGroupItem key={fact}>{fact}</ListGroupItem>
          ))}
          <ListGroup.Item
            className="fw-bold"
            action={true}
            variant="primary"
            onClick={() => {
              getNewFact();
            }}
          >
            Get new fact
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </Container>
  );
}
