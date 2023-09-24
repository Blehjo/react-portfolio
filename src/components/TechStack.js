import { Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";

const TechStack = () => {
    return (
        <Fragment>
            <Row xs={1} sm={1} md={1} lg={1} xl={2}>
                <Col >
                    <Card bg="dark" style={{ margin: '1rem' }}>
                        <Card.Title style={{ textAlign: 'center', marginTop: '1rem' }}>Main Expertise</Card.Title>
                        <Card.Body>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="React.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>React.js</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Javascript</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="C#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"/></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>C#</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="ASP.NET" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"/></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>ASP.NET</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>MySQL</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="SQLite" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>SQLite</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Node.js</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Visual Studio" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Visual Studio</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Studio Code" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Visual Studio Code</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Bootstrap</Card.Title>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card bg="dark" style={{ margin: '1rem' }}>
                        <Card.Title style={{ textAlign: 'center', marginTop: '1rem' }}>Other Skills</Card.Title>
                        <Card.Body>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Firebase</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>MongoDB</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt=".NET" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"/></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>.NET</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Golang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Golang</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Linux</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Azure" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Azure</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Git</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Github</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="AWS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>AWS</Card.Title>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '1rem' }}>
                                <Col xs={2} sm={2} md={2} lg={2} xl={2}><img alt="Heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" /></Col>
                                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card.Title style={{ position: 'absolute', bottom: '0' }}>Heroku</Card.Title>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default TechStack;