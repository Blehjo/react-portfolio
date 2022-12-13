import { Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";

const TechStack = () => {
    return (
        <Fragment>
            <Row xs={1} sm={1}>
                <Col style={{ margin: '1rem' }}>
                    <Card>
                        <Card.Title>Main Expertise</Card.Title>
                        <Card.Body>
                            <p>React.js</p>
                            <p>Javascript</p>
                            <p>C#</p>
                            <p>ASP.NET</p>
                            <p>SQL</p>
                            <p>Node.js</p>
                            <p>Visual Studio</p>
                            <p>Visual Studio Code</p>
                            <p>Bootstrap</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ margin: '1rem' }}>
                    <Card>
                        <Card.Title>Other Skills</Card.Title>
                        <Card.Body>
                            <p>APIs</p>
                            <p>NoSQL</p>
                            <p>MongoDB</p>
                            <p>.NET</p>
                            <p>Azure</p>
                            <p>AWS</p>
                            <p>Git</p>
                            <p>Data Structures</p>
                            <p>Algorithms</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default TechStack;