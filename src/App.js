/*
    Show cat facts
    ==============

    On first load, render the first fact.

    Every time the "Get new fact" button is clicked, add the fact to the list, so it is rendered.

    WARNING: You need to transform the facts variable into a state.
*/

import { useEffect, useState } from "react";
import { Container, ListGroup, ListGroupItem, Navbar } from "react-bootstrap";

async function getNewFact() {
    const response = await fetch("https://catfact.ninja/fact");
    const obj = await response.json();

    return obj.fact;
}

export default function App() {
    // Use state here
    // Hint: https://reactjs.org/docs/hooks-state.html
    // Hint: https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly
    const [
        facts,      // The current value of this state 
        setFacts    // A function to update the state
    ] = useState([]);

    // Using the getNewFact function, load a new fact when this component is first loaded
    // Hint: https://reactjs.org/docs/hooks-effect.html

    /**
     * Function to load the fact and add it to the list
     */
    const loadFact = async () => {
        const fact = await getNewFact();

        // When updating the array, we should always use the set function of the state.
        setFacts([...facts, fact]);
    }

    useEffect(
        () => {
            // Even if loadFact is async, we can still call it, and ignore the fact it returns a promise.
            loadFact();

            // We do not want to return anything here. That's why we use curly braces
        }, 

        [], // With an empty array, this effect runs only once, when the component is loaded
    );

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
                    {facts.map((fact) => <ListGroupItem key={fact}>{ fact }</ListGroupItem>)}
                    
                    <ListGroup.Item 
                        action={true} 
                        variant="primary" 
                        onClick={loadFact /* <-- New stuff */}
                    >
                        Get new fact
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </Container>
    )
}