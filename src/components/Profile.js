import { Fragment } from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import { LinkedinFilled, GithubFilled, MailFilled, PaperClipOutlined } from '@ant-design/icons';
import { Outlet } from "react-router";

const Profile = () => {
    return (
        <Fragment>
            <Row id="mediatoggle" style={{ width: '75%', margin: 'auto', marginTop: '3rem', marginBottom: '3rem'}}>
                <Col style={{ marginBottom: '1rem'}} md={6} lg={5} xl={4}>
                    <Card >
                        <Card.Img variant="top" src={require("../assets/profilepicture/newprofilepic.jpg")} />
                        <Card.Body>
                            <Card.Title>Bleh Seton</Card.Title>
                            <Card.Text>Chicago, Illinois</Card.Text> 
                            <Card.Subtitle>Main Expertise</Card.Subtitle>
                            <Col style={{ margin: '1rem' }}>
                                <Card.Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href="https://reactjs.org/">
                                    <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                                        </Col>
                                        <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Card.Title style={{ position: 'absolute', top:'0' }}>React</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card.Link>
                            </Col>
                            <Col style={{ margin: '1rem' }}>
                                <Card.Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href="https://www.javascript.com/">
                                    <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
                                        </Col>
                                        <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Card.Title style={{ position: 'absolute', top:'0' }}>Javascript</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card.Link>
                            </Col>
                            <Col style={{ margin: '1rem' }}>
                                <Card.Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href="https://learn.microsoft.com/en-us/dotnet/csharp/">
                                    <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"/>
                                        </Col>
                                        <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Card.Title style={{ position: 'absolute', top:'0' }}>C#</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card.Link>
                            </Col>
                            <Col style={{ margin: '1rem' }}>
                                <Card.Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href="https://dotnet.microsoft.com/en-us/">
                                    <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"/>
                                        </Col>
                                        <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Card.Title style={{ position: 'absolute', top:'0' }}>.NET</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card.Link>
                            </Col>
                            <Col style={{ margin: '1rem' }}>
                                <Card.Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href="https://dotnet.microsoft.com/en-us/apps/aspnet">
                                    <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"/>
                                        </Col>
                                        <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Card.Title style={{ position: 'absolute', top:'0' }} >ASP.NET</Card.Title> 
                                        </Col>
                                    </Row>
                                </Card.Link>
                            </Col>
                        </Card.Body>
                        <Card.Footer>
                            <Nav style={{ justifyContent: 'space-evenly', fontSize: 35, }} >
                                <Nav.Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href='https://github.com/Blehjo'><GithubFilled /></Nav.Link>
                                <Nav.Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/bleh-s/'><LinkedinFilled /></Nav.Link>
                                <Nav.Link style={{ textDecoration: 'none', color: 'black' }} href='mailto:blehjooo@gmail.com'><MailFilled /></Nav.Link>
                                <Nav.Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1eQh9PvQWSuX5sCxs8_-zjOkuwpYO6KLz/view?usp=sharing'><PaperClipOutlined /></Nav.Link>
                            </Nav>
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