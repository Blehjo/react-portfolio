import { Fragment } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { LinkedinFilled, GithubFilled, MailFilled} from '@ant-design/icons';
import { Outlet } from "react-router";

const Profile = () => {
    return (
        <Fragment>
            <Row style={{ width: '75%', margin: 'auto', marginTop: '3rem', marginBottom: '3rem'}}>
                <Col md={6} lg={5} xl={4}>
                    <Card>
                        <Card.Img variant="top" src={require("../assets/profilepicture/newprofilepic.jpg")} />
                        <Card.Body>
                            <Card.Title>Bleh Seton</Card.Title>
                            <Card.Text>Chicago, Illinois</Card.Text> 
                            <Card.Subtitle>Main Expertise</Card.Subtitle>
                                <Card style={{ margin: '1rem' }}>
                                    <Row>
                                        <Col lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                                        </Col>
                                        <Col lg={8} xl={8}>
                                            <Card.Title>React</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card>
                                <Card style={{ margin: '1rem' }}>
                                    <Row>
                                        <Col lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"/>
                                        </Col>
                                        <Col lg={8} xl={8}>
                                            <Card.Title>C#</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card>
                                <Card style={{ margin: '1rem' }}>
                                    <Row>
                                        <Col lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
                                        </Col>
                                        <Col lg={8} xl={8}>
                                            <Card.Title>Javascript</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card>
                                <Card style={{ margin: '1rem' }}>
                                    <Row>
                                        <Col lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"/>
                                        </Col>
                                        <Col lg={8} xl={8}>
                                            <Card.Title>.NET</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card>
                                <Card style={{ margin: '1rem' }}>
                                    <Row>
                                        <Col lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"/>
                                        </Col>
                                        <Col lg={8} xl={8}>
                                            <Card.Title>ASP.NET</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card>
                            <ListGroup defaultActiveKey="#link1" variant="flush">
                                <ListGroup.Item action href="/about">About</ListGroup.Item>
                                <ListGroup.Item action href="/portfolio">Applications</ListGroup.Item>
                                <ListGroup.Item action href='/resume'>Knowledge</ListGroup.Item>
                                <ListGroup.Item action href='/contact'>Contact</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <small>
                                <Card.Link href="https://github.com/Blehjo"><GithubFilled /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/bleh-s/"><LinkedinFilled /></Card.Link>
                                <Card.Link href='mailto:blehjooo@gmail.com'><MailFilled /></Card.Link>
                            </small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={6} lg={7} xl={8}>
                    <Outlet/>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Profile;