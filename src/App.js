/*
    Show cat facts
    ==============

    On first load, render the first fact.

    Every time the "Get new fact" button is clicked, add the fact to the list, so it is rendered.

    WARNING: You need to transform the facts variable into a state.
*/

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
    const facts = [
        "Cats are weird",
    ];   
    
    // Use state here
    const [fact, setFact] = useState("");
    useEffect(() => { 
      (async () => {
     const response = await fetch("https://catfact.ninja/fact");
     const obj = await response.json();
     setFact (await getNewFact());
     return obj.fact;
 })();
}, []);

   
    // Using the getNewFact function, load a new fact when this component is first loaded
    // Hint: https://reactjs.org/docs/hooks-effect.html
    

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
                    <ListGroup.Item>{fact}</ListGroup.Item>
                    
                    {facts.map((fact) => <ListGroupItem key={fact}>{ fact }</ListGroupItem>)}
                    
                    <ListGroup.Item action={true} variant="primary">        
                       {/* // {!fact && <setfact onClick={() => getNewFact(true)} 

                            On click, add a new fact to the list.
                            Docs for List Group Item component: 
                            https://react-bootstrap.netlify.app/components/list-group/#list-group-item-props 
                        */}
                        Get new fact
        
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </Container>
    )
}