import { Fragment } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { LinkedinFilled, GithubFilled, MailFilled} from '@ant-design/icons';
// import TabPages from "./TabPages";

import { Routes, Route } from 'react-router-dom';

// import NavTabs from "./components/NavTabs";
import About from "../routes/About";
import Portfolio from "../routes/Portfolio";
import Resume from "../routes/Resume";
import Contact from "../routes/Contact";
// import Profile from './components/Profile';
import TabPages from '../components/TabPages';

const Profile = () => {
    return (
        <Fragment>
            <Row style={{ width: '75%', margin: 'auto', marginTop: '3rem', marginBottom: '3rem'}}>
                <Col md={4} lg={4} xl={3}>
                    <Card>
                        <Card.Img variant="top" src={require("../assets/profilepicture/newprofilepic.jpg")} />
                        <Card.Body>
                            <Card.Title>Bleh Seton</Card.Title>
                            <Card.Text>Chicago, Illinois</Card.Text>
                            <Card.Link href='mailto:blehjooo@gmail.com'>bseton11@gmail.com</Card.Link>
                            <Card.Subtitle>Main Expertise</Card.Subtitle>
                            <Card.Body>
                                <Card>React</Card>
                                <Card>Javascript</Card>
                                <Card>C#</Card>
                                <Card>.NET</Card>
                                <Card>ASP.NET</Card>
                                <Card>MVC</Card>
                            </Card.Body>
                            <ListGroup defaultActiveKey="#link1" variant="flush">
                                <ListGroup.Item href="/"action>Home</ListGroup.Item>
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
                {/* <Col md={8} lg={8} xl={9}>
                </Col> */}
            </Row>
        </Fragment>
    )
}

export default Profile;